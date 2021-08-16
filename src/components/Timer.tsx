import React, { useEffect } from 'react';
import { timeUntilWedding, millisecondsToDays } from '../utils/timer';


interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number
}

export default function Timer(props: {timer: Countdown, setTimer: (params: Countdown) => any}){
  const { timer, setTimer } = props;

  useEffect(() => {
    const newCountdown = millisecondsToDays(timeUntilWedding());
    const interval = setInterval(setTimer(newCountdown), 1000);
    return () => clearInterval(interval);
  }, [timer, setTimer]);

  return (
    <div className="flex justify-between w-6/12 border-double border-4 border-pink-300 rounded">
      <h3> Days: {timer.days} </h3> 
      <h3> Hours: {timer.hours} </h3> 
      <h3> Minutes: {timer.minutes} </h3> 
      <h3> Seconds: {timer.seconds} </h3> 
    </div>
  );
}