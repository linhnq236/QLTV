class History < ApplicationRecord
  belongs_to :user
  belongs_to :book
  belongs_to :amount
end
