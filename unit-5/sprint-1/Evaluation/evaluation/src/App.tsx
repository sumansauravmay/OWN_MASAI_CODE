import React from 'react';

import './App.css';
import TopicBoard from './components/TopicBoard';
import initialData from "./initialData.json";

function App() {
  return (
    <div className="App">
     <TopicBoard initialData={initialData}/>
    </div>
  );
}

export default App;


