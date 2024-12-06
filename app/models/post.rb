class Post < ApplicationRecord
  belongs_to :user
  has_one_attached :image
  has_many :comments

  scope :by_user, ->(user_id) { where(user_id: user_id) }
  scope :by_wall, ->(wall_id) { where(wall_id: wall_id) }
  scope :by_user_or_wall, ->(user_id, wall_id) {
    where(user_id: user_id).or(where(wall_id: wall_id))
  }
end
