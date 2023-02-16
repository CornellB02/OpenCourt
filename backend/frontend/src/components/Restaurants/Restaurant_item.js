

import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getRestaurant } from "../../store/restaurants";
// import { useParams } from "react-router-dom";
import "./restaurants.css"
import { Link } from "react-router-dom";

function Restaurant_item({restaurant}) {
  // const { id } = useParams();
  // const dispatch = useDispatch();
  // const restaurant = useSelector(state => state.restaurants[id]);

  // useEffect(() => {
  //   dispatch(getRestaurant(id));
  //   // debugger
  // }, [dispatch, id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  let priceRange = restaurant.price_range;
  if (priceRange === "$50 and over") {
    priceRange = "$$$$";
  } else if (priceRange === "$31 and 50") {
    priceRange = "$$$";
  } else if (priceRange === "$30 and under") {
    priceRange = "$$";
  }
  

  // debugger

  return (
    <div className="item-container">
        <div className="each-restaurant">
        <div className="img-div">
        <div className="img-div">
        <a href="#"><img src={`https://steak-book-seeds.s3.amazonaws.com/picture${restaurant.id}.jpeg`} alt="Restaurant" /></a>
        </div>

        {/* <a href=""><img src='https://steak-book-seeds.s3.amazonaws.com/picture1.jpeg'></img> */}
        {/* </a> */}
        </div>
        <div className="info">
         <h1>
         <Link to={`/restaurants/${restaurant.id}`}>
             {restaurant.name}
          </Link>
        <p>{priceRange} &nbsp;•&nbsp; Steakhouse &nbsp;•&nbsp; {restaurant.neighborhood}</p>
        {/* <p>{restaurant.neighborhood}</p> */}
        </h1>
        </div>
      </div>
      {/* <p>Address: {restaurant.address}</p> */}
    </div>
  );
}

export default Restaurant_item;
