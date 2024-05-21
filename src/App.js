/* eslint-disable eqeqeq */
import './App.css';
import React, { useReducer, useState } from 'react';

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return state.map((li) => {
        if (li.id == action.payload.id) {
          return {...li, completed: !li.completed}
        }
        return li;
      })
    case ACTIONS.DELETE_TODO:
      return state.filter((li) => li.id != action.payload.id)
    default:
      return state;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name,
    completed: false,
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState(() => '');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } })
    setName('')
  }

  function toggle(list) {
    console.log('list', list)
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: list })

  }

  function deleteItem(list) {
    console.log('list', list)
    dispatch({ type: ACTIONS.DELETE_TODO, payload: list })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.currentTarget.value)} />
      </form>
      <div>
        <ul>
          {
            todo.map((lit) => <li style={{ color: lit.completed ? 'red' : 'black' }} key={lit.id}>

              <span>{lit.name}</span>
              <button onClick={() => toggle(lit)} >toggle</button>
              <button onClick={() => deleteItem(lit)}>delete</button>
            </li>)
          }
        </ul>
      </div>
    </div>
  );
}

// useState to update and manage the rerender of the component
// useReducer is same as but it as concrete way to handle complex state logic over here
export default App;
