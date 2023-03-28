# json.restaurant do
    json.extract! @restaurant, :id, :name, :phone_number, :description, :neighborhood, :cuisines, :dress_code, :parking_details, :executive_chef, :additional, :opentime, :closetime, :delivery, :price_range
# end
# json.restaurant do 
#     json.partial! "restaurant", restaurant: @restaurant
# end