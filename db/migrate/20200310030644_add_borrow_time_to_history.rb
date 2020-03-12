class AddBorrowTimeToHistory < ActiveRecord::Migration[6.0]
  def change
    add_column :histories, :borrow_time, :datetime
  end
end
