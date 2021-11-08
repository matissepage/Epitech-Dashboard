import React from 'react'
import useForm from '../../Components/useForm';
import validate from '../../Components/validateInfo';
import '../../Components/Form.css'
import star from './../../../assets/Form/star.svg';

const FormSignIn = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div className='form-container'>
            <span className='close-btn'>×</span>
            <div className='form-content-left'>
                <img className='form-img' src={star} alt='spaceship' />
            </div>
            <div className='form-content-right'>
                <form className='form' onSubmit={handleSubmit}>
                    <h1>Welcome Back ! 😁 </h1>
                    <div className='form-inputs'>
                        <label htmlFor="username" className='form-label'>Username : </label>
                            <input
                            id="username"
                            type="text"
                            name="username"
                            className="form-input"
                            placeholder="Enter your username"
                            value={values.username}
                            onChange={handleChange}
                            />
                            {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor="email" className='form-label'>Email : </label>
                            <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor="password" className='form-label'>Password : </label>
                            <input
                            id="password"
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                    </div>
                    <button className="form-input-btn" type="submit">Sign up</button>
                    <span className="form-input-login">Create an account ? <a href='/'>here</a></span>
                </form>
            </div>
        </div>
    )
}

export default FormSignIn
