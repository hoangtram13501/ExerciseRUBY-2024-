class Api::V1::PostsController < Api::ApplicationController
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

    private

    def post_params
      params.require(:post).permit(:context, :image, :wall_id)
    end
end
