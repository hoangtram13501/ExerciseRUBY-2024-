# class ExportsController < ApplicationController
#   def send_export_email
#     file_path = params[:file_path]

#     if file_path.blank? || !File.exist?(file_path)
#       Rails.logger.error "CSV file not found: #{file_path}"
#       return render json: { success: false, error: "File not found" }, status: :not_found
#     end

#     begin
#       ExportMailer.send_csv(file_path, current_user.email).deliver_later
#       Rails.logger.info "CSV file sent to #{current_user.email}"

#       render json: { success: true, message: "Email sent successfully" }
#     rescue => e
#       Rails.logger.error "Failed to send email: #{e.message}"
#       render json: { success: false, error: "Failed to send email" }, status: :internal_server_error
#     end
#   end
# end
