import React from 'react';
import useForm from '../../Components/useForm';
import validate from '../../Components/validateInfo';
import '../../Components/Form.css';
import star from './../../../assets/Form/star.svg';
import * as Styled from '../../Components/Form/styled'

const FormSignIn = ({submitForm}: {submitForm:any}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);
    return (
        <Styled.FormContainer>
            <Styled.CloseButton/>
            <Styled.FormContentLeft>
                <img className='form-img' src={star} alt='spaceship' />
            </Styled.FormContentLeft>
            <Styled.FormContentRight>
                <Styled.Form onSubmit={handleSubmit}>
                    <h1>Welcome Back ! 😁 </h1>
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
                        <label htmlFor="email" className='form-label'>Email : </label>
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
                        <label htmlFor="password" className='form-label'>Password : </label>
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
                    <Styled.FormInputBtn type="submit">Sign up</Styled.FormInputBtn>
                    <Styled.FormInputLogin>Create an account ? <a href='/'>here</a></Styled.FormInputLogin>
                </Styled.Form>
            </Styled.FormContentRight>
        </Styled.FormContainer>
    )
}

export default FormSignIn
