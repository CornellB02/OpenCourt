import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import LoginFormPage from "./components/LoginFormsPage";
import SignupFormPage from "./components/SignUpFormPage.js";
import ProfileForm from "./components/ProfileForm";
import Navigation from "./components/Navigation";

function App() {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };
  
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
	const handleLogin = () => {
	  setIsLoggedIn(true);
	  history.replace(from);
	};
  return (
    <>
	<Navigation />
      <Switch>
        <Route path="/login">
          <LoginFormPage onLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        {isLoggedIn ? (
          <Route path="/profile">
            <ProfileForm />
          </Route>
        ) : null}
      </Switch>
    </>
  );
}

export default App;