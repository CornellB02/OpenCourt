
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
// import store from "./store/store"
import { createUser, loginUser, logoutUser } from './store/usersReducer.js';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import csrfFetch, { restoreCSRF } from './store/csrf';

let initialState = {};
const store = configureStore(initialState);

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
}


let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

if (currentUser) {
  initialState = {
    users: {
      [currentUser.id]: currentUser
    }
  };
};


window.createUser = createUser
window.loginUser = loginUser
window.logoutUser = logoutUser

const InitializeApp = () => {
  ReactDOM.render(
      <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
      </React.StrictMode>,
      document.getElementById('root')
  );
}

ReactDOM.render(
  <React.StrictMode>
    <InitializeApp />
  </React.StrictMode>,
  document.getElementById('root')
);

restoreCSRF().then(InitializeApp)

if (sessionStorage.getItem("X-CSRF-Token") === null) {
  restoreCSRF().then(InitializeApp);
} else {
  InitializeApp();
}
