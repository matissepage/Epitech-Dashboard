import React from 'react'
import star from './../../../assets/Form/spaceship.svg';

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">
                We have received your request ! 😁
            </div>
            <img src={phone} alt="success" className="form-img-2"/>
        </div>
    )
}

export default FormSuccess
