class ChangeRestsAddDelivery < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :delivery, :boolean, default: false
  end
end
