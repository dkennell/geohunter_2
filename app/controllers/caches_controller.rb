class CachesController < ApplicationController

	def index
		@caches = Cache.all
		render json: @caches.to_json()
	end
end