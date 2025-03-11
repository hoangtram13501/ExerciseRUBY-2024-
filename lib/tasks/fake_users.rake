require 'faker'

namespace :db do
  desc "Fake nhiều người dùng"
  task fake_users: :environment do
    1000.times do
      User.create!(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        password: '12345678',
        password_confirmation: '12345678',
        age: rand(18..70)
      )
    end
    puts "Đã tạo xong 10.000 người dùng!"
  end
end
