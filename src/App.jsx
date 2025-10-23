import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastCard from "./components/ForecastCard";
import PressureCard from "./components/PressureCard";
import AirQualityCard from "./components/AirQualityCard";
import HourlyForecastCard from "./components/HourlyForecastCard";
import { fetchWeatherByCity, fetchForecastByCity } from "./components/weatherLogic";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setError(null);
    setLoading(true);
    try {
      const current = await fetchWeatherByCity(city);
      const forecast = await fetchForecastByCity(city);
      setWeatherData({ current, forecast });
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };


  const getBackgroundClass = () => {
    const current = weatherData?.current;
    if (!current || !Array.isArray(current.weather) || !current.weather[0]) return "default-bg";

    const main = (current.weather[0].main || "").toLowerCase();
    const icon = current.weather[0].icon || ""; 
    const isNight = icon.endsWith("n");

    if (main.includes("cloud")) return "cloudy";
    if (main.includes("rain") || main.includes("drizzle")) return "rainy";
    if (main.includes("thunder") || main.includes("thunderstorm")) return "rainy";
    if (main.includes("snow")) return "snow";
    if (main.includes("clear")) return isNight ? "night" : "sunny";

    return "default-bg";
  };

  const bgClass = getBackgroundClass();

  return (
    <div className={`app ${bgClass} `}>
      <div className="app-bg" aria-hidden="true" />
      <SearchBar onSearch={handleSearch} loading={loading} error={error} />
      <CurrentWeatherCard data={weatherData?.current} loading={loading} error={error} />
      <ForecastCard data={weatherData?.forecast} />
      <PressureCard data={weatherData?.current} />
      <AirQualityCard data={weatherData?.current} />
      <HourlyForecastCard data={weatherData?.forecast} />
    </div>
  );
}

export default App;
