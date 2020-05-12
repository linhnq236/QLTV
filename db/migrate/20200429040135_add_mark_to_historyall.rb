class AddMarkToHistoryall < ActiveRecord::Migration[6.0]
  def change
    add_column :historyalls, :mark, :integer
  end
end
