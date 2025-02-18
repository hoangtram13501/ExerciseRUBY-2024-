class Api::V1::FriendshipsController < Api::ApplicationController

  def create
    friendship = Friendship.new(friendships_params.merge(status: User::STATUSES[:pending]))
    if friendship.save
      render json: success(
        code: 200,
        serialize: FriendshipSerializer,
        objects: [friendship],
        message: "Create friendship successfully",
        skip_meta: true
      ), status: :ok
    else
      render json: { message: "Can't create friendship" }, status: :unprocessable_entity
    end
  end

  def index
    @friend_requests = Friendship.where(friend_id: current_user.id, status: 'pending').includes(:user)
  end

  def update
    friendship = Friendship.by_user_id_friend_id(friendship_params[:user_id], friendship_params[:friend_id])
    if friendship&.destroy
      render json: { message: "Cancel request ok" }, status: :ok
    else
      render json: { message: "Can't cancel request" }, status: :unprocessable_entity
    end
  end

  def destroy
    user_id = params[:friendships][:user_id] || params[:user_id]
    friend_id = params[:friendships][:friend_id] || params[:friend_id]

    friendship = Friendship.find_by(user_id: user_id, friend_id: friend_id)

    if friendship
      friendship.destroy
      render json: { message: "Friendship deleted successfully" }, status: :ok
    else
      render json: { error: "Friendship not found" }, status: :not_found
    end
  end

  def cancel_request
    friendship =
    if params[:id].present?
      Friendship.find_by_id(params[:id])
    else 
      Friendship.by_user_id_friend_id(friendship_params[:user_id], friendship_params[:friend_id])
    end
    if friendship&.destroy
      render json: { message: "Cancel request ok" }, status: :ok
    else
      render json: { message: "Can't cancel request" }, status: :unprocessable_entity
    end
  end

  def unfriend
    friendship = Friendship.ind_by_id(params[:id])
    if friendship
      new_relation = Friendship.find_by(user_id: friendship.friend_id, friend_id: friendship.user_id)
      new_relation&.destroy
      friendship&.destroy
      render json: { message: "unfriend ok" }, status: :ok
    else
      render json: { message: "cancel unfriend" }, status: :unprocessable_entity
    end
  end

  def approve
    friendship = Friendship.find_by_id(params[:id])
    if friendship && friendship.update(status: User::STATUSES[:approved])
      new_relation = Friendship.new
      new_relation.user_id = friendship.friend_id
      new_relation.friend_id = friendship.user_id
      new_relation.status =User::STATUSES[:approved]
      new_relation.save
      
      render json: { message: "Approved" }, status: :ok
    else
      render json: { message: "Can't approve request" }, status: :unprocessable_entity
    end
  end


  private

  def friendships_params
    params.require(:friendships).permit(:friend_id, :user_id)
  end
end
