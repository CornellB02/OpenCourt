// import React from "react";
// import { Route, Switch, useHistory, useLocation } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormsPage/login";
// import SignupFormPage from "./components/SignUpFormPage.js";
// import ProfileForm from "./components/ProfileForm";
// import Navigation from "./components/Navigation";


// function App() {
// 	let history = useHistory();
// 	let location = useLocation();
// 	let { from } = location.state || { from: { pathname: "/" } };
  
// 	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
// 	const handleLogin = () => {
// 	  setIsLoggedIn(true);
// 	  history.replace(from);
// 	};
//   return (
//     <>
// 	<Navigation />
//       <Switch>
//         <Route path="/login">
//           <LoginFormPage onLogin={handleLogin} />
//         </Route>
//         <Route path="/signup">
//           <SignupFormPage />
//         </Route>
//         {isLoggedIn ? (
//           <Route path="/profile">
//             <ProfileForm />
//           </Route>
//         ) : null}
//       </Switch>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignUpFormPage.js";
// import Navigation from "./components/Navigation";
// import { ModalProvider } from "./components/context/Modal.js";

// function App() {
//   return (
//     <>
//       <Navigation />
//         <Switch>
//           <Route path="/signup">
//             <ModalProvider />
//           </Route>
//         </Switch>
//     </>
//   );
// }

// export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormsPage/login";
import SignupFormPage from "./components/SignUpFormPage.js";
import Navigation from "./components/Navigation";
import { ModalProvider } from "./components/context/Modal.js";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/signup">
            <ModalProvider>
              <SignupFormPage />
            </ModalProvider>
          </Route>
          <Route path="/login">
            <ModalProvider>
              <LoginFormPage />
            </ModalProvider>
          </Route>
        </Switch>
    </>
  );
}

export default App;



