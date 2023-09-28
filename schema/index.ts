import * as yup from 'yup';

const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// sign in validation schema declared here
export const signInSchema = yup.object().shape({
    email: yup.string()
        .required('Email Required!')
        .test('validate', 'Invalid Email!', function (value) {
            if (!emailRegex.test(value)) {
                return false;
            }
            return true;
        }),
    password: yup.string()
        .min(5, 'Password Must Be 5 Characters Long!')
        .required('Password Required!'),
});

// sign up validation schema declared here
export const signUpSchema = yup.object().shape({
    userName: yup.string().required('User Name Required'),
    email: yup.string()
        .required('Email Required!')
        .test('validate', 'Invalid Email!', function (value) {
            if (!emailRegex.test(value)) {
                return false;
            }
            return true;
        }),
    password: yup.string()
        .min(5, 'Password Must Be 5 Characters Long!')
        .required('Password Required!'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords Mismatched!'),
});