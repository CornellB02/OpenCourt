import React, { useEffect, useState, useRef } from "react";
import CalendarModule from '../context/calenderModule';
import "./SplashPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../store/restaurants";
import Restaurant_item from "../Restaurants/Restaurant_item";
import Splash_item_rs from "../Restaurants/splash_item_rs";
import { Link, useHistory } from "react-router-dom";
import Footer from "../context/footer";

function SplashPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [date, setDate] = useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const restaurants = useSelector(state => Object.values(state.restaurants));
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const linkClicked = useRef(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [matchedRestaurants, setMatchedRestaurants] = useState([]);

  const handleRestaurantClick = (restaurant) => {
    if (!linkClicked.current) {
      linkClicked.current = true;
      setSelectedRestaurant(restaurant);

      setTimeout(() => {
        linkClicked.current = false;
      }, 2000); // wait for 2 seconds before enabling the link again
    }
  };

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  useEffect(() => {
    const matched = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setMatchedRestaurants(matched);
  }, [restaurants, searchQuery]);

  const onChange = (selectedDate) => {
    setDate(selectedDate);
    setIsCalendarVisible(false);
  };

const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSearchSubmit();
  }
};

  const handleSearchSubmit = () => {
    const matchedRestaurant = restaurants.find(
      (restaurant) =>
        restaurant.name.toLowerCase() === searchQuery.toLowerCase()
    );

    if (matchedRestaurant) {
      history.push(`/restaurants/${matchedRestaurant.id}`);
      window.location.reload();
    }
  };

  return (
    <div className="splash-wrap">
      <div className="splash-main">
        <header className="splash-search">
          <div className="findtable">Find your table for any occasion</div>
          <div className="s-container">
            <div className='splash_select'>
              <select className='date_selector' onClick={() => setIsCalendarVisible(!isCalendarVisible)}>
                <FontAwesomeIcon icon={faCalendar} />
                <option>
                  {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </option>
              </select>
              <CalendarModule
                date={date}
                onChange={onChange}
                isVisible={isCalendarVisible}
                onClose={() => setIsCalendarVisible(false)}
              />
             <select className='time_selector'>
                {Array.from({ length: 48 }, (_, i) => {
                const hour = Math.floor(i / 2);
                const minute = i % 2 === 0 ? '00' : '30';
                const isAM = hour < 12;
                // const isPM = hour >= 12;
                const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                const time = `${hour12}:${minute} ${isAM ? 'AM' : 'PM'}`;
                const value = `${hour.toString().padStart(2, '0')}:${minute}`;
                return (
                    <option key={i} value={value}>
                    {time}
                    </option>
                            );
                })}
            </select>
            <select className='num_of_ppl_selector'>
            {Array.from({length: 20}, (_, i) => {
                return <option key={i+1} value={i+1}>{i+1} {i+1 === 1 ? 'person' : 'people'}</option>;
                     })}
                <option value="larger">Larger Party</option>
            </select>
            </div>
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            <div className='splashinput'>
          <input
            className="splash_search_input"
            type="text"
            placeholder="Location, Restaurant, or Cuisine"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            list="restaurantList"
            onKeyDown={handleKeyDown}
          />
<datalist id="restaurantList">
  {matchedRestaurants.map((restaurant) => {
    const isExactMatch = restaurant.name.toLowerCase() === searchQuery.toLowerCase();
    return !isExactMatch ? (
      <option key={restaurant.id} value={restaurant.name} />
    ) : null;
  })}
</datalist>

              <>&nbsp;&nbsp;&nbsp;&nbsp;</>
              <button className="submit" onClick={handleSearchSubmit}>Let's go</button>
            </div>
          </div>
        </header>
      </div>
      <div className="undersearch">
        <div className='loca'>
          It looks like you're in Manhattan. Not correct? &nbsp; <i className="fa-sharp fa-solid fa-location-arrow"></i>
          &nbsp;&nbsp;
          <div className="get-lo">Get current location</div>
        </div>
        <div className='category_container'>
          <div className='category'>
            <div className="first_cat">
              <h1 className='splashh1'>Available for dinner now</h1>
              <div className="view-all-btn">
                <Link to="/restaurants">
                  <button style={{ backgroundColor: "transparent", color: "red" }}>
                    View all
                  </button>
                </Link>
              </div>
            </div>
            <div className='restaurant_i'>
              <div className='restaurant-container'>
                <a className="space"></a>
                {restaurants.slice(0, 10).map(restaurant => (
                  <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                    <li className={`restaurant-box ${selectedRestaurant === restaurant ? 'highlight' : ''}`} onClick={() => {handleRestaurantClick(restaurant); }}>
                      <a href="#"></a>
                      <Splash_item_rs restaurant={restaurant} />
                    </li>
                  </Link>
                ))}
                <a className="space"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='category_container2'>
        <div className='category'>
          <div className="first_cat">
            <div className='splashh1'>Steakhouses Near You</div>
            <div className="view-all-btn">
              <Link to="/restaurants">
                <button style={{ backgroundColor: "transparent", color: "red" }}>
                  View all
                </button>
              </Link>
            </div>
          </div>
          <div className='restaurant_i'>
            <div className='restaurant-container'>
              <a className="space"></a>
              {restaurants.slice(9, 19).map(restaurant => (
                <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                  <li className={`restaurant-box ${selectedRestaurant === restaurant ? 'highlight' : ''}`} onClick={() => handleRestaurantClick(restaurant)}>
                    <a href="#"></a>
                    <Splash_item_rs restaurant={restaurant} />
                  </li>
                </Link>
              ))}
              <a className="space"></a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SplashPage;
