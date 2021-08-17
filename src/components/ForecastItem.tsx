import React, { useEffect } from 'react';

export default function ForecastItem(props: {date: Date}){
  const { date } = props;

  const parsedDate = new Date(date);
  const dateMap: any = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  const day = parsedDate.getDay().toString();
 

  return <h1> {dateMap[day]} </h1>;
}