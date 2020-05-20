module BooksHelper
  def allow s
      if s.present?
        return "cho phep"
      else
        return "không cho phep"
      end
  end

  def colection_amount_code amounts, book_id
      amounts.each do |a|
        if a.book_id == book_id
          return a.code.tr("0-9","")
        end
      end
  end

  def new_book currentdate, created
    if currentdate.to_time <= created.to_time.months_since(1)
      return true
    end
  end
end
