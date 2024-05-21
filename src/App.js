import './App.css';
import React, { useState, useTransition } from 'react';


function App() {
  const [isPending, startTansistions] = useTransition();
  const [state, setState] = useState(() => '');
  const [list, setList] = useState(() => []);
  const list_size = 2000;

  function onChange(value) {
    setList([])

    setState(value)

    startTansistions(() => {
      let l = [];
      for (let i = 1; i < list_size; i++) {
        l.push(value);
      }
  
      setList(l)
    })
  }

  // updated state called all combined once so they can wait for all the setupdated to compledted,
  // by default all the state updated has the high priority so all the set updated take at one time and doing re render the view
  return (
    <div>
      <input type="text" name="sdfasf" id="asdf" value={state} onChange={(e) => onChange(e.target.value)} />
      <div>
        <ul>{
            isPending ? 'New list loading' :list.map((li, i) => <li key={i}>{li}</li>)
          }</ul>
      </div>
    </div>
  );
}

// useState to update and manage the rerender of the component
// useReducer is same as but it as concrete way to handle complex state logic over here
export default App;
