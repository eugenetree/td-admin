import React, { useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { Typography } from "@material-ui/core";

const AuthLogin = () => {
  const { register, handleSubmit, errors } = useForm({mode: 'onChange', criteriaMode: 'all'});
  const onSubmit = (data) => console.log('success')
  const onError = (data) => console.log('error')

  useEffect(() => {
    setInterval(() => {
      console.log(errors)
    }, 1000);
  }, [])

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit, onError)}>
      <TextField
        className="auth-form__item"
        label="Password"
        variant="outlined"
        name="email"
        error={!!errors.email?.message}
        helperText={errors.email?.message}
        inputRef={register({
          // required: "Required",
          // minLength: val => val?.length > 10 || 'must be more than 10 char long',
          // pattern: {
            // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            // message: "invalid email address",
          // },
          validate: {
            test1: val => val == 'test1' || 'val != test1',
            test2: val => val == 'test2' || 'val != test2'
          }
        })}
      />

      <TextField
        className="auth-form__item"
        label="Password"
        variant="outlined"
      />

      <Button 
        size="large" 
        variant="outlined" 
        color="primary" 
        type="submit"
      >
        login
      </Button>
    </form>
  );
};

export default AuthLogin;
