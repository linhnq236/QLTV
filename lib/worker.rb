require 'sidekiq'
Sidekiq.configure_client do |config|
  config.redis = {db: 1}
end

Sidekiq.configure_server do |config|
  config.redis = {db: 1}
end

class OurWorker
  include Sidekiq::Worker
  def perform(complexity)
    case complexity
    when 'super_hard'
      puts 'Charging a credit card ...'
      raise "Woops stuff got bad"
      puts 'really took quite a bit of effort'
    when 'hard'
      sleep 10
      puts 'that was a bit of work'
    else
      sleep 1
      puts 'that was not a lot of work'
    end

  end
end
