class AddFieldNameToHistoryall < ActiveRecord::Migration[6.0]
  def change
    add_column :historyalls, :field_name, :string
  end
end
