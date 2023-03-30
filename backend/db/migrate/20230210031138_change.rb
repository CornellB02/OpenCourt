class Change < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :opentime
    remove_column :restaurants, :closetime
  end
end
