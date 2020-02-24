class CreateHistoryalls < ActiveRecord::Migration[6.0]
  def change
    create_table :historyalls do |t|
      t.string :active
      t.string :value_old
      t.string :value_new
      t.integer :staff_id

      t.timestamps
    end
  end
end
