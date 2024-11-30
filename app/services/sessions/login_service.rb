class Sessions::LoginService < ::ServiceBase
  prepend SimpleCommand

  def call
    user = User.find_by(email: params[:session][:email])

    if user&.valid_password?(params[:session][:password])
      return {
        http_code: :ok,
        code: 200,
        message: "Signed up sucessfully.",
        user:
      }
    end

    {
      http_code: :unauthorized,
      message: "Invalid email or password"
    }
  end
end
