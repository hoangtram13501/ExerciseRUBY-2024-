require "redis"

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
    def export
      redis = Redis.new
      user_id = current_user.id

      redis.set("export_status_#{user_id}", "in_progress")

      ExportUsersJob.perform_later(user_id)

      render json: { message: "Export started", status: "in_progress" }, status: :accepted
    end

    def check_export_status
      redis = Redis.new
      user_id = current_user.id

      status = redis.get("export_status_#{user_id}") || "not_started"
      file_path = redis.get("export_file_#{user_id}")

      response_data = { status: status }
      response_data[:file_path] = file_path if status == "done"

      render json: response_data, status: :ok
    end
    
end
