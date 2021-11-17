import React, { useState } from 'react'
import { FormSuccess, FormSignUp, FormSignIn } from '../../Pages/index'
import spaceship from '../../../assets/Form/spaceship.svg';
import * as Styled from './styled'


type Props = {
  type: string,
}

export const FormCreate: React.FC<Props> = ({type}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(submit: boolean) {
      setIsSubmitted(submit)
  }
  return (
      <>
      <Styled.FormContainer>
        <Styled.CloseButton/>
        <Styled.FormContentLeft>
          <Styled.FormImg src={spaceship} alt='spaceship' />
        </Styled.FormContentLeft>
        {!isSubmitted ? 
          type === 'SignUp' ? <FormSignUp submitForm={submitForm} /> : <FormSignIn submitForm={submitForm} />
           : (<FormSuccess />)}
      </Styled.FormContainer>
      </>
  )
}
