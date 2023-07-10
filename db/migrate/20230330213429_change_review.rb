class ChangeReview < ActiveRecord::Migration[7.0]
  def change
    change_column_null :reviews, :nickname, true
  end
end
 