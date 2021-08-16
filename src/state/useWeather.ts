/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import getCurrentConditions from '../services/location';

const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const weather = await getCurrentConditions();
      setCurrentWeather(weather);
    })();
    return;
   
  }, []);

  return { currentWeather };
};

export default useWeather;