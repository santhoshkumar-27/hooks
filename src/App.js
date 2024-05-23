import './App.css';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [show, setShow] = useState(() => false);
  const button = useRef();
  const popup = useRef();

  useEffect(() => {
    if (button.current === null || popup.current === null) return;
    const { bottom } = button.current.getBoundingClientRect();
    console.log('popup', popup, bottom);
    console.log(popup.current.style.bottom)
    popup.current.style.top = bottom + 25 +'px'
  }, [show])


  // useEffect does asynchronous when react calculating dom node and painted into the dom, in mean time we run the useEffect this will run synchronous non blocking code
  // useLayoutEffect does synchronous between react calculate dom and when its paint it out screen after it run the these
  return (
    <div>
      <button ref={button} onClick={() => setShow(prev => !prev)}>{show ? 'Hide' : 'Show'} Popup</button>
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
