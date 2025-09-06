import React, { useState, useEffect }  from 'react'
import SunriseSunsetCard from './SunriseSunsetCard'
import { fetchAirPollution } from "./weatherLogic";
const AirQualityCard = ({data}) => {

  const [aqData, setAqData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const lat = data?.coord?.lat ?? data?.coord?.latitude;
    const lon = data?.coord?.lon ?? data?.coord?.longitude;
    if (lat == null || lon == null) {
      return;
    }

    let cancelled = false;
    async function loadAqi() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetchAirPollution(lat, lon);
        if (!cancelled) {

          setAqData(res?.list?.[0] ?? null);
        }
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    loadAqi();
    return () => {
      cancelled = true;
    };
  }, [data]);


  if (loading) {
    return (
      <div className='twoMiddleCard'>
        <div className='AirQualityCard'>Loading AQI...</div>
        <div><small>Sunrise/Sunset card</small></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='twoMiddleCard'>
        <div className='AirQualityCard'>Error loading AQI: {error.message}</div>
        <div><small>Sunrise/Sunset card</small></div>
      </div>
    );
  }

  const comps = aqData?.components ?? {};
  const pm25 = comps.pm2_5 ?? "--";
  const so2 = comps.so2 ?? "--";
  const no2 = comps.no2 ?? "--";
  const o3 = comps.o3 ?? "--";



  return (
    <div>
      <div className='twoMiddleCard'>
        <div className='AirQualityCard'>
            <h6 className='title'>Air Quality Index (AQI)</h6>
            <div className='air-text-img'>
                <img src="./assets/wind.png" alt="wind"  />
                <div className='air-text'>
                    <h6>PM2.5</h6>
                    <p>{pm25}</p>
                </div>
                <div className='air-text'>
                    <h6>SO2</h6>
                    <p>{so2}</p>
                </div>
                <div className='air-text'>
                    <h6>NO2</h6>
                    <p>{no2}</p>
                </div>
                <div className='air-text'>
                    <h6>O3</h6>
                    <p>{o3}</p>
                </div>
            </div>
        </div>

        <SunriseSunsetCard data={data} />
      </div>
    </div>
  );
}

export default AirQualityCard
