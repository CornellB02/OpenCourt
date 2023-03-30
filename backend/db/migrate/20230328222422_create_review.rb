class CreateReview < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :nickname, null: false
      t.text :body, null: false
      t.integer :overall, null: false
      t.integer :food, null: false
      t.integer :service, null: false
      t.integer :ambience, null: false
      t.integer :value, null: false
      t.references :user, foreign_key: true, null: false
      t.references :restaurant, foreign_key: true, null: false
      t.timestamps
    end
    # add_index :reviews, :user_id
    # add_index :reviews, :restaurant_id
  end
end
