import './App.css';
import React, { useState } from 'react';


function App() {
  const [state, setState] = useState(() => '');
  return (
    <>
      <input value={state} onChange={e => setState(e.target.value)}/>
      <div>
        My name is {state}
      </div>
    </>
  );
}

export default App;
