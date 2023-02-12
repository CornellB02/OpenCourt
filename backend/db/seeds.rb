# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      # username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        # username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end



    restaurants = [
      {
        name: "Peter Luger Steakhouse",
        phone_number: "(718)387-7400",
        neighborhood: "Brooklyn",
        cuisines: "Steakhouse",
        dress_code: "Smart Casual",
        parking_details: "Street parking available",
        opentime: "11:30 AM",
        closetime: "9:30 PM",
        executive_chef: "Cornell Bethea Jr",
        longitude: -73.963768,
        latitude: 40.709616,
        description: "Famous for its juicy, flavorful steaks, Peter Luger Steakhouse has been a Brooklyn institution for over 130 years. With a menu that focuses exclusively on meat and a casual, family-friendly atmosphere, it's the perfect spot for a hearty meal."
      },
      {
        name: "Keens Steakhouse",
        phone_number: "(212)947-3636",
        neighborhood: "Manhattan",
        cuisines: "Steakhouse",
        dress_code: "Business Casual",
        parking_details: "Valet Parking Available",
        opentime: "11:30 AM",
        closetime: "9:30 PM",
        executive_chef: "Bill Peet",
        longitude: -73.988646,
        latitude: 40.754771,
        description: "Keens Steakhouse is a true New York City institution, with a rich history dating back over a hundred years. The menu features a wide variety of juicy and delicious steaks, cooked to perfection and served in a warm and elegant atmosphere. Whether you're in the mood for a classic porterhouse or a juicy ribeye, Keens is the place to be."
      },
      {
        name: "Gallagher's Steakhouse",
        phone_number: "(212)245-5336",
        neighborhood: "Manhattan",
        cuisines: "Steakhouse",
        dress_code: "Business Casual",
        parking_details: "Street Parking Available",
        opentime: "11:30 AM",
        closetime: "10:00 PM",
        executive_chef: "Chris Basso",
        longitude: -73.986400,
        latitude: 40.758969,
        description: "For over 90 years, Gallagher's Steakhouse has been serving up some of the best steaks in Manhattan. Their menu features a variety of juicy cuts, including their famous prime rib, as well as a selection of delicious sides and sauces to complement your meal. With its classic, old-school atmosphere, Gallagher's is the perfect place to enjoy a hearty steak dinner in the heart of the city."
      },
      {
        name: "Old Homestead Steakhouse",
        phone_number: "(212)687-4600",
        neighborhood: "Manhattan",
        cuisines: "Steakhouse",
        dress_code: "Business Casual",
        parking_details: "Valet Parking Available",
        opentime: "11:30 AM",
        closetime: "9:30 PM",
        executive_chef: "Christopher Albrecht",
        longitude: -74.007126,
        latitude: 40.713839,
        description: "Old Homestead Steakhouse has been serving up juicy and delicious steaks since 1868. The menu features a variety of cuts, including their signature, dry-aged prime beef, as well as a selection of sides and sauces to complement your meal. With its classic steakhouse atmosphere and a focus on quality ingredients, Old Homestead is a true New York City institution."
      },
      {
        name: "Smith & Wollensky",
        phone_number: "(212)753-1530",
        neighborhood: "Manhattan",
        cuisines: "Steakhouse",
        dress_code: "Business Casual",
        parking_details: "Valet Parking Available",
        opentime: "11:30 AM",
        closetime: "10:00 PM",
        executive_chef: "Anthony Walker",
        longitude: -74.011179,
        latitude: 40.716067,
        description: "Smith & Wollensky is a classic New York steakhouse known for its juicy, flavorful steaks and beautiful waterfront views. The menu features a variety of cuts, including their famous, dry-aged prime rib, as well as a selection of sides and sauces to complement your meal. With its elegant atmosphere and top-notch service, Smith & Wollensky is the perfect place for a special occasion or a night out with friends."
        },
        {
        name: "Del Frisco's Double Eagle Steakhouse",
        phone_number: "(212)575-5129",
        neighborhood: "Manhattan",
        cuisines: "Steakhouse",
        dress_code: "Business Casual",
        parking_details: "Valet Parking Available",
        opentime: "11:30 AM",
        closetime: "10:00 PM",
        executive_chef: "Joe Ferrell",
        longitude: -74.003820,
        latitude: 40.758111,
        description: "Del Frisco's Double Eagle Steakhouse is a premier steakhouse, known for its juicy and delicious steaks, extensive wine list, and top-notch service. The menu features a variety of cuts, including their signature, dry-aged prime beef, as well as a selection of sides and sauces to complement your meal. With its elegant atmosphere and attention to detail, Del Frisco's is the perfect place for a special occasion or a night out with friends."
        }
        ]
        
        restaurants.each do |restaurant|
        Restaurant.create!(restaurant)
        puts "Creating Restaurants..."
        end
  
    puts "Done!"
  end