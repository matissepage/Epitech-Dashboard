import React from 'react'
import phone from './../../../assets/Form/phone.svg';
import * as Styled from '../../Components/Form/styled'

export const FormSuccess = () => {
  return (
    <Styled.FormContentRight>
      <Styled.FormSucces>
        We have received your request !
      </Styled.FormSucces>
      <Styled.FormImg2 src={phone} alt="success"/>
    </Styled.FormContentRight>
  )
}