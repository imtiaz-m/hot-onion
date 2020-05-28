import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Food from './Components/Food/Food';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breakfast from './Components/Breakfast/Breakfast';
import Launch from './Components/Launch/Launch';
import Dinner from './Components/Dinner/Dinner';
import Detail from './Components/Detail/Detail';



function App() {
  return (
    <div>
      <Header></Header>
     
       
      <Router>
        <Switch>
          <Route path="/home">
          
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/launch">
           <Launch></Launch>
            
            
            </Route>
            <Route path="/dinner">
              <Dinner></Dinner>
            </Route>
            <Route path="/detail/:productKey">
              <Detail></Detail>
            </Route>
          
        </Switch>
      </Router>
      
     
       </div>
  );
}

export default App;
