class AddTypeToBook < ActiveRecord::Migration[6.0]
  def change
    add_reference :books, :type, null: false, foreign_key: true
  end
end
