# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
[
  {id:1, email: 'admin@gmail.com', password: 'Linh236!@#', password_confirmation: 'Linh236!@#', admin: 2},
  {id:2, email: 'teacher@gmail.com', password: '123456', password_confirmation: '123456', admin: 1},
  {id:3, email: 'teacher1@gmail.com', password: '123456', password_confirmation: '123456', admin: 1},
  {id:4, email: 'student@gmail.com', password: '123456', password_confirmation: '123456', admin: 0},
  {id:5, email: 'student1@gmail.com', password: '123456', password_confirmation: '123456', admin: 0},
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
  {id: 1,equiqment_name: 'Đèn 13', active: false},
  {id: 2,equiqment_name: 'Đèn 14', active: false},
  {id: 3,equiqment_name: 'Đèn 15', active: false},
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
  {id: 2,name: 'kt'},
  {id: 3,name: 'ck'},
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
  {id: 1,name: 'Quản trị web', department_id: Department.first.id},
  {id: 2,name: 'Đầu tư chứng khoán', department_id: Department.second.id},
  {id: 3,name: 'Động lực học', department_id: Department.third.id},
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
  {id: 1,name: 'Nguyễn Văn Toàn'},
  {id: 2,name: 'Nguyền Hoàng Tùng'},
  {id: 3,name: 'Hoàng Thanh Sơn'},
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
