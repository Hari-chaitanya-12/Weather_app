import React from "react";
import "./Card.css"


const ForecastCard = ({ data }) => {

  if (!data || !Array.isArray(data.list) || data.list.length === 0) {
    return (
      <div className="foreCastCard">
        <h6 className="coming">Coming 5 Days</h6>
       
      </div>
    );
  }

  const forecastList = data.list;


  const dailyMap = {};
  forecastList.forEach((item) => {
    const dateKey = new Date(item.dt * 1000).toLocaleDateString();
    if (!dailyMap[dateKey]) dailyMap[dateKey] = item;
  });

  const days = Object.values(dailyMap).slice(0, 5);

  return (
    <div className="foreCastCard">
      <h6 className="coming">Coming 5 Days</h6>
      {days.map((d, i) => (
        <div className="foreCastcard-details" key={i}>
          <div className="castcard">
            <img
              src={`https://openweathermap.org/img/wn/${d.weather?.[0]?.icon ?? "01d"}@2x.png`}
              alt={d.weather?.[0]?.description ?? ""}
              width={30}
              height={30}
            />
            <p>{typeof d.main?.temp === "number" ? `${Math.round(d.main.temp)}°C` : "--"}</p>
          </div>

          <p className="days-date">
            {new Date(d.dt * 1000).toLocaleDateString(undefined, { weekday: "long" })}
          </p>
          <p className="days-time">{new Date(d.dt * 1000).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
