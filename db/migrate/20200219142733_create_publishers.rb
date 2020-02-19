class CreatePublishers < ActiveRecord::Migration[6.0]
  def change
    create_table :publishers do |t|
      t.string :name
      t.string :address
      t.string :email
      t.string :represent

      t.timestamps
    end
  end
end
