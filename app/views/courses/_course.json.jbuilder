json.extract! course, :id, :name, :content, :created_at, :updated_at
json.url course_url(course, format: :json)
json.extract! teacher, :id, :teacher_code, :name, :created_at, :updated_at
json.url teacher_url(teacher, format: :json)
