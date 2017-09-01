class Usercache < ApplicationRecord
	belongs_to :user 
	belongs_to :cache 
end