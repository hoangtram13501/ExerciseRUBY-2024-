# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# 10.times do |n|
#   User.create!(
#     name: "User #{n+1}",
#     email: "user#{n+1}@example.com",
#     phone_number: "123#{n}0987#{n+1}",
#     password: "password",
#     password_confirmation: "password"
#   )
# end

10.times do |x|
  Post.create(context: "xxxxxx")
end