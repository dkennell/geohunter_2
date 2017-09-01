class User < ApplicationRecord
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :usercaches
  has_many :visited_caches, source: :cache, through: :usercaches
  has_many :created_caches, :class_name => "Cache"
end