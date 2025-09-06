import React from "react";
import "./Card.css";

const PressureCard = ({ data }) => {

  if (!data) {
    return (
      <div className="pressurecontainer">
        <div className="pressureCard">
          <img src="./assets/pressure.png" alt="pressure" width={50} height={50} />
          <div className="pressureCard-details">
            <p className="pressure">Pressure</p>
            <h5 className="pha">-- hPa</h5>
          </div>
        </div>

        <div className="pressureCard">
          <img src="./assets/pressure.png" alt="humidity" width={50} height={50} />
          <div className="pressureCard-details">
            <p className="pressure">Humidity</p>
            <h5 className="pha">-- %</h5>
          </div>
        </div>

        <div className="pressureCard">
          <img src="./assets/pressure.png" alt="wind" width={50} height={50} />
          <div className="pressureCard-details">
            <p className="pressure">Wind</p>
            <h5 className="pha">--</h5>
          </div>
        </div>

        <div className="pressureCard">
          <img src="./assets/pressure.png" alt="visibility" width={50} height={50} />
          <div className="pressureCard-details">
            <p className="pressure">Visibility</p>
            <h5 className="pha">-- m</h5>
          </div>
        </div>
      </div>
    );
  }

  const pressure = data?.main?.pressure;
  const humidity = data?.main?.humidity;
  const wind = data?.wind?.speed;
  const visibility = data?.visibility; 

  return (
    <div>
      <div className="pressurecontainer">
        <div className="pressureCard">
          <img src="./assets/pressure.png" alt="pressure" width={50} height={50} />
          <div className="pressureCard-details">
            <p className="pressure">Pressure</p>
            <h5 className="pha">{pressure != null ? `${pressure} hPa` : "--"}</h5>
          </div>
        </div>

        <div className="pressureCard">
          <img src="./assets/pressure.png" alt="humidity" width={50} height={50} />
          <div className="pressureCard-details">
            <p className="pressure">Humidity</p>
            <h5 className="pha">{humidity != null ? `${humidity} %` : "--"}</h5>
          </div>
        </div>

        <div className="pressureCard">
          <img src="./assets/pressure.png" alt="wind" width={50} height={50} />
          <div className="pressureCard-details">
            <p className="pressure">Wind</p>
            <h5 className="pha">{wind != null ? `${wind} m/s` : "--"}</h5>
          </div>
        </div>

        <div className="pressureCard">
          <img src="./assets/pressure.png" alt="visibility" width={50} height={50} />
          <div className="pressureCard-details">
            <p className="pressure">Visibility</p>
            <h5 className="pha">{visibility != null ? `${visibility} m` : "--"}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressureCard;
