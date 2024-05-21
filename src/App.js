import './App.css';
import React, { useState, useMemo } from 'react';

/*
 Use memorization it does cache the value of input because if same input pass over, it gives same input so in order
*/

function App() {
  const [number, setNumber] = useState(() => 0);
  const [dark, setDark] = useState(() => false);
  const doubleNumbers = useMemo(() => doubleNumber(number), [number])
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  // it only access the element
  return (
    <>
      <input value={number} onChange={e => setNumber(parseInt(e.target.value || 0))} />
      <div style={themeStyles}>
        {doubleNumbers}
      </div>
      <button onClick={() => setDark(prev => !prev)}>toggle theme</button>
    </>
  );
}

function doubleNumber(number) {
  // its a blocking functions or slowing a functions
  for (let i = 0; i < 2000000000; i++) { }
  return number * 2
}

export default App;
