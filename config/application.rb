require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

	module Geohunter2
	  class Application < Rails::Application
	    # rack-cors middleware configureation to allow posts to api from react
	    config.middleware.insert_before 0, "Rack::Cors" do
	      allow do
	        origins '*'
	        resource '*', :headers => :any, :methods => [:get, :post, :patch, :options]
	      end
	    end
	  end
	end
