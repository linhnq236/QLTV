class AddAmountIdToHistory < ActiveRecord::Migration[6.0]
  def change
    add_column :histories, :amount_id, :integer
  end
end
