class User < ApplicationRecord
  before_create :generate_wall_id
  after_create :welcome_send
  has_many :posts

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  
  private

  def welcome_send 
    WelcomeMailer.welcome_send(self).deliver
  end

  def generate_wall_id
    self.wall_id = SecureRandom.hex(6)
  end
end
