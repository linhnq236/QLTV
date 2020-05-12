module UserHelper
  def disable_account acc
    if acc.nil?
      return true
    end
  end
  def manager admin
    if admin == 2
      return I18n.t("user.admin")
    elsif admin == 1
      return I18n.t("user.teacher")
    else
      return I18n.t("user.student")
    end
  end
  def check_empty_code code
    if code.nil?
      return I18n.t("user.empty")
    else
      return code
    end
  end
  def check_empty_name name
    if name.nil?
      return I18n.t("user.empty")
    else
      return name
    end
  end
  def check_empty_tel tel
    if tel.nil?
      return I18n.t("user.empty")
    else
      return tel
    end
  end
  def check_empty_add add
    if add.nil?
      return I18n.t("user.empty")
    else
      return add
    end
  end
#mark account disable
  def mark_account_disable disable
    str = "yellow"
    if disable == true
      return str
    end
  end
#check disable_account
  def check_disable disable
    if disable == true
      return 0
    else
      return 1
    end
  end

end
