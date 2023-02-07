import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import store from "./store/store"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFormPage from './components/LoginFormsPage/LoginFormPage';
// import NavBar from './components/Navigation/NavBar';
// import SplashPage from './components/SplashPage/SplashPage.js';

// let home = SplashPage;

const App = () => (
	<Router>
		<>
      <h1> Form should be below</h1>
      <Switch>
	  		<Route
 			 path='/login'
  			component={LoginFormPage}
			/>
      </Switch>
		</>
	</Router>
);



export default App;
