import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function SignupFormPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email); // check if email variable has the expected value
    return dispatch(sessionActions.signup({ email }))
      .catch(async (res) => {
        console.log(res); // check if the response from the server is as expected
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        console.log(data); // check if the response data is as expected
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const demoLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(sessionActions.login({ email: 'Demo-lition@user.com' }))
}

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <label>   
        Email
        <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
      </label>
      <button type="submit">Sign Up</button>
      <br></br>
      <button className='login-form-button' onClick={e => demoLogin(e)}>Demo Login</button>
    </form>
  );
}

export default SignupFormPage;
