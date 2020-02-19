set :output, "/path/to/my/cron_log.log"
set :environment, :development

every 2.minutes do
  runner "Equipment.auto"
end
