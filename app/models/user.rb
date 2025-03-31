class User < ApplicationRecord
  after_create :welcome_send
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable,
         :jwt_authenticatable, 
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  private

  def welcome_send
    WelcomeMailer.welcome_send(self).deliver
  end
end
