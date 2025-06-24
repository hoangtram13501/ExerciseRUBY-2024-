class Admin::DashboardController < ApplicationController
  def index
    @total_users = User.count
    @total_posts = Post.count
    @total_comments = Comment.count
  end
end
