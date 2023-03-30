import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../store/restaurants";
import RestaurantDetailPage from "./Restaurant_item";
import NavBar from "../Navigation/NavBar";
import Restaurant_item from "./Restaurant_item";
import Map from "../context/map";
import mapbutton from './mapbutton.png';

// import Map from "../context/map";


function RestaurantsIndexPage() {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => Object.values(state.restaurants));
  const [priceRange, setPriceRange] = useState("");
  // const [isChecked, setIsChecked] = useState([false, false, false]);
  const [isChecked, setIsChecked] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [deliveryOnly, setDeliveryOnly] = useState("");
  const [isChecked_del, setIsChecked_del] = useState('');
  const [isChecked_loca, setIsChecked_loca] = useState('');
  const [locationSpot, setlocationSpot] = useState("");


  // const [deliveryAvailable, setDeliveryAvailable] = useState(false);



  
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const handleLocationChange = (loca) => {
    if (loca === locationSpot) {
      setIsChecked_loca(false); // reset the checkbox state
      setlocationSpot(""); // reset the filter state
    } else {
      setIsChecked_loca(true);
      setlocationSpot(loca);
    }
  };

  const handlePriceRangeChange = (range) => {
    if (range === priceRange) {
      setIsChecked(false); // reset the checkbox state
      setPriceRange(""); // reset the filter state
    } else {
      setIsChecked(true);
      setPriceRange(range);
    }
  };
  
  const handleDeliveryChange = (delivery) => {
    if (delivery === deliveryOnly) {
      setIsChecked_del(false); // reset the checkbox state
      setDeliveryOnly(""); // reset the filter state
    } else {
      setIsChecked_del(true);
      setDeliveryOnly(delivery);
    }
  };
  
  
  // const handlePriceRangeChange = (range) => {
  //   if (range === priceRange) {
  //     setIsChecked(!isChecked);
  //   } else {
  //     setIsChecked(true);
  //   }
  //   setPriceRange(range);
  // };
  
  // const handleDeliveryChange = (delivery) => {
  //   if (delivery === deliveryOnly) {
  //     setIsChecked_del(!isChecked_del);
  //   } else {
  //     setIsChecked_del(true);
  //   }
  //   setDeliveryOnly(delivery);
  // };

  const handleShowMap = () => {
    setShowMap(true);
  };

  return (
    <>
    <NavBar />
    <div>
      <h1 className="results">Results for </h1>
      {/* <div className="map_container">
      {showMap && (
          <div className="map-container">
            <Map/>
          </div>
        )}
      </div> */}
      <div className="filter-box">
      <button className="show-map-button" onClick={handleShowMap}><img className='maphoto' src={mapbutton} alt="" /></button>
        {showMap && (
          <div className="map-container">
            <Map/>
          </div> 
          )}
      <div className="filter-container">
        <div className="price-filter">
        <div className="filter-label">
  <span>Price</span>
</div>
<div className="low">
  <label className="filter-optiono">
    <div
      className={`circle ${isChecked && priceRange === "$$" ? "selected" : ""}`}
      onClick={() => handlePriceRangeChange("$$")}
    >
      <div className="inner-circle"></div>
  </div>
  $$
  </label>
</div>
<div className="low">
  <label className="filter-option">
    <div
      className={`circle ${isChecked && priceRange === "$$$" ? "selected" : ""}`}
      onClick={() => handlePriceRangeChange("$$$")}
    >
      <div className="inner-circle">•</div>
    </div>
      $$$
  </label>
</div>
<div className="low">
  <label className="filter-option">
    <div
      className={`circle ${isChecked && priceRange === "$$$$" ? "selected" : ""}`}
      onClick={() => handlePriceRangeChange("$$$$")}
    >
      <div className="inner-circle"></div>
    </div>
      $$$$
  </label>
</div>
  </div>

<div className="filter-label">
          <span>Dining Options</span>
          </div>
<div className="delivery-filter">
<div className="low">
<label className="filter-option">
  <input
    type="checkbox"
    checked={isChecked_del && deliveryOnly === "Dine-In Only"}
    onChange={() => handleDeliveryChange("Dine-In Only")}
  />
  Dine-In Only</label>
</div>
<div className="low">
<label className="filter-option">
  <input
    type="checkbox"
    checked={isChecked_del && deliveryOnly === "Delivery Available"}
    onChange={() => handleDeliveryChange("Delivery Available")}
  />
  Delivery Available</label>
</div>
</div>
<div className="filter-label">
          <span>Neighborhoods</span>
          </div>
<div className="delivery-filter">
<div className="low">
<label className="filter-option">
  <input
    type="checkbox"
    checked={isChecked_loca && locationSpot === "Manhattan"}
    onChange={() => handleLocationChange ("Manhattan")}
  />
  Manhattan</label>
  </div>
  <div className="low">
<label className="filter-option">
  <input
    type="checkbox"
    checked={isChecked_loca && locationSpot === "Brooklyn"}
    onChange={() => handleLocationChange ("Brooklyn")}
  />
  Brooklyn</label>
  </div>
  <div className="low">
<label className="filter-option">
  <input
    type="checkbox"
    checked={isChecked_loca && locationSpot === "Queens"}
    onChange={() => handleLocationChange ("Queens")}
  />
  Queens</label>
  </div>
</div>
</div>
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
            if (priceRange === "" ) return true;
            let range = restaurant.price_range;
            if (range === "$50 and over") range = "$$$$";
            else if (range === "$31 and 50") range = "$$$";
            else if (range === "$30 and under") range = "$$";
            return range === priceRange;           
          })
          .filter((restaurant) => {
            // Filter by delivery availability
            if (deliveryOnly === "") return true;
            let delivery = restaurant.delivery
            if (delivery === true) delivery = "Delivery Available";
            else if (delivery === false) delivery = "Dine-In Only";
            return delivery === deliveryOnly;
          })
          .filter((restaurant) => {
            // Filter by delivery availability
            if (locationSpot === "") return true;
            let spot = restaurant.neighborhood
            if (spot === "Manhattan" ) spot = "Manhattan";
            else if (spot === "Brooklyn" ) spot = "Brooklyn";
            return spot === locationSpot;
          })
          .map(restaurant => (
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
