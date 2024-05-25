import './App.css';
import React, { useRef, useState } from 'react';
import Simplet from './Simplet';
import ModelFocuse from './ModelFocuse';

function App() {

  // JSX for the component
  return (
    <div>
      <Simplet  />
      <ModelFocuse />
    </div>
  );
}

// useState to update and manage the rerender of the component
export default App;
