import React from "react";

const SunriseSunsetCard = ({ data }) => {
  if (!data || !data.sys) {
    return (
      <div className="sunriseset">
        <h6 className="sun-text">Sunrise & Sunset</h6>
        <div className="riseset">
          <div className="rise">
            <div className="sun-img-text">
              <img src="./assets/sun (1).png" alt="sun"  />
              <div className="sunrisetext">
                <p>Sunrise</p>
                <h6>-- : --</h6>
              </div>
            </div>
          </div>
          <div className="set">
            <div className="sun-img-text">
              <img src="./assets/moon.png" alt="moon"  />
              <div className="sunrisetext">
                <p>Sunset</p>
                <h6>-- : --</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const sunrise = new Date(data.sys.sunrise * 1000);
  const sunset = new Date(data.sys.sunset * 1000);

  const sunriseTime = sunrise.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const sunsetTime = sunset.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="sunriseset">
      <h6 className="sun-text">Sunrise & Sunset</h6>
      <div className="riseset">
        <div className="rise">
          <div className="sun-img-text">
            <img src="./assets/sun (1).png" alt="sun" width={60} height={60} />
            <div className="sunrisetext">
              <p>Sunrise</p>
              <h6>{sunriseTime}</h6>
            </div>
          </div>
        </div>
        <div className="set">
          <div className="sun-img-text">
            <img src="./assets/moon.png" alt="moon" width={60} height={60} />
            <div className="sunrisetext">
              <p>Sunset</p>
              <h6>{sunsetTime}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunriseSunsetCard;
