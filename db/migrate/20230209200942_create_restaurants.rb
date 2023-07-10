class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false, unique: true 
      t.string :phone_number, null: false, unique: true
      t.text :description
      t.decimal :longitude, precision: 10, scale: 4, null: false
      t.decimal :latitude, precision: 10, scale: 4, null: false
      t.string :neighborhood, null: false 
      t.string :cuisines, null: false 
      t.string :dress_code, null: false
      t.string :parking_details, null: false 
      t.time :opentime, null: false 
      t.time :closetime, null: false 
      t.string :executive_chef, null: false
      t.string :additional
      t.timestamps
    end
  end
end
