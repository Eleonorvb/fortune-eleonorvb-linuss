import React from 'react';
import NavBar from './components/navbar';
import FortuneTeller from './components/fortuneTeller';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    
    <FortuneTeller/>
    
    </React.Fragment>
  );
}

export default App;
