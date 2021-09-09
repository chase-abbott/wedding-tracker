import React from 'react';

interface temp {
  Maximum: {
    Value: number,
    Unit: string,
    UnitType: number
  },
  Minimum: {
    Value: number,
    Unit: string,
    UnitType: number
  }
}

export default function ForecastItem(props: {date: Date, temperature: temp}){
  const { date, temperature } = props;

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
 

  return (
    <div>
      <h3> {dateMap[day]} </h3>
      <p> High {temperature.Maximum.Value}{temperature.Maximum.Unit}</p>
      <p> Low {temperature.Minimum.Value}{temperature.Minimum.Unit}</p>
    </div>
  );
}