class AddStaffIdPayToHistory < ActiveRecord::Migration[6.0]
  def change
    add_column :histories, :staff_id_pay, :integer
  end
end
