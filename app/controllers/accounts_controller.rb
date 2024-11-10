class AccountsController < ApplicationController
  before_action :authenticate_user!

  def manage
    @user = User.includes(:posts).find_by(id: params[:user_id])
    @posts = @user.posts if @user.present?
  end
end
