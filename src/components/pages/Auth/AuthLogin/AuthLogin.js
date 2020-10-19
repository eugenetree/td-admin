import React from 'react'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { useForm } from "react-hook-form";

const AuthLogin = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => console.log(values)
  
  return (
    <form 
      className="auth-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <TextField 
        onSubmit={onSubmit}
        className="auth-form__item" 
        value="123"
        label="Password" 
        variant="outlined" 
        name="email"
        inputRef={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
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
  )
}

export default AuthLogin