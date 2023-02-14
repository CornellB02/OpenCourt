import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../store/restaurants";
import RestaurantDetailPage from "./Restaurant_item";
import NavBar from "../Navigation/NavBar";

function RestaurantsIndexPage() {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => Object.values(state.restaurants));

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <>
    <NavBar />
    <div>
      <h1>Restaurants Index</h1>
      <ul>
        {restaurants.map(restaurant => (
          <RestaurantDetailPage key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </div>
    </>
  );
}

export default RestaurantsIndexPage;
