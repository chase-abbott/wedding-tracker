import dotenv from 'dotenv';
dotenv.config();

const KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getCurrentConditions = () => {
  return fetch(`https://aqueous-coast-24887.herokuapp.com/https://dataservice.accuweather.com/currentconditions/v1/332066?apikey=${KEY}&language=en-us`)
    .then(res => res.json());
};

export const getFiveDayForecast = () => {
  return fetch(`https://aqueous-coast-24887.herokuapp.com/https://dataservice.accuweather.com/forecasts/v1/daily/5day/332066?apikey=udxxThZMStaqOyOaW4mnovO6G89AsXHu&details=true`)
    .then(res => res.json());
};
