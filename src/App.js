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

  // for a complex data structure
  const [data, setData] = useState(() => ({theme: 'dark', value: 1}));
  // in order to avoid this
  // we need to use seperate state like this
  const [value, setvalue] = useState(() => 1);
  const [theme, settheme] = useState(() => 'dark');


  console.log('data', data)

  function decrement() {
    // setCounter(counter - 1); // 5
    // // the current state will have to not updated here so we get 6
    // setCounter(counter - 1);

    // if you want to update the state based on the current state
    setCounter((prevValue) => prevValue - 1)

    // if i need to update particular property, we need to provided whole set of data
    setData(prev => ({...prev, theme: 'blue'}))
    // it will gives the current updated value
    // setCounter((prevValue) => prevValue - 1)

    
  }

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <span>{data.theme}</span>
      <button>+</button>
    </div>
  );
}

export default App;
