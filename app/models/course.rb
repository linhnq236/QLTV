class Course < ApplicationRecord
  has_many :usercourses
  has_many :timetables
  belongs_to :studytime

  private
  def self.search(search_word)
    pattern = "%#{search_word}%"
    where("courses.course_name LIKE ?", pattern )
  end
end
