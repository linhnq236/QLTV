class AddBookToBorrow < ActiveRecord::Migration[6.0]
  def change
    add_reference :borrows, :book, null: true, foreign_key: true
  end
end
