class Book < ApplicationRecord
  belongs_to :type
  belongs_to :author
  has_many :borrows
  has_many :histories
  belongs_to :publisher
  belongs_to :type

  validates :name, uniqueness: true
  validates :name,:author_id,:type_id,:publisher_id, presence: true
  after_save :create_logs

  private

  def self.search(search_word)
   pattern = "%#{search_word}%"
   where("books.name LIKE ? OR books.code LIKE ?", pattern,pattern )
  end

  def create_logs
    col_logs = ["name","publishyear","author_id", "type_id","image", "amount"]
    if name_changed? && !name_was.present?
      create_logs_with_action :update, col_logs
    else
      create_logs_with_action :create, col_logs
    end
  end
end
