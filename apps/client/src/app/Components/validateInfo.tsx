
import IUserForm from './useForm'

export default function validateInfo(values: { username: string; email: string; password: any; password2: any; }) {
  let errors = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  if (!values.username.trim()) {
      errors.username = "Username is required"
  }

  if (!values.email) {
      errors.email = "Email is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email adress is invalid"
  }

  if (!values.password) {
      errors.password = "Password is required"
  } else if (values.password.lenght < 5) {
      errors.password = "Password needs to be 5 characters or more."
  }

  if (!values.password2) {
      errors.password2 = "Password is required"
  } else if (values.password2 !== values.password) {
      errors.password2 = "Password do not match"
  }

  return errors;
}