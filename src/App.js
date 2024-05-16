import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [resourceType, setResourceType] = useState(() => 'posts')

  // if we put as a dependices, once the changed the side effects will triggerd
  useEffect(() => {
    console.log('changed', resourceType)
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [resourceType])
  // But if you want do only mount time we need to use 
  // useEffect(() => {
  //   console.log('mount', resourceType)
  // }, [])
  return (
    <div>
      <div>
        <button onClick={() => setResourceType('posts')}>
          Posts
        </button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        <button onClick={() => setResourceType('users')}>Users</button>
      </div>
      <h3>
        {resourceType}
      </h3>
    </div>
  );
}

export default App;
