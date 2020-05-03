module Admin
  class HistoryallsController < ApplicationController
    def index
      array_cols = []
      cols_mark = Historyall.select("distinct(mark)").order("created_at DESC")
      cols_mark.each do |col|
        historyalls = Historyall.where(mark: col.mark)
        array_cols.push(historyalls)
      end
      @historyalls = array_cols
      @users = User.all
    end
  end
end
