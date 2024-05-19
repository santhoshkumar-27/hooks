import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [state, setState] = useState(() => '');
  const [rerenderCount, setReRenderCount] = useState(() => 0)

  useEffect(() => {
    setReRenderCount(prev => prev + 1);
  });
  // it throws the error of because it doing infinite set update calles 
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
