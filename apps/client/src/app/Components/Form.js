import React, { useState } from 'react'
import FormSignUp from '../Pages/SignUp/FormSignUp'
import FormSuccess from '../Pages/FormSuccess/FormSuccess'
import spaceship from '../../assets/Form/spaceship.svg';
import './Form.css'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
        <div className='form-container'>
            <span className='close-btn'>×</span>
            <div className='form-content-left'>
                    <img className='form-img' src={spaceship} alt='spaceship' />
            </div>
            {!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)}
        </div>
        </>
    )
}

export default Form
