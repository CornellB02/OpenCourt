import React, { useState } from 'react';
import CalendarModule from './calenderModule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchModule = () => {
  const [date, setDate] = useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const onChange = (newDate) => {
    setDate(newDate);
    setIsCalendarVisible(false);
  };

  return (
        <div className="search-main">
        <header className="whole-search">
            <div className="findtable">Find your table for any occasion</div>
            <div className="s-container">
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            <div className="search_select">
                <select className="date_selector" onClick={() => setIsCalendarVisible(!isCalendarVisible)}>
                <FontAwesomeIcon icon="fa-calendar" />
                <option>
                    {date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                    })}
                </option>
                </select>
                <CalendarModule
                date={date}
                onChange={onChange}
                isVisible={isCalendarVisible}
                onClose={() => setIsCalendarVisible(false)}
                />
                <select className="time_selector">
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
                <select className="num_of_ppl_selector">
                {Array.from({ length: 20 }, (_, i) => {
                    return (
                    <option key={i + 1} value={i + 1}>
                        {i + 1} {i + 1 === 1 ? 'person' : 'people'}
                    </option>
                    );
                })}
                <option value="larger">Larger Party</option>
                </select>
            </div>
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            <>&nbsp;&nbsp;</>
            <div className="splashinput">
                <input
                    className="splash_search_input"
                    type="text"
                    placeholder="Location, Restaurant, or Cuisine"
                />
                <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            <>&nbsp;&nbsp;</>
             <button className="submit">Let's go</button>
                </div>
            </div>
        </header>
    </div>
     );
    };
    
    export default SearchModule;
