class AddTypeToBook < ActiveRecord::Migration[6.0]
  def change
    add_reference :books, :type, null: true, foreign_key: true
  end
end
