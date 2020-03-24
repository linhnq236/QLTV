class AddStaffIdPayToBorrow < ActiveRecord::Migration[6.0]
  def change
    add_column :borrows, :staff_id_pay, :integer
  end
end
