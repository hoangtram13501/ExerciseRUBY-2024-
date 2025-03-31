class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  scope :newest, -> { order(created_at: :desc) }
  scope :by_post, ->(post_id) { where(post_id: post_id).order(created_at: :desc) }
end
