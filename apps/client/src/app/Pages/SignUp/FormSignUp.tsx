import React from 'react';
import { useForm } from '../../Components/Form/useForm';
import validate from '../../Components/Form/validateInfo';
import * as Styled from '../../Components/Form/styled';
import { IUserForm } from '../../Components/Form/useForm';

export const FormSignUp = ({submitForm}: {submitForm:any}) => {
  const {handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return (
    <Styled.FormContentRight>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.FormH1>Create your account ! 🌏 </Styled.FormH1>
        <Styled.FormInputs>
          <Styled.FormLabel htmlFor="username">Username : </Styled.FormLabel>
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
          <Styled.FormLabel htmlFor="password" className='form-label'>Password : </Styled.FormLabel>
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
          <Styled.FormLabel htmlFor="password2" className='form-label'>Confirm your password : </Styled.FormLabel>
            <Styled.FormInput
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
        </Styled.FormInputs>
        <Styled.FormInputBtn type="submit">Sign up</Styled.FormInputBtn>
        <Styled.FormInputLogin>Already have an account ? Login <a href='signin'>here</a></Styled.FormInputLogin>
      </Styled.Form>
    </Styled.FormContentRight>
  )
}