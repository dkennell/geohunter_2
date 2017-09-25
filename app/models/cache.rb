class Cache < ApplicationRecord
  belongs_to :creator, :class_name => "User", :foreign_key => "creator_id"
  has_many :items
  has_many :usercaches, class_name: Usercache
  has_many :visitors, source: :user, through: :usercaches
end
