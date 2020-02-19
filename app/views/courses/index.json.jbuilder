json.array! @courses, partial: "courses/course", as: :course
json.array! @teachers, partial: "teachers/teacher", as: :teacher
