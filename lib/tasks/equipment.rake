namespace :equipment do
  task :hello do
     equipment = Equipment.all
     equipment.each do |a|
       puts "#{a.id}"
     end
   end
end
