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
  has_many :educations, dependent: :destroy
  has_many :experiences, dependent: :destroy
  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships, source: :friend

  has_many :inverse_friendships, class_name: "Friendship", foreign_key: :friend_id
  has_many :inverse_friends, through: :inverse_friendships, source: :user

  accepts_nested_attributes_for :educations, allow_destroy: true
  accepts_nested_attributes_for :experiences, allow_destroy: true

  has_one_attached :avatar

  STATUSES = {pending: 0, approved: 1, cancel: 2}.freeze

  scope :by_user_id_friend_id, ->(user_id, friend_id) {
    where(
      '(friendships.user_id = ? AND friendships.friend_id = ?) OR (friendships.user_id = ? AND friendships.friend_id = ?)', 
      user_id, friend_id, friend_id, user_id
    ).first
  }

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
