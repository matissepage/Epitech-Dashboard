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
import { BsSpotify, BsDiscord } from 'react-icons/bs';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGitlab,
  AiFillYoutube,
} from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { redirectToSSo } from '../../services/auth/auth';
import { IconType } from 'react-icons/lib';

interface Props {
  submitForm: any;
}

interface LoginSSO {
  icon: IconType;
  url: string;
  name: string;
  path?: string;
}

const loginMap: LoginSSO[] = [
  {
    icon: FcGoogle,
    url: 'http://localhost:8080/auth/google',
    name: 'access_token_google',
    path: '/home',
  },
  {
    icon: BsSpotify,
    url: 'http://localhost:8080/auth/spotify',
    name: 'access_token_spotify',
    path: '/home',
  },
  {
    icon: AiFillGithub,
    url: 'http://localhost:8080/auth/github',
    name: 'access_token_github',
    path: '/home',
  },
  {
    icon: AiFillLinkedin,
    url: 'http://localhost:8080/auth/linkedin',
    name: 'access_token_linkedin',
    path: '/home',
  },
  {
    icon: AiFillGitlab,
    url: 'http://localhost:8080/auth/gitlab',
    name: 'access_token_gitlab',
    path: '/home',
  },
  {
    icon: AiFillYoutube,
    url: 'http://localhost:8080/auth/youtube',
    name: 'access_token_youtube',
    path: '/home',
  },
  {
    icon: BsDiscord,
    url: 'http://localhost:8080/auth/discord',
    name: 'access_token_discord',
    path: '/home',
  },
];

export const FormSignIn: React.FC<Props> = ({ submitForm }) => {
  const { handleChange, values, handleSubmitLogin, errors } = useForm(
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
  };

  return (
    <FormContentRight>
      <Form onSubmit={handleSubmitLogin}>
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
            {loginMap.map((item, index) => {
                  return (
                    <ButtonLogin
                      icon={item.icon}
                      onClickCallback={() =>
                        redirectToSSo(
                          history,
                          item.url,
                          item.name,
                          item.path,
                          isValid
                        )
                      }
                    />
                  );
            })}
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
