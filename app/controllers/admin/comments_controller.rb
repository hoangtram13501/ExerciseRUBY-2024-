class Admin::CommentsController < ApplicationController
  def index
    @comments = Comment.includes(:user).order(created_at: :desc)
  end

  def edit
    @comment = Comment.find(params[:id])
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      redirect_to admin_comments_path, notice: "Cập nhật bình luận thành công!"
    else
      render :edit
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to admin_comments_path, notice: "Đã xóa bình luận!"
  end

  private
  
  def comment_params
    params.require(:comment).permit(:content, :user_id, :post_id) 
  end
end
