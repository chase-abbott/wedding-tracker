import React, { useState } from 'react';
import Timer from '../components/Timer';

export default function TimerContainer(){
  const [timeLeft, setTimeLeft] = useState(null);
  return <Timer/>;
}