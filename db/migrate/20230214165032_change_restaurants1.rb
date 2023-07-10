class ChangeRestaurants1 < ActiveRecord::Migration[7.0]
  def change
    change_column_null :restaurants, :price_range, false 
  end
end
