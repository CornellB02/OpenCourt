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
        },
        {
          name: "Wolfgang's Steakhouse",
          phone_number: "(212)888-4820",
          neighborhood: "Manhattan",
          cuisines: "Steakhouse",
          dress_code: "Business Casual",
          parking_details: "Valet Parking Available",
          opentime: "11:30 AM",
          closetime: "10:00 PM",
          executive_chef: "Jimmy Haber",
          longitude: -73.978252,
          latitude: 40.761810,
          description: "Wolfgang's Steakhouse is a modern steakhouse with a focus on classic cuts and quality ingredients. Their menu features a variety of juicy steaks, as well as a selection of sides and sauces to complement your meal. With its stylish atmosphere and friendly service, Wolfgang's is the perfect spot for a special occasion or a night out with friends."
          },
          
          {
          name: "Morton's The Steakhouse",
          phone_number: "(212)972-3315",
          neighborhood: "Manhattan",
          cuisines: "Steakhouse",
          dress_code: "Business Casual",
          parking_details: "Valet Parking Available",
          opentime: "11:30 AM",
          closetime: "10:00 PM",
          executive_chef: "John Garavaglia",
          longitude: -73.979312,
          latitude: 40.758807,
          description: "Morton's The Steakhouse is a classic steakhouse with a focus on quality ingredients and exceptional service. Their menu features a variety of juicy steaks, as well as a selection of sides and sauces to complement your meal. With its elegant atmosphere and top-notch service, Morton's is the perfect place for a special occasion or a night out with friends."
          },
          
          {
          name: "BLT Steak",
          phone_number: "(212)752-7470",
          neighborhood: "Manhattan",
          cuisines: "Steakhouse",
          dress_code: "Business Casual",
          parking_details: "Valet Parking Available",
          opentime: "11:30 AM",
          closetime: "10:00 PM",
          executive_chef: "Laurent Tourondel",
          longitude: -73.976112,
          latitude: 40.764879,
          description: "BLT Steak is a contemporary steakhouse with a focus on classic cuts and modern flavors. The menu features a variety of juicy steaks, as well as a selection of sides and sauces to complement your meal. With its stylish atmosphere and friendly service, BLT Steak is the perfect spot for a special occasion or a night out with friends."
          },
          {
            name: "Ruth's Chris Steak House",
            phone_number: "(212)582-7200",
            neighborhood: "Manhattan",
            cuisines: "Steakhouse",
            dress_code: "Business Casual",
            parking_details: "Valet Parking Available",
            opentime: "5:00 PM",
            closetime: "10:00 PM",
            executive_chef: "David S. Wiedmaier",
            longitude: -73.977568,
            latitude: 40.752980,
            description: "Ruth's Chris Steak House is a classic steakhouse serving prime cuts of beef, fresh seafood, and an extensive wine list. With its warm, upscale atmosphere and impeccable service, it's the perfect place for a special occasion or a night out."
            },
            {
              name: "Strip House",
              phone_number: "(212)336-5454",
              neighborhood: "Manhattan",
              cuisines: "Steakhouse",
              dress_code: "Business Casual",
              parking_details: "Valet Parking Available",
              opentime: "5:00 PM",
              closetime: "10:00 PM",
              executive_chef: "Mark Sunseri",
              longitude: -74.000800,
              latitude: 40.738804,
              description: "Strip House is a classic steakhouse with a modern twist, serving prime cuts of beef, fresh seafood, and an extensive wine list. With its sophisticated atmosphere and impeccable service, it's the perfect place for a special occasion or a night out."
              },
              {
                name: "Delmonico's Restaurant & Bar",
                phone_number: "(212)796-8040",
                neighborhood: "Manhattan",
                cuisines: "Steakhouse",
                dress_code: "Business Casual",
                parking_details: "Valet Parking Available",
                opentime: "11:30 AM",
                closetime: "10:00 PM",
                executive_chef: "William Gallagher",
                longitude: -73.976114,
                latitude: 40.764875,
                description: "Delmonico's Restaurant & Bar is a classic steakhouse that offers a warm and inviting atmosphere. The menu features a variety of juicy steaks, as well as classic sides and sauces to complement your meal. With its exceptional service and attention to detail, Delmonico's is the perfect destination for a special occasion or a night out with friends."
                },
                {
                name: "The Breslin Bar & Dining Room",
                phone_number: "(212)679-1939",
                neighborhood: "Manhattan",
                cuisines: "Steakhouse",
                dress_code: "Business Casual",
                parking_details: "Street Parking Available",
                opentime: "12:00 PM",
                closetime: "11:00 PM",
                executive_chef: "April Bloomfield",
                longitude: -73.976103,
                latitude: 40.764918,
                description: "The Breslin Bar & Dining Room is a contemporary steakhouse that offers a stylish and relaxed atmosphere. The menu features a variety of juicy steaks, as well as innovative sides and sauces to complement your meal. With its friendly service and focus on quality, The Breslin is the perfect destination for a night out with friends."
                },
                {
                name: "The Little Owl",
                phone_number: "(212)741-4695",
                neighborhood: "Manhattan",
                cuisines: "Steakhouse",
                dress_code: "Casual",
                parking_details: "Street Parking Available",
                opentime: "5:30 PM",
                closetime: "11:00 PM",
                executive_chef: "Joe Dobias",
                longitude: -73.976102,
                latitude: 40.764884,
                description: "The Little Owl is a cozy steakhouse that offers a warm and intimate atmosphere. The menu features a variety of juicy steaks, as well as classic sides and sauces to complement your meal. With its friendly service and focus on quality, The Little Owl is the perfect destination for a special occasion or a night out with friends."
                },
                {
                name: "Bowery Meat Company",
                phone_number: "(212)388-7518",
                neighborhood: "Manhattan",
                cuisines: "Steakhouse",
                dress_code: "Business Casual",
                parking_details: "Street Parking Available",
                opentime: "5:00 PM",
                closetime: "10:00 PM",
                executive_chef: "Josh Capon",
                longitude: -73.992062,
                latitude: 40.719127,
                description: "Bowery Meat Company is a contemporary steakhouse offering a variety of juicy steaks, cooked to perfection. The menu features classic cuts as well as innovative dishes that are sure to delight. With a focus on quality and flavor, Bowery Meat Company is the perfect destination for steak lovers."
                },
                {
                name: "The Prime Rib Restaurant & Lounge",
                phone_number: "(212)532-4300",
                neighborhood: "Manhattan",
                cuisines: "Steakhouse",
                dress_code: "Business Casual",
                parking_details: "Valet Parking Available",
                opentime: "5:30 PM",
                closetime: "10:00 PM",
                executive_chef: "John Doe",
                longitude: -73.975957,
                latitude: 40.764865,
                description: "The Prime Rib Restaurant & Lounge is a classic steakhouse that offers a warm and elegant atmosphere. The menu features a variety of juicy steaks, as well as classic sides and sauces to complement your meal. Whether you're celebrating a special occasion or just looking for a delicious dinner, The Prime Rib Restaurant & Lounge is the perfect choice."
                },
                {
                name: "The Capital Grille",
                phone_number: "(212)627-2308",
                neighborhood: "Manhattan",
                cuisines: "Steakhouse",
                dress_code: "Business Casual",
                parking_details: "Valet Parking Available",
                opentime: "5:00 PM",
                closetime: "10:00 PM",
                executive_chef: "Mark Millitello",
                longitude: -73.976024,
                latitude: 40.764888,
                description: "The Capital Grille is a classic steakhouse that offers a sophisticated atmosphere. The menu features a variety of juicy steaks, as well as classic sides and sauces to complement your meal. With its exceptional service and attention to detail, The Capital Grille is the perfect destination for a special occasion or a night out with friends."
                },
                {
                name: "The Flagstone Inn Steakhouse",
                phone_number: "(212)755-8870",
                neighborhood: "Manhattan",
                cuisines: "Steakhouse",
                dress_code: "Business Casual",
                parking_details: "Street Parking Available",
                opentime: "5:00 PM",
                closetime: "10:00 PM",
                executive_chef: "Richard Chen",
                longitude: -73.976041,
                latitude: 40.764906,
                description: "The Flagstone Inn Steakhouse is a classic steakhouse that offers a warm and welcoming atmosphere. The menu features a variety of juicy steaks, as well as classic sides and sauces to complement your meal. With its delicious cuisine and charming ambiance, The Flagstone Inn Steakhouse is the perfect choice for a romantic dinner or a night out with friends. Executive Chef Richard Chen brings a wealth of experience and culinary expertise to the kitchen, ensuring that each dish is cooked to perfection. With street parking available and a business casual dress code, The Flagstone Inn Steakhouse is a great option for a night out in Manhattan."
                },
                {
                name: "L'Artusi",
                phone_number: "(212)255-5757",
                neighborhood: "Manhattan",
                cuisines: "Steakhouse",
                dress_code: "Casual",
                parking_details: "Street Parking Available",
                opentime: "5:30 PM",
                closetime: "11:00 PM",
                executive_chef: "Gabriel Stulman",
                longitude: -73.976107,
                latitude: 40.764902,
                description: "L'Artusi is a contemporary steakhouse that offers a stylish and relaxed atmosphere. The menu features a variety of juicy steaks, as well as innovative sides and sauces to complement your meal. With its friendly service and focus on quality, L'Artusi is theperfect choice for a sophisticated dining experience."
                }
        ]
        
        restaurants.each do |restaurant|
        Restaurant.create!(restaurant)
        puts "Creating Restaurants..."
        end
  
    puts "Done!"
  end