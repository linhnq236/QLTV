class AddPayTimeToHistory < ActiveRecord::Migration[6.0]
  def change
    add_column :histories, :pay_time, :datetime
  end
end
