class CreateAmounts < ActiveRecord::Migration[6.0]
  def change
    create_table :amounts do |t|
      t.string :code
      t.integer :book_id
      t.boolean :active

      t.timestamps
    end
  end
end
