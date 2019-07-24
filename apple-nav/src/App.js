import React from 'react';
import './App.css';

import Nav from './components/Nav';

import appleData from './data';

function App(props) {
  return (
    <div className="App">
      <Nav {...props} appleData={appleData} />
    </div>
  );
}

export default App;
