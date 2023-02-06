import React from 'react';
import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { loginUser } from '../../store/reducers/userReducer';
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input } from "../Forms";


function LoginFormPage({ onSuccess }) {
  const [email, onEmailChange] = useInput("");
  // const [password, onPasswordChange] = useInput("");
  // const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  // const [email, setEmail] = useState('');
  const [errors, onSubmit] = useSubmit({ 
    onSuccess,
    action: sessionActions.login({ email })
  });

  // if (sessionUser) return <Redirect to="/" />;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors([]);
  //   dispatch(loginUser({ email }))
  //     .catch((error) => {
  //       if (error?.response?.data?.errors) {
  //         setErrors(error.response.data.errors);
  //       } else {
  //         setErrors([error.message]);
  //       }
  //     });
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors([]);
  //   return dispatch(loginUser({ email }))
  //     .catch(async (res) => {
  //       let data;
  //       try {
  //         // .clone() essentially allows you to read the response body twice
  //         data = await res.json();
  //       } catch {
  //         data = await res.text(); // Will hit this case if the server is down
  //       }
  //       if (data?.errors) setErrors(data.errors);
  //       else if (data) setErrors([data]);
  //       else setErrors([res.statusText]);
  //     });
  //   }

    return (
      <form onSubmit={onSubmit} className="form">
        <FormErrors errors={errors}/>
        <Input 
          label="Email"
          value={email}
          onChange={onEmailChange}
          required
        />
        <button type="submit" className="button">Log In</button>
      </form>
    );
}

export default LoginFormPage;
