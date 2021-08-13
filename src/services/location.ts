import dotenv from 'dotenv';
dotenv.config();

const getCurrentConditions = () => {
  console.log(process.env);
  return fetch(`https://dataservice.accuweather.com/currentconditions/v1/332066?apikey=${process.env.WEATHER_API_KEY}&language=en-us`, {
    method: 'GET',
    mode: 'cors'
  })
    .then(res => res.json());
};

export default getCurrentConditions;