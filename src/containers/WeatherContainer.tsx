import React, { useEffect } from 'react';
import useWeather from '../state/useWeather';


export default function WeatherContainer(){
  const { currentWeather } = useWeather();
  useEffect(() => {

    console.log(currentWeather);
  });
  return <h1> {currentWeather['WeatherText']}</h1>;
}

