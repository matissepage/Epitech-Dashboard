import React from 'react';
import { useForm } from '../../Components/Form/useForm';
import validate from '../../Components/Form/validateInfo';
import {
  FormContentRight,
  Form,
  FormH1,
  FormInputs,
  FormInput,
  FormLabel,
  FormInputBtn,
  FormInputLogin,
} from '../../Components/Form/styled';
import { ButtonLogin } from '../../Components/ButtonLogin/ButtonLogin';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { BsSpotify } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { redirectToSSo } from '../../services/auth/auth';

interface Props {
  submitForm: any;
}

export const FormSignIn: React.FC<Props> = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const history = useHistory();
  const isValid = (name: string): boolean => {
    if (localStorage.getItem(name)) {
      console.log('true');
      return true;
    }
    console.log(localStorage.getItem(name));
    return false;
  }

  return (
    <FormContentRight>
      <Form onSubmit={handleSubmit}>
        <FormH1>Create your account ! </FormH1>
        <FormInputs>
          <FormLabel htmlFor="username">Username : </FormLabel>
            <FormInput
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor="password" className='form-label'>Password : </FormLabel>
            <FormInput
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
        </FormInputs>
        <FormInputs>
          <LoginOauthContainer>
            <ButtonLogin
              icon={FcGoogle}
              onClickCallback={() =>
                redirectToSSo(
                  history,
                  'http://localhost:8080/auth/google',
                  'access_token_google',
                  '/home',
                  isValid,
                )
              }
            />
            <ButtonLogin
              icon={BsSpotify}
              onClickCallback={() =>
                redirectToSSo(
                  history,
                  'http://localhost:8080/auth/spotify',
                  'access_token_spotify',
                  '/home',
                  isValid,
                )
              }
            />
            <ButtonLogin
              icon={AiFillGithub}
              onClickCallback={() =>
                redirectToSSo(
                  history,
                  'http://localhost:8080/auth/github',
                  'access_token_github',
                  '/home',
                  isValid,
                )
              }
            />
          </LoginOauthContainer>
        </FormInputs>
        <FormInputBtn type="submit">Sign up</FormInputBtn>
        <FormInputLogin>Already have an account ? Login <a href='signin'>here</a></FormInputLogin>
      </Form>
    </FormContentRight>
  );
};




const LoginOauthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 5px;
`;
