import React from "react";
import "./Card.css";



const HourlyForecastCard = ({ data }) => {

  if (!data || !Array.isArray(data.list) || data.list.length === 0) {
    return (
      <div className="HourlyForecastCard-container">
        <h6 className="Today">Today</h6>
        <div className="Hourly-container" style={{ padding: 16 }}>
          
        </div>
      </div>
    );
  }

  const forecastList = data.list;
  const nextHours = forecastList.slice(0, 6); 

  const formatHour = (dt) => {
    const d = new Date(dt * 1000);
    return d.toLocaleTimeString([], { hour: "numeric", hour12: true });
  };

  const iconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div>
      <div className="HourlyForecastCard-container">
        <h6 className="Today">Today</h6>
        <div className="Hourly-container">
          {nextHours.map((h, idx) => (
            <div className="detail-container" key={idx}>
              <h6 className="hourly-time">{formatHour(h.dt)}</h6>
              <img className="detail-container-img"
                src={iconUrl(h.weather?.[0]?.icon ?? "01d")}
                alt={h.weather?.[0]?.description ?? ""}

              />
              <h6 className="hourly-temp">
                {typeof h.main?.temp === "number" ? Math.round(h.main.temp) : "--"} &deg;C
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecastCard;

