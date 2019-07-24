import React from 'react';
import './App.css';

import Nav from './components/Nav';

import appleData from './data';

function App() {
  return (
    <div className="App">
      <Nav appleData={appleData} />
    </div>
  );
}

export default App;
