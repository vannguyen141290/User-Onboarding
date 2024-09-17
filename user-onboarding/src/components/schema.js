import '../index.css';
import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);


const today = new Date();

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .required('Email is required')
        .email('Must be a valid email. eg. xyz@example.comm')
        .trim(),
    password: yup
        .string()
        .required('Password is required')
        .password()

        ,
    dateOfBirth: yup
        .date()
        .max(today, 'It must be a past date'),
    gender: yup
        .string()
        .oneOf(['male', 'female'], 'gender is required'),
    role: yup
        .string()
        .oneOf(['tl', 'front', 'end', 'stack'], 'please choose a role'),
    term: yup
        .boolean()
        .oneOf([true], 'you can\'t proceed without cheacking agreement box'),
})

export default schema;