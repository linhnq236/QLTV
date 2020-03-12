class AddCodeToBook < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :code, :string
  end
end
