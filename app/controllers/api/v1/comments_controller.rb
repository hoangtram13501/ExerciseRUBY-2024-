class Api::V1::CommentsController < Api::ApplicationController

  def index
    comments = Comment.by_post(params[:post_id]).page(page).per(PER_PAGE)
    render json: success(
      code: 200,
      serialize: CommentSerializer,
      objects: comments,
      message: "List successfully",
      skip_meta: false
    ), status: :ok
  end
  def create
    comment = current_user.comments.new(comment_params)
    if comment.save
      render json: success(
        code: 200,
        serialize: CommentSerializer,
        objects: [ comment ],
        message: "Create Comment successfully",
        skip_meta: true
      ), status: :ok
    else
      render json: { message: "Can't create post" }, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comments).permit(:content, :post_id)
  end
end
