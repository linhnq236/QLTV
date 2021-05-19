source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.0'
# Use mysql as the database for Active Record
# gem 'mysql2', '>= 0.4.4'
group :development do
  gem 'sqlite3'
end
group :production do
  gem 'pg'
end
# Use Puma as the app server
gem 'puma', '~> 4.3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 4.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'
gem 'jbuilder', '~> 2.7'
gem 'gmaps4rails'
gem 'gon'
gem 'slim-rails'
gem 'carrierwave-base64'
gem 'devise'
gem 'fullcalendar-rails'
gem 'momentjs-rails'
gem "simple_calendar", "~> 2.0"
gem "dino"
gem "i18n-js"
gem 'bootstrap-datepicker-rails'
gem 'paperclip'
gem 'mini_magick'
gem 'carrierwave'
gem 'ckeditor', github: 'galetahub/ckeditor'
gem 'rack'
gem 'jquery-rails'
gem 'sprockets-rails'
gem 'rack-cors', :require => 'rack/cors'
gem 'flex-slider-rails'
gem 'will_paginate-bootstrap4'
gem "whenever"
gem "font-awesome-rails"
gem 'font-awesome-sass', '~> 4.2.0'
gem 'pivot_table'
# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'rails_layout'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
