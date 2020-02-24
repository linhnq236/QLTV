class Type < ApplicationRecord
  has_many :books
  belongs_to :department
end
