import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { shape, func } from 'prop-types';

import Form from './Form';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: sans-serif;
`;

const Header = styled.h1`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Register = (props) => {
  const { history } = props;

  const submit = (data) => {
    const { login, password } = data;

    return axios
      .post(
        'http://localhost:8080/auth/register',
        {
          login,
          password,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => history.push(`/dashboard/${res.data.id}`));
  };

  return (
    <Root>
      <Header>Register page</Header>
      <Form submit={submit} />
    </Root>
  );
};

Register.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default Register;
