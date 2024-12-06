desc "Update information for each user"
namespace :db do
  task update_infor_user: :environment do
    User.find_each do |user|
      user.update_attribute(:wall_id, User.new_token)
    end
  end
end
