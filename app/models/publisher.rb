class Publisher < ApplicationRecord
  after_save :create_logs
  
  private
  def create_logs
    col_logs = ["name","address","email"]
    if name_changed? && !name_was.present?
      create_logs_with_action :update, col_logs
    else
      create_logs_with_action :create, col_logs
    end
  end
end
