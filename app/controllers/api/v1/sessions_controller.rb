class Api::V1::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    data  = Session::LoginService.call(params)
    if data.success?
      sign_in data.result[:user]
      render json: {
        status: {code: 200, message: data.result[:message] },
        data: UserSerializer.new(data.result[:user]).serializers_hash

      } 
    else
      render json: {error: data.result[:message] }, status: data.result[:http_code]
    end
  end

  def destroy
    token = request.headers["Authorization"]&.split(" ")&.last
    if token.present?
      Warden::JWTAuth::TokenRevoker.new.call(token)
      sign_out current_user if current_user
      render json: { message: "Logged out successfully" }, status: :ok
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end
end
