import React from 'react';
import { useForm } from '../../Components/Form/useForm';
import validate from '../../Components/Form/validateInfo';
import star from './../../../assets/Form/star.svg';
import * as Styled from '../../Components/Form/styled';
import { IUserForm } from '../../Components/Form/useForm';
import { ButtonLogin } from '../../Components/ButtonLogin/ButtonLogin';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { BsSpotify } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { useEffect } from 'react-router/node_modules/@types/react';

export const FormSignIn = ({ submitForm }: { submitForm: any }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const redirectToSpotifySSo = async () => {
    const url = 'http://localhost:8080/auth/spotify';
    const newWindow = window.open(url, '_blank', 'width=500,height=600');
    if (newWindow) {
      const timer = setInterval(function () {
        if (newWindow.closed) {
          clearInterval(timer);
          console.log('closed');
          window.location.reload();
        }
      }, 1000);
    }
  };

  const redirectToGoogleSSo = async () => {
    const url = 'http://localhost:8080/auth/google';
    const newWindow = window.open(url, '_blank', 'width=500,height=600');
    if (newWindow) {
      const timer = setInterval(function () {
        if (newWindow.closed) {
          clearInterval(timer);
          console.log('closed');
          window.location.reload();
        }
      }, 1000);
    }
  };

  const redirectToGithubSSo = async () => {
    const url = 'http://localhost:8080/auth/github';
    const newWindow = window.open(url, '_blank', 'width=500,height=600');
    if (newWindow) {
      const timer = setInterval(function () {
        if (newWindow.closed) {
          clearInterval(timer);
          console.log('closed');
          window.location.reload();
        }
      }, 1000);
    }
  };

  return (
    <div>
      <Styled.FormContainer>
        <Styled.CloseButton />
        <Styled.FormContentLeft>
          <Styled.FormImg src={star} alt="spaceship" />
        </Styled.FormContentLeft>
        <Styled.FormContentRight>
          <Styled.Form onSubmit={handleSubmit}>
            <Styled.FormH1>Welcome Back ! </Styled.FormH1>
            <Styled.FormInputs>
              <Styled.FormLabel htmlFor="username">
                Username :{' '}
              </Styled.FormLabel>
              <Styled.FormInput
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </Styled.FormInputs>
            <Styled.FormInputs>
              <Styled.FormLabel htmlFor="email">Email : </Styled.FormLabel>
              <Styled.FormInput
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </Styled.FormInputs>
            <Styled.FormInputs>
              <Styled.FormLabel htmlFor="password">
                Password :{' '}
              </Styled.FormLabel>
              <Styled.FormInput
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </Styled.FormInputs>
            <Styled.FormInputs>
              <LoginOauthContainer>
                <ButtonLogin
                  icon={FcGoogle}
                  onClickCallback={redirectToGoogleSSo}
                />
                <ButtonLogin
                  icon={BsSpotify}
                  onClickCallback={redirectToSpotifySSo}
                />
                <ButtonLogin
                  icon={AiFillGithub}
                  onClickCallback={redirectToGithubSSo}
                />
              </LoginOauthContainer>
            </Styled.FormInputs>
            <Styled.FormInputBtn type="submit">Sign up</Styled.FormInputBtn>
            <Styled.FormInputLogin>
              Create an account ? <a href="/">here</a>
            </Styled.FormInputLogin>
          </Styled.Form>
        </Styled.FormContentRight>
      </Styled.FormContainer>
    </div>
  );
};

const LoginOauthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 5px;
`;
