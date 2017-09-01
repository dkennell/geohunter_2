class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :gender
      t.string :hometown
      t.string :occupation
      t.string :description
    end
  end
end
