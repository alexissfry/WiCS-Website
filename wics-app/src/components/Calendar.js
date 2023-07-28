import React from "react";
import "../styles/Calendar.css";

export const Calendar = () => {
  return (
    <article class="grid">
      <div className="calendar">
        <h1>Calendar</h1>
        <iframe
          title="Calendar"
          src="https://calendar.google.com/calendar/embed?src=c_9b554a6b5d7c4c2133a10a168bf5699d7141e16ce4ec2e363e0835523067936f%40group.calendar.google.com&ctz=America%2FNew_York"
          style={{ border: "solid 1px #777" }}
          width="1000"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </article>
  );
};
