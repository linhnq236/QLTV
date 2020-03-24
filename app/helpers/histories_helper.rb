module HistoriesHelper
  def get_staff users, staff_id
    users.each do |user|
      if user.id == staff_id
        return user.name
      end
    end
  end
  def check_staus_history status
      if status == 0
        return t('mybook.finish')
      else
        return t('mybook.lose')
      end
  end
end
