import dotenv from 'dotenv';
dotenv.config();

const KEY = process.env.REACT_APP_WEATHER_API_KEY;

const getCurrentConditions = () => {
  return fetch(`https://dataservice.accuweather.com/currentconditions/v1/332066?apikey=${KEY}&language=en-us`, {
    method: 'GET',
    // mode: 'cors',
  })
    .then(res => res.json());
};

export default getCurrentConditions;