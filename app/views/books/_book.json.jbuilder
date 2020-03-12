json.extract! book, :id, :name, :publishyear, :author_id, :type_id, :publisher_id, :image, :created_at, :updated_at
json.url book_url(book, format: :json)
