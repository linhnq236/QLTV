# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
[
  {id: 1,email: 'admin@gmail.com', password: '123456', password_confirmation: '123456', admin: 2},
  {id: 2,email: 'teacher@gmail.com', password: '123456', password_confirmation: '123456', admin: 1},
  {id: 3,email: 'teacher1@gmail.com', password: '123456', password_confirmation: '123456', admin: 1},
  {id: 4,email: 'loc@gmail.com', password: '123456', password_confirmation: '123456', admin: 0},
  {id: 5,email: 'linh@gmail.com', password: '123456', password_confirmation: '123456', admin: 0},
].each do |attr|
  user = User.find_by(id: attr[:id])
  User.transaction do
    unless user
      user = User.new(attr)
      user.save
    else
      user.update_attributes attr
    end
  end
end
[
  {id: 1,equiqment_name: 'Đèn', active: false},
  {id: 2,equiqment_name: 'Quạt', active: false},
  # {id: 3,equiqment_name: 'Đèn 15', active: false},
].each do |attr|
  equipment = Equipment.find_by(id: attr[:id])
  Equipment.transaction do
    unless equipment
      equipment = Equipment.new(attr)
      equipment.save
    else
      equipment.update_attributes attr
    end
  end
end

[
  {id: 1,name: 'cntt'},
  {id: 2,name: 'ctgt'},
  {id: 3,name: 'ck'},
  {id: 4,name: 'dtvt'},
  {id: 5,name: 'hh'},
  {id: 6,name: 'khtn'},
  {id: 7,name: 'kt'},
  {id: 8,name: 'lvtn'},
  {id: 9,name: 'llct'},
  {id: 10,name: 'xdkt'},
  {id: 11,name: 'ytsk'},
  {id: 12,name: 'nn'},
].each do |attr|
  department = Department.find_by(id: attr[:id])
  Department.transaction do
    unless department
      department = Department.new(attr)
      department.save
    else
      department.update_attributes attr
    end
  end
end
[
  {id: 1,name: 'Lập trình web', department_id: Department.find(1).id},
  {id: 2,name: 'Photoshop', department_id: Department.find(1).id},
  {id: 3,name: 'Công trình cầu', department_id: Department.find(2).id},
  {id: 4,name: 'Động cơ', department_id: Department.find(3).id},
  {id: 5,name: 'Động cơ quay', department_id: Department.find(3).id},
  {id: 6,name: 'Điện hóa học', department_id: Department.find(4).id},
  {id: 7,name: 'Đóng tàu thủy', department_id: Department.find(5).id},
  {id: 8,name: 'Giáo trình thí nghiệm', department_id: Department.find(6).id},
  {id: 9,name: 'Kế toán', department_id: Department.find(7).id},
  {id: 10,name: 'Luận văn tốt nghiệp', department_id: Department.find(8).id},
  {id: 11,name: 'Lịch sử thành lập Đảng', department_id: Department.find(9).id},
  {id: 12,name: 'Kiến trúc xây dựng', department_id: Department.find(10).id},
  {id: 13,name: 'Thi công', department_id: Department.find(11).id},
  {id: 14,name: 'Kỹ năng giao tiếp', department_id: Department.find(12).id},
].each do |attr|
  type = Type.find_by(id: attr[:id])
  Type.transaction do
    unless type
      type = Type.new(attr)
      type.save
    else
      type.update_attributes attr
    end
  end
end
[
  {id: 1,name: 'Nguyễn Hoàng Anh'},
  {id: 2,name: 'Nguyễn Tuấn Hùng'},
  # {id: 3,name: 'Nguyễn Đăng Khoa'},
  # {id: 4,name: 'Hoàng Tuấn'},
  # {id: 5,name: 'Trân Tuấn Hùng'},
  # {id: 6,name: 'Trần Khoa'},
  # {id: 7,name: 'Nguyễn Tuấn Anh'},
  # {id: 8,name: 'Đào Thị Hùng'},
  # {id: 9,name: 'Nguyễn  Thị Hồng'},
  # {id: 10,name: 'Nguyễn  Kim Anh'},
  # {id: 11,name: 'Ngô Thị Kim Oanh'},
  # {id: 12,name: 'Nguyễn  Bửu Hoàng'},
  # {id: 13,name: 'Ngô  Văn Sơn'},
  # {id: 14,name: 'Đào Bá Văn'},
  # {id: 15,name: 'Trần  Văn Lương'},
  # {id: 16,name: 'Đỗ  Đức Anh'},
  # {id: 17,name: 'Hoàng  Văn Hùng'},
  # {id: 18,name: 'Nguyễn  Thị Kim Ánh'},
].each do |attr|
  author = Author.find_by(id: attr[:id])
  Author.transaction do
    unless author
      author = Author.new(attr)
      author.save
    else
      author.update_attributes attr
    end
  end
end
[
  {id: 1,name: 'NXB Nhi Đồng'},
  {id: 2,name: 'NXB Tuổi Trẻ'},
  {id: 3,name: 'NXB Thanh Niên'},
].each do |attr|
  publisher = Publisher.find_by(id: attr[:id])
  Publisher.transaction do
    unless publisher
      publisher = Publisher.new(attr)
      publisher.save
    else
      publisher.update_attributes attr
    end
  end
end
# [
#   {id: 1,name: 'NXB Nhi Đồng'},
#   {id: 2,name: 'NXB Tuổi Trẻ'},
#   {id: 3,name: 'NXB Thanh Niên'},
# ].each do |attr|
#   publisher = Publisher.find_by(id: attr[:id])
#   Publisher.transaction do
#     unless publisher
#       publisher = Publisher.new(attr)
#       publisher.save
#     else
#       publisher.update_attributes attr
#     end
#   end
# end

# {id: 1,name: 'Kỹ thuật phần mềm', publishyear:"1985", author_id: Author.find(1).id, publisher_id: Publisher.find(1).id, type_id: Type.find(1).id, image: "/assets/cntt.jpeg" },
# {id: 2,name: 'Thiết kế công trình', publishyear:"1985", author_id: Author.find(2).id, publisher_id: Publisher.find(1).id, type_id: Type.find(2).id, image: "/assets/ctgt.jpeg"},
# {id: 3,name: 'Kỹ thuật cơ khí', publishyear:"1985", author_id: Author.find(3).id, publisher_id: Publisher.find(2).id, type_id: Type.find(3).id, image: "/assets/ck.jpeg"},
# {id: 4,name: 'Kỹ thuật vi xử lý', publishyear:"1985", author_id: Author.find(4).id, publisher_id: Publisher.find(2).id, type_id: Type.find(4).id, image: "/assets/dtvt.jpeg"},
# {id: 5,name: 'Vận chuyển hàng hải', publishyear:"1985", author_id: Author.find(5).id, publisher_id: Publisher.find(2).id, type_id: Type.find(5).id, image: "/assets/hh.jpeg"},
# {id: 6,name: 'Sự kỳ diệu của các lực trong vật lý', publishyear:"1985", author_id: Author.find(6).id, publisher_id: Publisher.find(2).id, type_id: Type.find(6).id, image: "/assets/khtn.jpeg"},
# {id: 7,name: 'Tư tưởng Hồ Chí Minh', publishyear:"1985", author_id: Author.find(7).id, publisher_id: Publisher.find(1).id, type_id: Type.find(7).id, image: "/assets/lvct.jpeg"},
# {id: 8,name: 'Vẽ ghi kiến trúc', publishyear:"1985", author_id: Author.find(8).id, publisher_id: Publisher.find(3).id, type_id: Type.find(9).id, image: "/assets/xdkt.jpeg"},
# {id: 9,name: 'Kỹ thuật y tế trường học', publishyear:"1985", author_id: Author.find(9).id, publisher_id: Publisher.find(3).id, type_id: Type.find(11).id, image: "/assets/ytsk.jpeg"},
# {id: 10,name: 'Cẩm nang sử dụng các thì trong tiếng ', publishyear:"1985", author_id: Author.find(12).id, publisher_id: Publisher.find(3).id, type_id: Type.find(1).id, image: "/assets/nn.jpeg"},
# {id: 11,name: 'Lập trình web', publishyear:"1985", author_id: Author.find(18).id, publisher_id: Publisher.find(1).id, type_id: Type.find(1).id, image: "/assets/ltw.jpeg"},
# {id: 12,name: 'Sử dụng Mysql', publishyear:"1985", author_id: Author.find(16).id, publisher_id: Publisher.find(3).id, type_id: Type.find(1).id, image: "/assets/msql.jpeg"},
# {id: 13,name: 'Photoshop', publishyear:"1985", author_id: Author.find(17).id, publisher_id: Publisher.find(1).id, type_id: Type.find(1).id, image: "/assets/ps.jpeg"},
