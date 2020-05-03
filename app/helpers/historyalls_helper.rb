module HistoryallsHelper
  def unique_active array
    ars = []
    array.each do |a|
      ars.push(a.active)
    end
    return ars[0]
  end
  def unique_staff array
    ars = []
    array.each do |a|
      ars.push(a.staff_id)
    end
    return ars[0]
  end
  def unique_created_at array
    ars = []
    array.each do |a|
      ars.push(a.created_at)
    end
    return ars[0]
  end
  def unique_updated_at array
    ars = []
    array.each do |a|
      ars.push(a.updated_at)
    end
    return ars[0]
  end
  def history_check_user users, user
    users.each do |u|
      if user == u.id
        return u.name
      end
    end
  end
end
