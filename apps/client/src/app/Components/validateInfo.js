export default function validateInfo(values) {
    let errors = {};

    // Username
    if (!values.username.trim()) {
        errors.username = "Username is required"
    }

    // Email
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email adress is invalid"
    }

    // Password
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.lenght < 5) {
        errors.password = "Password needs to be 5 characters or more."
    }
    // Confirm Password
    if (!values.password2) {
        errors.password2 = "Password is required"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password do not match"
    }
    
    return errors;
}