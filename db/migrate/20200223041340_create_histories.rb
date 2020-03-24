class CreateHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :histories do |t|
      t.integer :staff_id, index:true
      t.integer :borrow_id

      t.timestamps
    end
  end
end
