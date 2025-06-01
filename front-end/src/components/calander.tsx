import React from 'react';
import { Calendar } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'; // Import RSuite styles
// import '../greenCalnder.css'; // Your custom CSS for the green date

function RSuiteGreenCalendar() {
  // The specific date you want to make green
  const targetDate = new Date(2025, 6, 15); // July 15, 2025 (Month is 0-indexed)

  const isSameDay = (date1:any, date2:any) => {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  };

  return (
    <div>
      {/* <h1>RSuite Calendar with Green Date</h1> */}
      <Calendar
        // The renderCell prop allows you to customize the content and styling of each cell
        renderCell={date => {
          if (isSameDay(date, targetDate)) {
            // Apply a custom class to the cell
            return <div className="green-date-cell">{date.getDate()}</div>;
          }
          return  // Default rendering for other days
        }}
      />
    </div>
  );
}

export default RSuiteGreenCalendar;