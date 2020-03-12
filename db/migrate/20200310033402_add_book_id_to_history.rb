class AddBookIdToHistory < ActiveRecord::Migration[6.0]
  def change
    add_column :histories, :book_id, :integer
  end
end
