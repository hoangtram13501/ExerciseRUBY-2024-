class PostSerializer
    include FastJsonapi::ObjectSerializer
    include DateHelper
    attributes :id, :context
    # has_many :comments

    attribute :image do |post|
        post.image.attached? ? Rails.application.routes.url_helpers.rails_blob_path(post.image) : ""
    end

    attribute :created_at do |post|
        DateHelper.formatted_time_in_words(post.created_at)
    end

    attribute :user_name do |post|
        user = post.user
        user&.name
    end

    # attribute :comments do |post|
    #     comments = post.comments.newest.page(1).per(5)
    #     CommentSerializer.new(comments).serializable_hash[:data]
    # end
end
