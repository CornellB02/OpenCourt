class ChangeRestaurantNameToRnameInReservs < ActiveRecord::Migration[7.0]
  def change
    rename_column :reservs, :restaurant_name, :rname
  end
end
