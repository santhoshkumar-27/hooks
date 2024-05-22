import './App.css';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [show, setShow] = useState(() => false);
  const button = useRef();
  const popup = useRef();

  useEffect(() => {
    if (button.current === null || popup.current === null) return;
    const { bottom } = button.current.getBoundingClientRect();
    console.log('popup', popup);
  }, [show])


  // useEffect does asynchronous when react calculating dom node and painted into the dom and it runs
  // it runs after the dom renders
  return (
    <div>
      <button ref={button} onClick={() => setShow(prev => !prev)}>{show ? 'Hide' : 'Show'} Popun</button>
      <div>
        {
          show && (
            <div style={{ position: 'absolute' }} ref={popup}>
              this is pop
            </div>
          )
        }
      </div>
    </div>
  );
}

// useState to update and manage the rerender of the component
// useReducer is same as but it as concrete way to handle complex state logic over here
export default App;
