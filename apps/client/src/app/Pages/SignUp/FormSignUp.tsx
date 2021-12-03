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

export const FormSignUp = ({submitForm}: {submitForm:any}) => {
  const {handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

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
          <FormLabel htmlFor="email">Email : </FormLabel>
            <FormInput
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
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
          <FormLabel htmlFor="password2" className='form-label'>Confirm your password : </FormLabel>
            <FormInput
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
        </FormInputs>
        <FormInputBtn type="submit">Sign up</FormInputBtn>
        <FormInputLogin>Already have an account ? Login <a href='signin'>here</a></FormInputLogin>
      </Form>
    </FormContentRight>
  )
}