class AddRestaurantNameToReservs < ActiveRecord::Migration[7.0]
  def change
    add_column :reservs, :restaurant_name, :string
  end
end
