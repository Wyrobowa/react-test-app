import React, { useEffect, useState } from 'react';
import './App.css';

const Square = () => {
  return (
    <div style={{ width: '100px', height: '100px', background: 'black'}}></div>
  )
};

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [numberOfSquares, setNumberOfSquares] = useState(0);

  const handleOnStartClick = () => {
    setIsRunning(true);
  }

  const handleOnStopClick = () => {
    setIsRunning(false);
  }

  const handleOnResetClick = () => {
    setIsRunning(false);
    setNumberOfSquares(0);
  }

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setNumberOfSquares((prevState) => prevState + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className="App">
      <div className="example">
        <div className="squares-box">
          {Array.from({ length: numberOfSquares}). map((_, index) => (
            <Square key={index} />
          ))}
        </div>
        <div className="button-box">
          <button className="button button-start" onClick={handleOnStartClick}>Start</button>
          <button className="button button-stop" onClick={handleOnStopClick}>Stop</button>
          <button className="button button-reset" onClick={handleOnResetClick}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
