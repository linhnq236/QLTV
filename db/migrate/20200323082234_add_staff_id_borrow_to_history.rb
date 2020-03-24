class AddStaffIdBorrowToHistory < ActiveRecord::Migration[6.0]
  def change
    add_column :histories, :staff_id_borrow, :integer
  end
end
