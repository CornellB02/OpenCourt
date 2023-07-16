class AddRestaurantNameToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :restaurant_name, :string
  end
end
