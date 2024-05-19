import './App.css';
import React from 'react';
import { FunctionContextComponent } from './FunctionContextComponent';
import ThemeCustomProvider from './ThemeCustomContext';


function App() {

  return (
    <ThemeCustomProvider>
      <div>
        <FunctionContextComponent />
      </div>
    </ThemeCustomProvider>
  );
}

export default App;
