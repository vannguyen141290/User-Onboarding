import React from 'react';
import '../index.css';


export default function Form(props) {
    const {change, update, formValues, errors, disabled} = props;
    const onChange = e => {
        // console.log('name', e.target.name)
        // console.log('value', e.target.value)
        // console.log('checked', e.target.checked)
        const { value, type, name, checked } = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = e => {
        e.preventDefault();
        update();
    }

    return (
        <div className='form-container'>
            <h2>New User Registration</h2>
            <form className='form' onSubmit={onSubmit}>
                <label htmlFor='name' />Name (*)
                <input
                    name='name'
                    type='text'
                    value={formValues.name}
                    placeholder='name'
                    onChange={onChange}
                /><p className='error'>{errors.name}</p>
                <br/>
                <label htmlFor='email' />Email (*)
                <input
                    name='email'
                    type='email'
                    value={formValues.email}
                    placeholder='email'
                    onChange={onChange}
                /><p className='error'>{errors.email}</p>
                <br/>
                <label htmlFor='password' />Password (*)
                <input
                    name='password'
                    type='text'
                    value={formValues.pasword}
                    placeholder='password'
                    onChange={onChange}
                /><p className='error'>{errors.password}</p>
                <p id='pwRequirement'>password requires at least 8 characters, at most 250 characters, at least 1 lowercase letter, at least 1 uppercase letter, at least 1 number and at least 1 symbol.</p>
                <br/>
                <label htmlFor='dateOfBirth'/>Date of Birth
                <input
                    name='dateOfBirth'
                    type='text'
                    onChange={onChange}
                    value={formValues.dateOfBirth}
                    placeholder='mm/dd/yyyy'
                /><p className='error'>{errors.dateOfBirth}</p>
                <br/>
                <p className='error'>{errors.gender}</p>
                <label htmlFor=''/>Male
                <input
                    name='gender'
                    type='radio'
                    value='male'
                    checked={formValues.gender === 'male'}
                    onChange={onChange}
                />
                <label htmlFor=''/>Female
                <input
                    name='gender'
                    type='radio'
                    value='female'
                    checked={formValues.gender === 'female'}
                    onChange={onChange}
                />
                <br/>
                <label htmlFor='role' />Role
                <select
                    name='role'
                    value={formValues.role}
                    onChange={onChange}
                >
                    <option value=''>--Select one--</option>
                    <option value='tl'>Team Leader</option>
                    <option value='front'>Front End Engineer</option>
                    <option value='end'>Back End Engineed</option>
                    <option value='stack'>Full Stack Developer</option>
                </select><p className='error'>{errors.role}</p>
                <br/>
                <label htmlFor='term' /> (*) I accept the Terms and Conditions
                <input
                    name='term'
                    type='checkbox'
                    checked={formValues.term}
                    onChange={onChange}
                /><p className='error'>{errors.term}</p>
                <br/>
                <button disabled={disabled}>Submit</button>
                <p>(*: this field is required)</p>
            </form>
        </div>
    )
}