class ChangeStime < ActiveRecord::Migration[7.0]
  def change
        add_column :restaurants, :opentime, :string
        add_column :restaurants, :closetime, :string
  end
end
