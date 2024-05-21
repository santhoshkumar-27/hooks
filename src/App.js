import './App.css';
import React, { useReducer } from 'react';


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return { ...state }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // since we object we use state, if use primitive value use related identifier name like count, know we are use
  // state here
  // dispatch funtion dispatch the action to the reducer, reducer function takes two arguments current state, and actions
  // actions as two properties one is type and another one is value that needs to updated in the state and return new state
  // const [number, setNumber] = useState(() => 0);

  function increment() {
    // setNumber(prev => prev + 1);
    dispatch({ type: 'increment' })
  }

  function decrement() {
    // setNumber(prev => prev - 1);
    dispatch({ type: 'decrement' })
    // dispatch function sended a action to the reducer take care part of applications
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{state.count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// useState to update and manage the rerender of the component
// useReducer is same as but it as concrete way to handle complex state logic over here
export default App;
