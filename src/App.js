import './App.css';
import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(() => 0);

  function increment() {
    setNumber(prev => prev + 1);
  }

  function decrement() {
    setNumber(prev => prev - 1);
  }
  return (
    <div>

    
    <button onClick={increment}>+</button>
    <span>{number}</span>
    <button onClick={decrement}>-</button>


    </div>
  );
}

// useMemo it takes a function and return a value
// useCallback it returns the functions not the whole value, later in these application we call these functions, along with that parameters

export default App;
