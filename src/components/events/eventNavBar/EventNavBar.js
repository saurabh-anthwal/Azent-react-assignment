import React from "react";
import "./EventNavBar.css";

const EventNavBar = ({
  countries,
  selectedCountry,
  setSelectedCountry,
  events,
}) => {

function count(count){
  const allEvents=events.filter((item)=>item.id===count.id)
return allEvents.length
}

  return (
    <div className="countries">
      {countries.map((el, index) => (
        <div
          key={index}
          onClick={() => setSelectedCountry(el)}
          className={`${
            el.id === selectedCountry.id
              ? "active countrie"
              : "countrie"
          }`}
        >
          <h3>{el.countryName}{count(el)>0?`(${count(el)})`:""}</h3>
        </div>
      ))}
    </div>
  );
};

export default EventNavBar;
