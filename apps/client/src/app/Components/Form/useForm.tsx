import { useState, useEffect } from "react";

export interface IUserForm {
    username: string,
    email: string,
    password: string,
    password2: string
}

const useForm = (callback: any, validate: any) => {
    let userForm: IUserForm = {
        username: "",
        email: "",
        password: "",
        password2: "",
    };
    const [values, setValues] = useState (userForm);
    const [errors, setErrors] = useState<IUserForm>(userForm);
    const [isSubmitting, setSubmitting] = useState(false);

    const handleChange = (e: any) => {
        console.log(e.target);
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(validate(values))
        setSubmitting(true);
        callback(true);
    }

    useEffect (
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;