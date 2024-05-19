import './App.css';
import React, { useState, useEffect } from 'react';
import {ClassContextComponet} from './ClassContextComponent';
import {FunctionContextComponent} from './FunctionContextComponent';
export const ThemeContext = React.createContext();

function App() {

  const [theme, setTheme] = useState(() => false)

  function toggle() {
    setTheme(preValue => !preValue)
  }

  return (
    <ThemeContext.Provider value={theme}>

    <div>
        <button onClick={toggle}>Toggle</button>
    </div>
    <div>
      <ClassContextComponet />
      <FunctionContextComponent />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
