class Timetable < ApplicationRecord
  belongs_to :room
  belongs_to :course
  belongs_to :user
end
