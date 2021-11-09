import { Switch, Route } from "react-router-dom"
import React from 'react';
import './App.css';
import Home from "./Component/Home/Home";



function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
    
    </Switch>
     
   
    </>
  );
}

export default App;
