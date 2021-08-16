import React, { useEffect } from 'react';
import useWeather from '../state/useWeather';


export default function WeatherContainer(){
  const { currentWeather } = useWeather();
  useEffect(() => {

    console.log(currentWeather);
  });
  return (
    <div className="m-8">
      <h3> Current Weather in Carmel-By-The-Sea </h3>
      <figure className="flex m-4 justify-between items-center">
        <div>
          <figcaption> {currentWeather['Temperature']['Imperial'].Value}F</figcaption>
          <figcaption> {currentWeather['Temperature']['Metric'].Value}C </figcaption>
        </div>
        <figcaption> {currentWeather['WeatherText']}</figcaption>
        <img src={`./${currentWeather['WeatherIcon']}-s.png`} alt={currentWeather['WeatherText']}></img>
      </figure>
    </div>
  );
}

