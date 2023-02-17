

import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getRestaurant } from "../../store/restaurants";
// import { useParams } from "react-router-dom";
import "./restaurants.css"
import { Link } from "react-router-dom";
import Map from "../context/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



function Restaurant_item({restaurant}) {
  // const { id } = useParams();
  // const dispatch = useDispatch();
  // const restaurant = useSelector(state => state.restaurants[id]);

  const getNextTimeString = (buttonIndex) => {
    const now = new Date();
    let minutes = now.getMinutes() + 30 + 15 * buttonIndex;
    const hour = now.getHours() + Math.floor(minutes / 60);
    minutes = minutes % 60;
    return `${hour % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
  };
  
  const buttons = [];
  for (let i = 0; i < 5; i++) {
    buttons.push(
      <button key={i}>{getNextTimeString(i)}</button>
    );
  }

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
    // <div className="item-container">
    //            <Link to={`/restaurants/${restaurant.id}`}>
    //     <div className="each-restaurant">
    //         <div className="img-div-index">
    //             <a href="#">
    //               <img src={`https://steak-book-seeds.s3.amazonaws.com/picture${restaurant.id}.jpeg`} alt="Restaurant" className="idx-img"/></a>
    //         </div>
    //       <div className="info">
    //         <h1>
    //           {/* <Link to={`/restaurants/${restaurant.id}`}> */}
    //           {restaurant.name}
    //           {/* </Link> */}
    //               <p>{priceRange} &nbsp;•&nbsp; Steakhouse &nbsp;•&nbsp; {restaurant.neighborhood}</p>
    //         </h1>
    //       </div>
    //   </div>
    //             </Link>
    // </div>
    <div className="item-container">
      {/* <button onClick={handleShowMap}>Show Map</button> */}
      {/* <div style={{ height: '50vh', width: '100%' }}> */}
        {/* <Map /> */}
      {/* </div> */}
    <Link to={`/restaurants/${restaurant.id}`}>
      <div className="each-restaurant">
        <div className="img-div-index">
          <a href="#">
            <img
              src={`https://steak-book-seeds.s3.amazonaws.com/picture${restaurant.id}.jpeg`}
              alt="Restaurant"
              className="idx-img"
            />
          </a>
        </div>
        <div className="indexline"></div>
        <div className="info-name">
          <h1 className="index-name">{restaurant.name}</h1>
          <div className="index-other">
          {/* <>&nbsp;</> */}
            <div className="ratingreviewsindex">
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
          <p>
            <div className="aspectsindex">
            {priceRange} &nbsp;•&nbsp; Steakhouse &nbsp;•&nbsp;
            {restaurant.neighborhood}
            </div>
          </p>
          <div className="reservebtnidx">
          {buttons}
                  &nbsp;
                  </div>
          </div>
        </div>
      </div>
    </Link>
    <div className="indexline"></div>
  </div>
  );
}

export default Restaurant_item;
