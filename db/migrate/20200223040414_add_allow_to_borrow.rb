class AddAllowToBorrow < ActiveRecord::Migration[6.0]
  def change
    add_column :borrows, :allow, :bool
  end
end
