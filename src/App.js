import './App.css';
import React, { useEffect, useState, useRef } from 'react';

/*
  Main concept of the ref is the reference the element and ti does'nt tigger the componnet render r
*/

function App() {
  const [state, setState] = useState(() => '');
  const rerenderCount = useRef(0)
  const inputRef = useRef();
  const prevState = useRef('');
  // console.log('rerenderCount', rerenderCount)
  useEffect(() => {
    // console.log('rerenderCount', rerenderCount)
    rerenderCount.current += 1
    prevState.current = state;
  }, [state]);

  // useRef and useState
  /*
    UseState is takes a state and render a state in component, it chanages cause to render the component
    but in the useRef it returns a object as current value, it doesn't trigger a rerender a compoent
  */
  function focus() {
    inputRef.current.focus();
  }
  // it only access the element
  return (
    <>
      <input ref={inputRef} value={state} onChange={e => setState(e.target.value)}/>
      <div>
        My name is {state}
      </div>
      <div>
        number of times renders {rerenderCount.current}
      </div>
      <div>
        previous renders {prevState.current}
      </div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
