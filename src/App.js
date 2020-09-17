import React from 'react';
import './App.css';
import Login from "./Components/Login";
import DashBoard from "./Components/DashBoard";
import SignUp from "./Components/SignUp";
import ForgetPassword from "./Components/ForgetPassword";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ResetPassword from './Components/ResetPassword';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/DashBoard" component={DashBoard}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/ForgetPassword" component={ForgetPassword}/>
        <Route exact path="/ResetPassword" component={ResetPassword}/>
      </Switch>
    </BrowserRouter>
      
     
  );
}

export default App;

