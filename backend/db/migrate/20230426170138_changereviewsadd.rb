class Changereviewsadd < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :reviewer_firstname, :string
    add_column :reviews, :reviewer_lastname, :string
  end
end
