module Admin
  class Historyall < ApplicationRecord
  private
    def self.grid(data)
    grid = PivotTable::Grid.new do |g|
      g.source_data = data
      g.column_name = :active
      g.row_name = :field_name
    end
  end
  end
end
