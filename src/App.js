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

// useState to update and manage the rerender of the component
// useReducer is same as but it as concrete way to handle complex state logic over here
export default App;
