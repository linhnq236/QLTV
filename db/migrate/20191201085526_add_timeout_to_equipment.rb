class AddTimeoutToEquipment < ActiveRecord::Migration[6.0]
  def change
    add_column :equipment, :timeout, :datetime
  end
end
