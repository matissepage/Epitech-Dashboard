import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { localGetLogin, localLogin } from "../../services/auth/auth";

export interface IUserForm {
    username: string,
    email: string,
    password: string,
    password2: string
}

export const useForm = (callback: (submit: boolean) => void, validate: (values: IUserForm) => IUserForm) => {
    const userForm: IUserForm = {
        username: "",
        email: "",
        password: "",
        password2: "",
    };
    const [values, setValues] = useState (userForm);
    const [errors, setErrors] = useState<IUserForm>(userForm);
    const [isSubmitting, setSubmitting] = useState(false);
    const history = useHistory();

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setErrors(validate(values))
      setSubmitting(true);
      callback(true);
      localLogin(values.username, values.password, values.email)
        .then((res) => {
          console.log(res);
          history.push("/home");
        })
        .catch((err) => console.error(err));
    }

    const handleSubmitLogin = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setErrors(validate(values))
      setSubmitting(true);
      callback(true);
      localGetLogin(values.username, values.password)
        .then((res) => {
          console.log(res);
          history.push("/home");
        })
        .catch((err) => console.error(err));
    }

    useEffect (
        () => {
            if (errors != null && Object.keys(errors).length === 0 && isSubmitting) {
                callback(false);
            }
        },
        [errors]
    );

    return { handleChange, values, handleSubmit, errors, handleSubmitLogin };
}