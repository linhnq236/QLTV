class AddStatusToHistory < ActiveRecord::Migration[6.0]
  def change
    add_column :histories, :status, :integer
  end
end
