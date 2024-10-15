class AccountsController < ApplicationController
  before_action :authenticate_user!

  def manage
    @user = current_user
    # @posts = @user.posts
  end
end
