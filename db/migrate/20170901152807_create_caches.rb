class CreateCaches < ActiveRecord::Migration[5.0]
  def change
    create_table :caches do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.string :difficulty
      t.string :description
      t.integer :number_of_visits
      t.integer :creator_id
    end
  end
end
