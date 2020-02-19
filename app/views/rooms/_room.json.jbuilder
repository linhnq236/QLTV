json.extract! room, :id, :room_code, :room_name, :created_at, :updated_at
json.url room_url(room, format: :json)
