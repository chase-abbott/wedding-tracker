import React from 'react';
import useWeather from '../state/useWeather';


export default function WeatherContainer(){
  const { currentWeather } = useWeather();

  return (<>
    {currentWeather[0] ?
      <div className="m-8 w-6/12 flex flex-col items-center">
        <h3> Current Weather in Carmel-By-The-Sea </h3>
        <figure className="flex m-4 justify-between items-center w-full">
          <img src='./AccuWeather.png' alt="accuweather" className="w-2/12"/>
          <div>
            <figcaption> {currentWeather[0].Temperature.Imperial.Value}F</figcaption>
            <figcaption> {currentWeather[0].Temperature.Metric.Value}C </figcaption>
          </div>
          <figcaption> {currentWeather[0].WeatherText}</figcaption>
          <img src={`./${currentWeather[0].WeatherIcon}-s.png`} alt={currentWeather['WeatherText']}></img>
        </figure>
      </div>
      : null
    }
  </>
  );
}

