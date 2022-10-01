import React, { useEffect, useState } from "react";
import "./EventList.css";

const EventList = ({ events, selectedCountry }) => {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    const data = events.filter((event) => {
      return event.id === selectedCountry.id;
    });
    setAllEvents(data);
  }, [selectedCountry]);

  return (
    <div className="all-events">
      {allEvents.length > 0 ? (
        allEvents.map((el, index) => (
          <div key={index} className="single-event">
            <img src={el.image} alt="" />
            <div className="event-data">
              <h4 className="event-title">{el.title}</h4>
              <p className="date">{el.date}</p>
              <div className="plateform">
                <span>{el.platform}</span>
                <span className="devider">|</span>
                <span>{el.time}</span>
              </div>
              <div className="register-button">
                <button>Register Now</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-msg">There is no event...</p>
      )}
    </div>
  );
};

export default EventList;
