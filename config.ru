# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'

run Rails.application

# require 'sidekiq'
# Sidekiq.configure_client do |config|
#   config.redis = {db: 1}
# end
#
# require 'sidekiq/web'
# run Sidekiq::Web
