class User < ApplicationRecord
  after_create :welcome_send
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable,
         :jwt_authenticatable, 
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  before_create :generate_wall_id

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_one_attached :avatar

  class << self
    def new_token
      SecureRandom.urlsafe_base64
    end
  end

  def generate_wall_id
    self.wall_id = User.new_token
  end

  private

  def welcome_send
    WelcomeMailer.welcome_send(self).deliver
  end
end
