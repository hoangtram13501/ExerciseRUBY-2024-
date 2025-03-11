class UsersController < ApplicationController
  before_action :set_user, only: %i[ show edit update destroy ]

  def index
    @users = User.all
  end

  def show
    @user.educations.build if @user.educations.empty?
    @user.experiences.build if @user.experiences.empty?
    @friendship = current_user.friendships.where(friend_id: @user.id).first
    @friendship_requests = Friendship.where(friend_id: @user.id, status: User::STATUSES[:pending])
    @friend_requests = Friendship.where(friend_id: current_user.id, status: 0).includes(:user)
    @friend_list = []
      friendships = Friendship.where('(user_id = ? OR friend_id = ?) AND status = ?', current_user.id, current_user.id, 1)
      friend_ids = friendships.map do |friendship|
        friendship.user_id == current_user.id ? friendship.friend_id : friendship.user_id
      end.uniq
      @friend_list = User.where(id: friend_ids)
      @images = Post.by_user(@user.id).includes(image_attachment: :blob).map { |post| post.image }
   
      @limit_images = @images.first(2)
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users or /users.json
  def create
    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: "User was successfully created." }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1 or /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to user_url(@user), notice: "User was successfully updated." }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @user.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1 or /users/1.json
  def destroy
    @user.destroy!

    respond_to do |format|
    format.html { redirect_to user_url, notice: "User was successfully destroyed." }
    format.json { head :no_content }
    end
  end

  def export
    redis = Redis.new
    redis.set("export_status_#{current_user.id}", "processing") # Đánh dấu trạng thái export

    ExportUsersJob.perform_later(current_user.id)

    render json: { message: "Export started" }
  end

  def check_export_status
    redis = Redis.new
    status = redis.get("export_status_#{current_user.id}") || "not_started"
    file_path = redis.get("export_file_#{current_user.id}")

    render json: { status: status, file_path: file_path }
  end

  def download_export
    redis = Redis.new
    file_path = redis.get("export_file_#{current_user.id}")

    if file_path.present? && File.exist?(file_path)
      send_file file_path, type: 'text/csv', filename: "users_export.csv"
    else
      redirect_to users_path, alert: 'File không tồn tại.'
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :phone_number, :encrypted_password, :intro, experiences_attributes: [:company_name], educations_attributes: [:school_name])
    end
end
