class FriendshipSerializer
  include FastJsonapi::ObjectSerializer
  include DateHelper
    attributes :id, :status, :friend_id, :user_id

    attribute :created_at do |friendship|
        DateHelper.formatted_time_in_words(friendship.created_at)
    end
end
