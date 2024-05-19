import './App.css';
import React, { useEffect, useState, useRef } from 'react';


function App() {
  const [state, setState] = useState(() => '');
  const rerenderCount = useRef(0)
  console.log('rerenderCount', rerenderCount)
  useEffect(() => {
    console.log('rerenderCount', rerenderCount)
    rerenderCount.current += 1
  });
  // useRef and useState
  /*
    UseState is takes a state and render a state in component, it chanages cause to render the component
    but in the useRef it returns a object as current value, it doesn't trigger a rerender a compoent
  */
  return (
    <>
      <input value={state} onChange={e => setState(e.target.value)}/>
      <div>
        My name is {state}
      </div>
      <div>
        number of times renders {rerenderCount.current}
      </div>
    </>
  );
}

export default App;
