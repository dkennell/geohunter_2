class CreateUsercaches < ActiveRecord::Migration[5.0]
  def change
    create_table :usercaches do |t|
      t.integer :user_id
      t.integer :cache_id
    end
  end
end
