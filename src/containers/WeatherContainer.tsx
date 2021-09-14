import React, { useEffect } from 'react';
import useWeather from '../state/useWeather';
import ForecastItem from '../components/ForecastItem';


export default function WeatherContainer(){
  const { currentWeather, forecast } = useWeather();

  const forecastItems = forecast.map((day: any) => {
    console.log(day);
    return (
      <li key={day.EpochDate}>
        <ForecastItem 
          date={day.Date}
          temperature={day.Temperature}/>
      </li>
    );
  });


  return (<>
    {currentWeather[0] && forecast ?

      <div className="flex flex-col items-center">
        <h3> Current Weather in Carmel-By-The-Sea </h3>
        <figure className="flex m-4 justify-between items-center w-4/5">
          <img src='./AccuWeather.png' alt="accuweather" className="w-1/12"/>
          <div>
            <figcaption> {currentWeather[0].Temperature.Imperial.Value}F</figcaption>
            <figcaption> {currentWeather[0].Temperature.Metric.Value}C </figcaption>
          </div>
          <figcaption> {currentWeather[0].WeatherText}</figcaption>
          <img src={`./${currentWeather[0].WeatherIcon}-s.png`} alt={currentWeather['WeatherText']}></img>
        </figure>
        <ul className="flex tablet:justify-between justify-around tablet:w-4/5 p-8"> {forecastItems}</ul>
      </div>
      : null
    }
  </>
  );
}

