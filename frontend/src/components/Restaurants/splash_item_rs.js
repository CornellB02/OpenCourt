

import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getRestaurant } from "../../store/restaurants";
// import { useParams } from "react-router-dom";
import "./restaurants.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as faarStar } from "@fortawesome/free-regular-svg-icons";


function Splash_item_rs({restaurant}) {
  // const { id } = useParams();
  // const dispatch = useDispatch();
  // const restaurant = useSelector(state => state.restaurants[id]);

  // useEffect(() => {
  //   dispatch(getRestaurant(id));
  //   // debugger
  // }, [dispatch, id]);
  const getNextTimeString = (buttonIndex) => {
    const now = new Date();
    let minutes = now.getMinutes() + 30 * buttonIndex;
    const hour = now.getHours() + Math.floor(minutes / 60);
    minutes = minutes % 60;
    return `${hour % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hour < 12 ? 'am' : 'pm'}`;
  };
  

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
    <div className="splash-item-container">
        <div className="each-restaurant-sp">
            <div className="img-div">
               {/* <Link to={`/restaurants/${restaurant.id}`}> */}
                <a href="#">
                  <img src={`https://steak-book-seeds.s3.amazonaws.com/picture${restaurant.id}.jpeg`} alt="Restaurant" className="restaurant-image" id="small-pic"/></a>
                {/* </Link> */}
            </div>
          <div className="pcn">
            <h1>
              {/* <Link to={`/restaurants/${restaurant.id}`}> */}
              <div className="box-name">
              {restaurant.name} &nbsp;&nbsp;
              
              </div>
              <div className="ratingnreviewsc">
                {/* <i class="fa-solid fa-star-sharp"></i> */}
              <div className="ratingreviews">
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} /> 
                &nbsp;
                <FontAwesomeIcon icon={faStar} /> 
                &nbsp; 
                <FontAwesomeIcon icon={faStar} />   
                </div>
                {/* <FontAwesomeIcon icon={faarStar} /> */}

                {/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-star" />          */}
              </div>
              {/* </Link> */}
              <div className="cuisinenn">
                  <p className="box-info">{priceRange} &nbsp;•&nbsp; Steakhouse &nbsp;•&nbsp; {restaurant.neighborhood}</p>
                  </div>
                <div className="reservebtn">
                  <button>{getNextTimeString(0)}</button>
                  &nbsp;
                  <button>{getNextTimeString(1)}</button>
                  &nbsp;
                  <button>{getNextTimeString(2)}</button>
                  </div>
                  {/* <div className="button-group">
              {[0, 1, 2].map((i) => (
                <button key={i}>{getNextTimeString(i)}</button>
              ))}
            </div> */}
            </h1>
          </div>
      </div>
    </div>
  );
}

export default Splash_item_rs;
