import { useState } from "react";
import { useDispatch } from "react-redux";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  return [value, onChange];
}

export function useSubmit({ createAction, action, validate, onSuccess }){
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  if (!action && createAction) {
    action = createAction();
  }
  

  const onSubmit = async (e) => {
    e.preventDefault();
  
    let errors;
    if (validate) {
      errors = validate();
    }
    if (errors) {
      setErrors(errors);
    } else {
      setErrors([]);
      return dispatch(action).then(
        onSuccess,
        async (res) => {
          let data;
          try {
            data = await res.clone().json();
          } catch {
            data = await res.text();
          }
          if (data.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        }
      );
    }
  };
  

  return [errors, onSubmit];
}