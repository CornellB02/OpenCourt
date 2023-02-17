import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../store/restaurants";
import RestaurantDetailPage from "./Restaurant_item";
import NavBar from "../Navigation/NavBar";
import Restaurant_item from "./Restaurant_item";
import Map from "../context/map";
// import Map from "../context/map";


function RestaurantsIndexPage() {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => Object.values(state.restaurants));
  const [priceRange, setPriceRange] = useState("");
  const [isChecked, setIsChecked] = useState([false, false, false]);
  const [showMap, setShowMap] = useState(false);

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

  const handleShowMap = () => {
    setShowMap(true);
  };
  

  return (
    <>
    <NavBar />
    <div>
      <h1 className="results">Results for </h1>
      <div className="map_container">
      {showMap && (
          <div className="map-container">
            <Map/>
          </div>
        )}
      </div>
      <div className="filter-box">
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
    <button className="show-map-button" onClick={handleShowMap}>Show Map</button>
        {showMap && (
          <div className="map-container">
            <Map/>
          </div> 
          )}
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
          // <RestaurantDetailPage key={restaurant.id} restaurant={restaurant} />
          <Restaurant_item key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
      </div>
    </div>
    </>
  );
}

export default RestaurantsIndexPage;
