import './App.css';
import React from 'react';
import { EmailFrom } from './EmailFrom'
function App() {

  // JSX for the component
  return (
    <div>
      <EmailFrom />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt corrupti vitae aliquam aperiam. Quis in laudantium sunt nihil perspiciatis labore asperiores. Error commodi, ut nulla odit aliquam eaque quos.
      </div>
      <EmailFrom />

    </div>
  );
}

// useState to update and manage the rerender of the component
export default App;
