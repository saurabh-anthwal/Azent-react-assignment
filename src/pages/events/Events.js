import React, { useState } from "react";
import "./Events.css";
import EventNavBar from "../../components/events/eventNavBar/EventNavBar";
import EventList from "../../components/events/eventList/EventList";

import Allcountries from "../../data/countries.json";
import AllEvents from "../../data/event.json";

const Events = () => {
  const [countries] = useState(Allcountries?.countries);
  const [events] = useState(AllEvents?.events);
  const [selectedCountry, setSelectedCountry] = useState(countries[0] || {});

  return (
    <div className="events-centre">
      <h1 className="heading">Explore Our Events</h1>
      <div className="events">
        <EventNavBar 
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        events={events}
        />
        <EventList 
        events={events} 
        selectedCountry={selectedCountry}  
        />
      </div>
    </div>
  );
};

export default Events;
