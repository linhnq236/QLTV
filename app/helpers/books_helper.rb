module BooksHelper
  def allow s
      if s.present?
        return "cho phep"
      else
        return "không cho phep"
      end
  end
end
