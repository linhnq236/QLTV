class Equipment < ApplicationRecord
  def self.auto
    Equipment.update(:active => "true").where(:id => 1)
  end
end
