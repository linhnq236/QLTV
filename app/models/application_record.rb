class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  private

  def create_logs_with_action action, col_logs
    col_logs.each do |attr_name|
      if (action == :update && send("#{attr_name}_changed?")) ||
        (action == :create && send(attr_name).present?)
        Historyall.create(
          active: action,
          field_name: attr_name,
          value_old: send("#{attr_name}_was"),
          value_new: send(attr_name),
          staff_id: User.current.id
        )
      end
    end
  end
end
