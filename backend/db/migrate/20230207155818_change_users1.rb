class ChangeUsers1 < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :first_name, true
    change_column_null :users, :last_name, true
    change_column_null :users, :phone_number, true
    change_column_null :users, :review_display_name, true
    change_column_null :users, :primary_dining_location, true
    change_column_null :users, :dietary_preferences, true
    change_column_null :users, :special_requests, true
  end
end
