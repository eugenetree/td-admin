import React, { useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@store/auth';
import api from '@api';

const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is not valid'),
  password: yup.string().required('Password is required').min(6, 'At least 6 symbols').matches(/.*[0-9].*/, 'At least 1 number'),
});

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { register, handleSubmit, errors } = useForm({
    mode: 'onTouched', 
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'admin@test.com',
      password: '123123'
    }
  });

  const onSubmit = ({ email, password }) => {
    dispatch(login({email, password}))
      .then(() => {
        history.push('/main')
        toast.success('welcome home')
      })
      .catch(err => toast.error('Incorrect data'))
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className="auth-form__item"
        label="Email"
        variant="outlined"
        name="email"
        error={!!errors.email}
        helperText={errors.email?.message}
        inputRef={register}
      />

      <TextField
        className="auth-form__item"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        error={!!errors.password}
        helperText={errors.password?.message}
        inputRef={register}
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

export default Login;
