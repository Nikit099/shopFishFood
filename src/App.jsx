import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Main from './Main';

import './App.css';

import Test from './Components/Test';
import Context from './Components/Why' 
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  const [count, setCount] = React.useState(0)
 
 
  return (
    <Context.Provider value={{count, setCount}}>
    <div className="App" >
  
      <Routes>
        
      <Route path = "/" element ={<Main/>} />
      <Route path = "/test" element ={<Test/>} />
      
    </Routes>
    </div>
    </Context.Provider>
  );
}

export default App;
