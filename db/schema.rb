# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170907163205) do

  create_table "caches", force: :cascade do |t|
    t.string  "name"
    t.float   "latitude"
    t.float   "longitude"
    t.string  "difficulty"
    t.string  "description"
    t.integer "number_of_visits"
    t.integer "creator_id"
  end

  create_table "items", force: :cascade do |t|
    t.string  "name"
    t.string  "description"
    t.integer "cache_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.integer "user_id"
  end

  create_table "usercaches", force: :cascade do |t|
    t.integer "user_id"
    t.integer "cache_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "gender"
    t.string "hometown"
    t.string "occupation"
    t.string "description"
    t.string "image_path"
  end

end
