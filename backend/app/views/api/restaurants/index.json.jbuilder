@restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :name, :phone_number, :description, :neighborhood, :cuisines, :dress_code, :parking_details, :executive_chef, :additional, :opentime, :closetime
    end
  end