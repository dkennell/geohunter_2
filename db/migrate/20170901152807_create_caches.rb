class CreateCaches < ActiveRecord::Migration[5.0]
  def change
    create_table :caches do |t|
      t.integer :latitude
      t.integer :longitude
      t.string :difficulty
      t.string :description
      t.integer :number_of_visits
      t.integer :creator_id
    end
  end
end
