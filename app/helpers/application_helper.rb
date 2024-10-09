module ApplicationHelper
  def alert_class(key)
    case key
    when 'notice' then 'success'
    when 'alert' then 'danger'
    when 'warning' then 'warning'
    when 'info' then 'info'
    else 'secondary'
    end
  end
end
