import React from 'react'
import "./Card.css"
const CurrentWeatherCard = ({data,loading,error}) => { 
  if (loading) {
    return <div className='currentWeatherCard'>Loading...</div>;
  }

  if (error) {
    return <div className='currentWeatherCard'>Error: {error.message}</div>;
  }

  if (!data) {
    return (
      <div className='currentWeatherCard'>
        <h6 className='city'>--</h6>
        <h6 className='temp'>-- &deg;C</h6>
        <h6 className='skyDesp'>--</h6>
      </div>
    );
  }
  return (
    <div> 
      <div className='currentWeatherCard'> 
        <h6 className='city'>{data.name}, {data.sys?.country}</h6>
        <h6 className='temp'>{Math.round(data.main?.temp)}&deg;C</h6>
        <h6 className='skyDesp'>{data.weather?.[0]?.description}</h6> 
        <hr className='line' /> 
        <div className='currentWeatherCard-buttom'> 
          <div className='calender'> 
            <img src="./assets/calendar.png" alt="calendar" width={30} height={30} /> 
            <h6 className='date'>{new Date(data.dt * 1000).toLocaleDateString()}</h6>
          </div> 
          <div className='time'> 
              <img src="./assets/time.png" alt="time" width={30} height={30} /> 
              <h6 className='time-text'>{new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6>
          </div> 
        </div> 
      </div> 
    </div>  
  )
}
export default CurrentWeatherCard