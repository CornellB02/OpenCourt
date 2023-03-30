class ChangeRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :price_range, :string
  end
end
