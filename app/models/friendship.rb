class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: "User"
  belongs_to :sender, class_name: "User", foreign_key: 'user_id'
  belongs_to :receiver, class_name: "User", foreign_key: 'friend_id'

  scope :by_user_id_friend_id, ->(user_id, friend_id) { where(user_id: user_id, friend_id: friend_id).first }


  # validates :user_id, uniqueness: { scope: :friend_id }
end
