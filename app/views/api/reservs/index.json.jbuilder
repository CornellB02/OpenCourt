@reservs.each do |reserv|
    json.set! reserv.id do
        json.extract! reserv, :id, :user_id, :restaurant_id, :phone_number, :first_name, :party_size, :date, :time,  :special_request, :rname
    end
  end