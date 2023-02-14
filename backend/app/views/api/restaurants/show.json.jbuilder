json.extract ! @restaurant, :name, :phone_number, :description, :neighborhood, :cuisines, :dress_code, :parking_details, :executive_chef, :additional, :opentime, :closetime

# json.restaurant do 
#     json.partial! "restaurant", restaurant: @restaurant
# end