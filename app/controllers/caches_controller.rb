class CachesController < ApplicationController

	def index
		@caches = Cache.all
		render json: @caches.to_json()
	end

	def show
		@cache = Cache.find(params[:id])
		render @cache.to_json
end