/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getCurrentConditions, getFiveDayForecast } from '../services/location';

const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<any>([]);
  const [forecast, setForecast] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const weather = await getCurrentConditions();
      setCurrentWeather(weather);

      const newForecast = await getFiveDayForecast();
      setForecast(newForecast.DailyForecasts);
    })();
    return;
   
  }, []);

  return { currentWeather, forecast };
};

export default useWeather;