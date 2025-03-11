class UserMailer < ApplicationMailer

  default from: 'noreply@example.com'
  
  def new_user_mailer
    @greeting = "Hi"

    mail to: "to@example.org"
  end

  def send_csv(user, file_path)
    attachments["users_export.csv"] = File.read(file_path) # Đính kèm file
    mail(to: user.email, subject: "Your User Export CSV is Ready")
  end
end
