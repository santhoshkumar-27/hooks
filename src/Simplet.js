import React, { useRef, useState } from 'react';
import CustomInput from './CustomInput';

export default function Simplet() {
      // Define state variables
  const [firstName, setFirstName] = useState('firstName', '');
  const input = useRef();
  // Event handler for changing the first name
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };



  // JSX for the component
  return (
    <div>
      <CustomInput ref={input} value={firstName} onChange={(e) => handleFirstNameChange(e)} />
      <br />
      <button onClick={() => input.current.alert()}>Focus</button>
      {/* trigger custom function from the parent */}
    </div>
  );
}