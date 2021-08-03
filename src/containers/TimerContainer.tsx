import React, { useEffect, useState } from 'react';
import { timeUntilWedding, millisecondsToDays } from '../utils/timer';
import Timer from '../components/Timer';

export default function TimerContainer(){
  const [timer, setTimer] = useState(millisecondsToDays(timeUntilWedding()));


  return <Timer timer={timer}/>;
}