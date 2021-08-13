import React from 'react';
import Heading from './components/Heading';
import TimerContainer from './containers/TimerContainer';
import WeatherContainer from './containers/WeatherContainer';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading/>
      <TimerContainer/>
      <WeatherContainer/>
    </div>
  );
}

export default App;
