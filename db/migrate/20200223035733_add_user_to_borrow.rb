class AddUserToBorrow < ActiveRecord::Migration[6.0]
  def change
    add_reference :borrows, :user, null: true, foreign_key: true
  end
end
