class Type < ApplicationRecord
  has_many :books
  belongs_to :department
  after_save :create_logs

  def self.search(search_word)
   pattern = "%#{search_word}%"
   where("types.name LIKE ? OR types.code LIKE ?", pattern,pattern )
 end

 private
 def create_logs
   mark = rand(1000..9999)
   col_logs = ["name", "department_id"]
   if name_changed? && !name_was.present?
     create_logs_with_action :update, col_logs,mark
   else
     create_logs_with_action :create, col_logs,mark
   end
 end
end
