class Api::V1::UsersController < Api::ApplicationController
    def index
      users = User.page(page).per(PER_PAGE)
      render json: success(
        code: 200,
        serialize: UserSerializer,
        objects: users,
        message: "List successfully",
        skip_meta: false
      ), status: :ok
    end

    def destroy
      user = User.find(params[:id])
      if user.destroy
        render json: { message: "Delete user successfully" }, status: :ok
      else
        render json: { message: "Can't not delete user" }, status: :unprocessable_entity
      end
    end
end
