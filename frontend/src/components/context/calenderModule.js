// import React from 'react';
// import Calendar from 'react-calendar';

// const CalendarModule = ({ date, onChange, isVisible, onClose }) => {
//   return (
//     isVisible && (
//       <div className="calendarContainer" onClick={e => e.target === e.currentTarget && onClose()}>
//         <div className="close-button" onClick={onClose}>
//           ×
//         </div>
//         <Calendar
//           onChange={onChange}
//           value={date}
//           minDate={new Date()}
//           className="calendar"
//         />
//       </div>
//     )
//   );
// };

// export default CalendarModule;

import React from 'react';
import Calendar from 'react-calendar';

const CalendarModule = ({ date, onChange, isVisible, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.closest('.calendarContainer')) {
      return;
    }
    onClose();
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    isVisible && (
      <div className="calendarContainer" >
        <Calendar
          onChange={onChange}
          value={date}
          minDate={new Date()}
          className="calendar"
        />
        <div className="close-btn" onClick={onClose}>X</div>
      </div>
    )
  );
};

export default CalendarModule;
