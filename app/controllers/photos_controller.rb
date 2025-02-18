class PhotosController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @images = Post.by_user(@user.id).includes(image_attachment: :blob).map { |post| post.image }
  end
end
