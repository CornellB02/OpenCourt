import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurant } from "../../store/restaurants";
import { useParams } from "react-router-dom";

function RestaurantDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const restaurant = useSelector(state => state.restaurants[id]);

  useEffect(() => {
    dispatch(getRestaurant(id));
  }, [dispatch, id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>Address: {restaurant.address}</p>
    </div>
  );
}

export default RestaurantDetailPage;
