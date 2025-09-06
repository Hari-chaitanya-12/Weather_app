// src/App.jsx
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
  const [weatherData, setWeatherData] = useState(null); // { current, forecast }
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

  // derive a simple background class from current weather
  const getBackgroundClass = () => {
    const current = weatherData?.current;
    if (!current || !Array.isArray(current.weather) || !current.weather[0]) return "default-bg";

    const main = (current.weather[0].main || "").toLowerCase();
    const icon = current.weather[0].icon || ""; // e.g. "01d" or "01n"
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
      {/* optional effects layer — style in CSS if you want overlays/animations */}
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
