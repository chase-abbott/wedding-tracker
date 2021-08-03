import React from 'react';
import Heading from './components/Heading';
import TimerContainer from './containers/TimerContainer';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading/>
      <TimerContainer/>
    </div>
  );
}

export default App;
