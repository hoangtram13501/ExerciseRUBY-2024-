class WelcomeMailer < ApplicationMailer

  def welcome_send(user)
    @user = user
    mail(to: user.email, from: ENV['SENDER_EMAIL'], subject: "Welcome to my site")
  end
  
end