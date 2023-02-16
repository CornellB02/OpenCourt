import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../store/restaurants";
import RestaurantDetailPage from "./Restaurant_item";
import NavBar from "../Navigation/NavBar";

function RestaurantsIndexPage() {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => Object.values(state.restaurants));
  const [priceRange, setPriceRange] = useState("");
  const [isChecked, setIsChecked] = useState([false, false, false]);

  const handlePriceRangeChange = (range) => {
    if (range === priceRange) {
      setIsChecked(!isChecked);
    } else {
      setIsChecked(true);
    }
    setPriceRange(range);
  };

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <>
    <NavBar />
    <div>
      <h1 className="results">Results for </h1>
      <div className="filter-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => handlePriceRangeChange("$$")}
      />
      <label>$$</label>
      <input
        type="checkbox"
        checked={isChecked && priceRange === "$$$"}
        onChange={() => handlePriceRangeChange("$$$")}
      />
      <label>$$$</label>
      <input
        type="checkbox"
        checked={isChecked && priceRange === "$$$$"}
        onChange={() => handlePriceRangeChange("$$$$")}
      />
      <label>$$$$</label>
    </div>
      {/* <div className="filter-container">
        <button onClick={() => setPriceRange("$$")}>$$</button>
        <button onClick={() => setPriceRange("$$$")}>$$$</button>
        <button onClick={() => setPriceRange("$$$$")}>$$$$</button>
      </div> */}
      <div className="each_r_container">
      <ul>
        {restaurants
          .filter(restaurant => {
            if (priceRange === "") return true;
            let range = restaurant.price_range;
            if (range === "$50 and over") range = "$$$$";
            else if (range === "$31 and 50") range = "$$$";
            else if (range === "$30 and under") range = "$$";
            return range === priceRange;
          }).map(restaurant => (
          <RestaurantDetailPage key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
      </div>
    </div>
    </>
  );
}

export default RestaurantsIndexPage;
