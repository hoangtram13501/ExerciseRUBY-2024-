class CommentSerializer
    include FastJsonapi::ObjectSerializer
    include DateHelper
    attributes :id, :content, :post_id, :user_id
    attribute :user_name do |comment|
        user = comment.user
        user&.name
    end

    attribute :created_at do |comment|
        DateHelper.formatted_time_in_words(comment.created_at)
    end
end
