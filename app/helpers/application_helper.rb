module ApplicationHelper
  def convert_ckeditor string
    return string.html_safe
  end

  def check_admin
    if current_user.admin == 2
      return true;
    end
  end

  def format created_at
      return created_at.strftime("%d-%m-%y")
  end
  def format_day day
      return day.strftime("%d")
  end

  def format_datetime timer
    if timer.nil?
      return "00:00:0000 0:0"
    else
      return timer.strftime("%d-%m-%y %H:%M")
    end
  end
end
