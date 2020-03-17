class Equipment < ApplicationRecord
  validates :equiqment_name, presence: true

  def self.auto
    Equipment.update(:active => "true").where(:id => 1)
  end
end
