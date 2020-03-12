class AddUserToBorrow < ActiveRecord::Migration[6.0]
  def change
    add_reference :borrows, :user, null: false, foreign_key: true
  end
end
