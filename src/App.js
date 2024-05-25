import './App.css';
import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import useLoggerValue from './useLoggerValue';

function App() {
  // Define state variables for first name and last name
  const [firstName, setFirstName] = useLocalStorage('firstName', '');

  useLoggerValue(firstName);
  // Event handler for changing the first name
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };


  // useDebbugValue works only inside the custom hooks

  // JSX for the component
  return (
    <div>
      <form>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
        </div>
      </form>
      <h2>Current State:</h2>
      <p>First Name: {firstName}</p>
    </div>
  );
}

// useState to update and manage the rerender of the component
// useReducer is same as but it as concrete way to handle complex state logic over here
export default App;
