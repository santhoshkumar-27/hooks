import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(6)

  function decrement() {
    // setCounter(counter - 1); // 5
    // // the current state will have to not updated here so we get 6
    // setCounter(counter - 1);

    // if you want to update the state based on the current state
    setCounter((prevValue) => prevValue - 1)
    // it will gives the current updated value
    // setCounter((prevValue) => prevValue - 1)
  }

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button>+</button>
    </div>
  );
}

export default App;
