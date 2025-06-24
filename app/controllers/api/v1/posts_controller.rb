class Api::V1::PostsController < Api::ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    posts = Post.by_wall(params[:wall_id]).includes(:user, :comments).page(page).per(10)
    render json: success(
      code: 200,
      serialize: PostSerializer,
      objects: posts,
      message: "List successfully",
      skip_meta: false
    ), status: :ok
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: success(
        code: 200,
        serialize: PostSerializer,
        objects: [ post ],
        message: "Create Post successfully",
        skip_meta: true
      ), status: :ok
    else
      render json: { message: "Can't create post" }, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: success(
        code: 200,
        serialize: PostSerializer,
        objects: [ @post ],
        message: "Update Post successfully",
        skip_meta: true
      ), status: :ok
    else
      render json: { message: "Can't update post" }, status: :unprocessable_entity
    end
  end

  def destroy
    if @post.destroy
      render json: { message: "Post deleted successfully" }, status: :ok
    else
      render json: { message: "Can't delete post" }, status: :unprocessable_entity
    end
  end

  private
  
  def set_post
    @post = Post.find_by(id: params[:id])
    render json: { message: "Post not found" }, status: :not_found unless @post
  end

  def post_params
    params.require(:post).permit(:context, :image, :wall_id)
  end
end
