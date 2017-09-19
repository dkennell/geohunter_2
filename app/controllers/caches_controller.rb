class CachesController < ApplicationController

	def create
		@cache = Cache.create(name: params[:name],
							  latitude: params[:latitude],
							  longitude: params[:longitude],
							  difficulty: params[:difficulty],
							  description: params[:description],
							  number_of_visits: params[:number_of_visits],
							  creator_id: params[:creator_id])
		render json: @cache.to_json
	end

	def index
		@caches = Cache.all
		render json: @caches.to_json()
	end

	def show
		@cache = Cache.find(params[:id])
		render json: @cache.to_json
	end

end