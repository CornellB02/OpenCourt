import React from 'react';
import CalendarModule from '../context/calenderModule';
import "./Navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';

function NavBar() {
    const [date, setDate] = React.useState(new Date());
    const [isCalendarVisible, setIsCalendarVisible] = React.useState(false);
    const onChange = (selectedDate) => {
      setDate(selectedDate);
      setIsCalendarVisible(false);
    };

    return (
        <div className="nav-wrap">
       <ol className='location_route'>
            <li className='home-location-list'>
                {/* ::before */}
                <param className='link-style'>Home</param>
                {/* ::after */}
            </li>
            <li className='Usa'>
                {/* ::before */}
                <div className='country_class' >United States</div>
                {/* ::after */}
            </li>
            <li className='city'>
                {/* ::before */}
                <div className='city_class' >New York</div>
                {/* ::after */}
            </li>
        </ol>
          <div className="nav-main">
            <header className="nav-search">
              <div className="findtablenav"></div>
              <div className="nav-container">
                <div className='nav_select'>
                <select className='date_selector'
                onClick={() => setIsCalendarVisible(!isCalendarVisible)}>
                    {/* <script src="https://kit.fontawesome.com/babca851fb.js" crossorigin="anonymous"></script> */}
                    <FontAwesomeIcon icon="fa-calendar" />
                  <option> {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</option>
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
                <div className='navinput'>
                <input
                  className="nav_search_input"
                  type="text"
                  placeholder="Location, Restaurant, or Cuisine"
                />
                
                <>&nbsp;&nbsp;&nbsp;&nbsp;</>
                <button className="submit">Find a table</button>
                </div>
              </div>
            </header>
          </div>
      
        </div>
      );
    }

export default NavBar