class User < ApplicationRecord
  after_create :welcome_send

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  
  private

  def welcome_send 
    WelcomeMailer.welcome_send(self).deliver
  end
end
