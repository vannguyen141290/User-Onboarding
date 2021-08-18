import * as yup from 'yup';
import '../index.css';

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
        .max(25, 'pw must be at most 25 characters')
        .matches(
            "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
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