class AddUserIdToAmount < ActiveRecord::Migration[6.0]
  def change
    add_column :amounts, :user_id, :integer
  end
end
