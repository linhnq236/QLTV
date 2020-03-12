class Borrow < ApplicationRecord
  belongs_to :book
  belongs_to :user
  # before_save :create_logs

  private
  def create_logs
    col_logs = ["book_id","user_id","allow"]
    if book_id_changed? && user_id_changed? && !book_id_was.present? && !user_id_was.present?
      create_logs_with_action :create, col_logs
    else
      create_logs_with_action :update, col_logs
    end
  end
end
