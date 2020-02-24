class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  around_action :switch_locale
  dino_blink = require "dino_blink"

  def check_staff
    unless current_user.admin == 1
      redirect_to root_path
    end
  end
  def check_admin
    unless current_user.admin == 2
      redirect_to root_path
    end
  end
  def check_student
    unless current_user.admin == 0
      redirect_to root_path
    end
  end
  private

  def switch_locale(&action)
    locale = params[:locale] || I18n.default_locale
    I18n.with_locale(locale, &action)
    gon.locale = locale
  end

  def default_url_options
    {locale: I18n.locale}
  end
end
