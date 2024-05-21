import './App.css';
import React, { useState } from 'react';

/*
  Main concept of the ref is the reference the element and ti does'nt tigger the componnet render r
*/

function App() {
  const [number, setNumber] = useState(() => 0);
  const [dark, setDark] = useState(() => false);
  const doubleNumbers = doubleNumber(number)
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
