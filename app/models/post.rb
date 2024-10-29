class Post < ApplicationRecord
  belongs_to :user, foreign_key: 'wall_id', primary_key: 'wall_id'
  validates :title, presence: true
  validates :context, presence: true

  has_one_attached :image 
end
