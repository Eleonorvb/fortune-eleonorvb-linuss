import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  render(){

    return(
     <div className="App">
        <h1>Hi i'm react app</h1>
<p>this is a paragraph</p>
<Person></Person>
      </div>
    );

// best practice ovanför, går att göra så här också, samam resultat
//return React.createElement('div',{className: 'App'},React.createElement('h1',null,'gaaaaah'))
  }
}

export default App;





