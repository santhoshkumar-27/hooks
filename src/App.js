import './App.css';
import React, { useState, useCallback } from 'react';
import { List } from './List';

/*
 Use callback it same as useMemo but what it does means it doesn't create a new function reference every time re render
*/
// when were the rerendering happening means we reinitial from the start of components
function App() {
  const [number, setNumber] = useState(() => 0);
  const [dark, setDark] = useState(() => false);
  const getItems = useCallback((incr) => [number + incr, number + 1 + incr, number + 2 + incr], [number]);
  // use callback create a items only when specific input changes not when re render doing, for normal without these
  // we getItems reference will created evey items, when particular dependency changed or some other changes

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }
  // it triggers every time when re rendering happening, 
  // because it create new reference every time
  return (
    <div style={themeStyles}>
      <input value={number} type='number' onChange={e => setNumber(parseInt(e.target.value || 0))} />

      <button onClick={() => setDark(prev => !prev)}>toggle theme</button>

      <List getItems={getItems} />
    </div>
  );
}

// useMemo it takes a function and return a value
// useCallback it returns the functions not the whole value, later in these application we call these functions, along with that parameters

export default App;
