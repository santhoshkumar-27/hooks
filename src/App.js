import './App.css';
import { useState } from 'react';

const counterInitialize = () => {
  console.log('asdffffffffff'); // it called only one time
  return 6
}

function App() {
   // if we put like this it will trigger every time when components re rendered
  // const [counter, setCounter] = useState(counterInitialize());
  // or suppose you want to run only the components initialize period we passed as arrow functions
  const [counter, setCounter] = useState(() => {
    console.log('asdffffffffff'); // it called only one time
    return 6
  });


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
