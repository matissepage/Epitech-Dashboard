import React, { useState } from 'react'
import FormSignUp from '../../Pages/SignUp/FormSignUp'
import FormSuccess from '../../Pages/FormSuccess/FormSuccess'
import spaceship from '../../../assets/Form/spaceship.svg';
import styled from 'styled-components'
import * as Styled from './styled'


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
      setIsSubmitted(true)
  }
  return (
      <>
      <Styled.FormContainer>
        <Styled.CloseButton/>
        <Styled.FormContentLeft>
          <Styled.FormImg src={spaceship} alt='spaceship' />
        </Styled.FormContentLeft>
        {!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)}
      </Styled.FormContainer>
      </>
  )
}

export default Form
