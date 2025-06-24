class ExportMailer < ApplicationMailer
  def send_csv(file_path, recipient_email)
    attachments["export.csv"] = File.read(file_path)
    mail(
      to: recipient_email, 
      subject: "Your exported CSV file", 
      body: "Vui lòng kiểm tra file đính kèm."
    )
  end
end
