import React from 'react';
import './App.css';
import Header from './Components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  

} from "react-router-dom";
import Breakfast from './Components/Breakfast/Breakfast';
import Launch from './Components/Launch/Launch';
import Dinner from './Components/Dinner/Dinner';
import Detail from './Components/Detail/Detail';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';



function App() {
  return (
    <div>




      <Router>
        <Header></Header>
      
        <Switch>

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
          </Route>\
            <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
