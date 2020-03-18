set :output, "/path/to/my/cron_log.log"
set :environment, :development

every :wednesday, at: "11:50am" do
  rake "equipment:hello"
end
