import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import LoginFormPage from "./components/LoginFormsPage/login";
import SignupFormPage from "./components/SignUpFormPage.js";
import Navigation from "./components/Navigation";
import { ModalProvider } from "./components/context/Modal.js";
import SplashPage from "./components/SplashPage/SplashPage";
import RestaurantsIndexPage from "./components/Restaurants/RestaurantsIndexPage";
import RestaurantShowPage from "./components/Restaurants/Restaurantshow";
import ReviewsBox from "./components/Reviews/reviewbox";
import Userprofile from "./components/UserPage";
import ReservationForm from "./components/Reservations/reservationform";
import ReservationConfirmation from "./components/Reservations/confirmation"; // Import the ReservationConfirmation component
import Footer from "./components/context/footer";

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/profile">
            <Userprofile />
          </Route>
          <Route path="/restaurant/:restaurantId/reservs" component={ReservationForm} />
          {/* <Route exact path="/restaurant-confirmation" component={ReservationConfirmation}> Reservation confirmation route */}
          {/* </Route> */}
          <Route path="/restaurants/:restaurantId" component={RestaurantShowPage} />
          <Route exact path="/restaurant/:restaurantId/review" component={ReviewsBox} />
          <Route exact path="/">
            <SplashPage />
            {/* <Link to="/reserv">Make a Reservation</Link> */}
          </Route>
          <Switch>
          <Route exact path="/" component={ReservationForm} />
          <Route
            path="/reservation-confirmation"
            component={ReservationConfirmation}
          />
        </Switch>
          <Route path="/restaurants">
            <RestaurantsIndexPage />
          </Route>
        </Switch>
      </>
        {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
