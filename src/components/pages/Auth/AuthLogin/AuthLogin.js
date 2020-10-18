import React from 'react'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

const AuthLogin = () => {
  return (
    <form className="auth-form" noValidate autoComplete="off">
      <StyledButton>Customized</StyledButton>
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" variant="outlined" />
    </form>
  )
}

export default AuthLogin