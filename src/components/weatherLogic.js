import { useState, useEffect, useRef, useCallback } from "react";


const BASE = "https://api.openweathermap.org/data/2.5";
const KEY = import.meta.env.VITE_OWN_KEY;



if (!KEY) {
  console.warn("VITE_OWM_KEY is not defined in .env");
}

async function fetchJson(URL){

  const response = await fetch(URL)
  if(!response.ok){
    const text = await response.text().catch(()=>"");
    const error = new Error (text || response.statusText|| `HTTP ${response.status}`)
    error.status = response.status
    throw error;
  }

  return response.json();



}
  export async function fetchWeatherByCity(city) {
  const url = `${BASE}/weather?q=${encodeURIComponent(city)}&appid=${KEY}&units=metric`;
  return fetchJson(url);
}

export async function fetchWeatherByCoords(lat, lon) {
  const url = `${BASE}/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`;
  return fetchJson(url);
}

export async function fetchForecastByCity(city) {
  const url = `${BASE}/forecast?q=${encodeURIComponent(city)}&appid=${KEY}&units=metric`;
  return fetchJson(url);
}

export async function fetchAirPollution(lat, lon) {
  const url = `${BASE}/air_pollution?lat=${lat}&lon=${lon}&appid=${KEY}`;
  return fetchJson(url);
}