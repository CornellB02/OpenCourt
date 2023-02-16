import React, { useEffect, useState } from "react";
import CalendarModule from '../context/calenderModule';
import "./SplashPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../store/restaurants";
import Restaurant_item from "../Restaurants/Restaurant_item";
import Splash_item_rs from "../Restaurants/splash_item_rs";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



function SplashPage() {
  const dispatch = useDispatch();
  const [date, setDate] = React.useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = React.useState(false);
  const restaurants = useSelector(state => Object.values(state.restaurants).slice(0,5));

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const onChange = (selectedDate) => {
    setDate(selectedDate);
    setIsCalendarVisible(false);
  };


  return (
    <div className="splash-wrap">
      <div className="splash-main">
        <header className="splash-search">
          <div className="findtable">Find your table for any occasion</div>
          <div className="s-container">
            <div className='splash_select'>
            <select className='date_selector'
            onClick={() => setIsCalendarVisible(!isCalendarVisible)}>
                <script src="https://kit.fontawesome.com/babca851fb.js" crossorigin="anonymous"></script>
                <FontAwesomeIcon icon="fa-calendar" />
              <option> 
                {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}</option>
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
                const isPM = hour >= 12;
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
            />
            
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            <button className="submit">Let's go</button>
            </div>
          </div>
        </header>
      </div>
      <div className='loca'>
        It looks like your in Manhattan Not correct? <i class="fa-sharp fa-solid fa-location-arrow"></i>
      </div>
      <div className='category_container'>
        <div className='category'>
          <h1 className='splashh1'>Random Restaurants Near you</h1>
          <div className='restaurant_i'> 
          {/* {restaurants.select(restaurant =>{ */}

          <div className='restaurant-container'> 
          {restaurants.map(restaurant => (
             <li key={restaurant.name} className='restaurant-box'>
              <Splash_item_rs restaurant={restaurant} />
              </li>
          ))}
          </div>
  
          {/* // })} */}
          {/* <Restaurant_item key={restaurants.name} restaurant={restaurants} /> */}
          {/* <RestaurantDetailPage key={restaurant.id} restaurant={restaurant} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;