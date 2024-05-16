import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [resourceType, setResourceType] = useState(() => 'posts')

  useEffect(() => {
    console.log('this', resourceType)
  }, [resourceType])

  return (
    <div>
      <div>
          <button onClick={() => setResourceType('posts')}>
            Posts
          </button>
          <button  onClick={() => setResourceType('comments')}>Comments</button>
          <button  onClick={() => setResourceType('users')}>Users</button>
      </div>
      <h3>
        {resourceType}
      </h3>
    </div>
  );
}

export default App;
