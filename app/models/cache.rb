class Cache < ApplicationRecord
  belongs_to :creator, :class_name => "User", :foreign_key => "creator_id"
  has_many :usercaches
  has_many :visitors, source: :user, through: :usercaches
  has_many :items
end
