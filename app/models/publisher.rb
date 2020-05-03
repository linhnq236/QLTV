class Publisher < ApplicationRecord
  has_many :books
  after_save :create_logs
  validates :name, presence: true
  private
  def create_logs
    mark = rand(1000..9999)
    col_logs = ["name","address","email"]
    if name_changed? && !name_was.present?
      create_logs_with_action :update, col_logs,mark
    else
      create_logs_with_action :create, col_logs,mark
    end
  end
end
