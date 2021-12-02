import React, { useState } from 'react'
import { FormSuccess, FormSignUp, FormSignIn } from '../../Pages/index'
import spaceship from '../../../assets/Form/spaceship.svg';
import {
  FormContainer,
  CloseButton,
  FormContentLeft,
  FormImg,
} from './styled'

type Props = {
  type: string,
}

export const FormCreate: React.FC<Props> = ({type}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(submit: boolean) {
      setIsSubmitted(submit)
  }
  return (
      <div>
        <FormContainer>
          <CloseButton/>
          <FormContentLeft>
            <FormImg src={spaceship} alt='spaceship' />
          </FormContentLeft>
          {!isSubmitted ? 
            type === 'SignUp' ? <FormSignUp submitForm={submitForm} /> : <FormSignIn submitForm={submitForm} />
            : (<FormSuccess />)}
        </FormContainer>
      </div>
  )
}
