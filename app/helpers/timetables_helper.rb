module TimetablesHelper
  def take_datetime datetime
    array = datetime.split(',')
    return array[0]
  end
end
