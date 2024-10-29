class Api::PostsController < ApplicationController
  before_action :authenticate!

  def index
    @posts = Post.all

    render template: 'accounts/manage'
  end

  def create
    
  end

  private

  def post_params
    params.permit(:title, :context, :image, :user_id)
  rescue ActionController::ParameterMissing
    {}
  end
end