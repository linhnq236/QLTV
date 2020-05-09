module Api
  class Book < ApplicationRecord
    belongs_to :author

    private

    def self.search(search_word)
     pattern = "%#{search_word}%"
     where("books.name LIKE ?",pattern )
    end

  end
end
