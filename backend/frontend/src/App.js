import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-DOM";
import LoginFormPage from './components/Sessions/index';

const App = () => (
  <div className='app-container'>
    <NavBar />
      {/* <h1>Form should be below</h1> */}
      <Switch>
      <Route exact path="/login" component={LoginFormPage} />
      {/* <Route exact path='/signup' component={SignupFormPage}/> */}
      <Route exact path='/' component={home} />
      </Switch>
  </div>
);

export default App;
