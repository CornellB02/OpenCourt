class ChangeStimeNull < ActiveRecord::Migration[7.0]
  def change
    change_column_null :restaurants, :opentime, false 
    change_column_null :restaurants, :closetime, false 
  end
end
