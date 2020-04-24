module BorrowsHelper
  def getBookCode active,book_id1,book_id2,code_book
    if book_id1 == book_id2 && active == true
      return code_book
    end
  end
  def check_status status
    if status == 0
      return I18n.t("book.processed")
    else
      return I18n.t("book.borrowed")
    end
  end
  def confirm val1,val2,active
    str = "selected id=ds_select ds=1";
    if val1==val2 && active==true
      return str
    end
  end
end
