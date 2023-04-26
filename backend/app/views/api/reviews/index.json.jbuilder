@reviews.each do |review|
    json.set! review.id do
      # json.partial! "restaurant", restaurant: @restaurant
      json.extract! review, :nickname, :body, :overall, :food, :service, :ambience, :value, :user_id, :restaurant_id, :created_at, :updated_at, :reviewer_firstname
    end
  end