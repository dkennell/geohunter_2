class Friendship < ApplicationRecord
	belongs_to :user
	belongs_to :friend, class_name: "User"

	after_create :create_inverse, unless: :has_inverse?
	after_destroy :destroy_inverse, if: :has_inverse?

	def create_inverse
		self.class.create(inverse_friendship_parameters)
	end

	def has_inverse?
		self.class.exists?(inverse_friendship_parameters)
    end

	def destroy_inverse
      inverses.destroy_all
    end

    def inverses
    	self.classes.where(inverse_friendship_parameters)
    end

    def inverse_friendship_parameters
    	{user_id: friend_id, friend_id: user_id}
    end
end
