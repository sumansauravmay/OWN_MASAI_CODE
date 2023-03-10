import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     <Button color="red">Hello</Button>
     <Button color="green">Hello</Button>
     <Button color="blue">Hello</Button>
     <br/>
     <br/>
     <br/>
     <Counter/>
    </div>
  );
}

export default App;
