class CreateEquipment < ActiveRecord::Migration[6.0]
  def change
    create_table :equipment do |t|
      t.string :equiqment_name
      t.boolean :active

      t.timestamps
    end
  end
end
