class AddTimerToEquipment < ActiveRecord::Migration[6.0]
  def change
    add_column :equipment, :timer, :datetime
  end
end
