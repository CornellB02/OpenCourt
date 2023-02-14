import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurant } from "../../store/restaurants";
import { useParams } from "react-router-dom";
import "./restaurants.css"

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

  return (
    <div className="item-container">
      <div className="each_r_container">
        <div className="each-restaurant">
         <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
        <p>{restaurant.neighborhood}</p>
      </div>
      {/* <p>Address: {restaurant.address}</p> */}
      </div>
    </div>
  );
}

export default Restaurant_item;
