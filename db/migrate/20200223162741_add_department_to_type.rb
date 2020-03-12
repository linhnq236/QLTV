class AddDepartmentToType < ActiveRecord::Migration[6.0]
  def change
    add_reference :types, :department, null: false, foreign_key: true
  end
end
