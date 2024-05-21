import './App.css';
import React, { useState, useTransition } from 'react';


function App() {
  const [isPending, startTansistions] = useTransition();
  const [state, setState] = useState(() => '');
  const [list, setList] = useState(() => []);
  const list_size = 2000;

  function onChange(value) {
    setState(value)

    let l = [];
    for (let i = 1; i < list_size; i++) {
      l.push(value);
    }

    setList(l)
  }
  return (
    <div>
      <input type="text" name="sdfasf" id="asdf" value={state} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

// useState to update and manage the rerender of the component
// useReducer is same as but it as concrete way to handle complex state logic over here
export default App;
