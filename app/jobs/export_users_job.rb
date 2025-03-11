require 'csv'
require 'redis'

class ExportUsersJob < ApplicationJob
  queue_as :default

  def perform(user_id)
    redis = Redis.new

    file_path = Rails.root.join('tmp', "users_export_#{user_id}.csv")

    CSV.open(file_path, 'w') do |csv|
      csv << ['ID', 'Name', 'Email', 'Created At']
      User.find_each do |user|
        csv << [user.id, user.name, user.email, user.created_at]
      end
    end

    redis.set("export_status_#{user_id}", "done")
    redis.set("export_file_#{user_id}", file_path.to_s)
  end
end
