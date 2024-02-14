import ChildA from './ChildA'
import React from 'react';
function App() {
  const name = "geeeta sanap";
  return (
    <div className="App">
  
    <ChildA  name={name}/>
    </div>
  );
}

export default App;
