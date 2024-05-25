import './App.css';
import React, { useRef, useState } from 'react';
import CustomInput from './CustomInput';

function App() {
  // Define state variables for first name and last name
  const [firstName, setFirstName] = useState('firstName', '');
  const input = useRef();
  // Event handler for changing the first name
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };


  // useDebbugValue works only inside the custom hooks

  // JSX for the component
  return (
    <div>
      <input ref={input} value={firstName} onChange={(e) => handleFirstNameChange(e)} />
      <br />
      <button onClick={() => input.current.focus()}>Focus</button>
    </div>
  );
}

// useState to update and manage the rerender of the component
// useReducer is same as but it as concrete way to handle complex state logic over here
export default App;
