json.extract! notice, :id, :notice_name, :content, :start, :end, :created_at, :updated_at
json.url notice_url(notice, format: :json)
