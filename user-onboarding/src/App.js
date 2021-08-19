import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import schema from './components/schema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  dateOfBirth: '',
  gender: '',
  role: '',
  term: false
};

const initialErrors = {
  name: '',
  email: '',
  passwoed: '',
  dateOfBirth: '',
  gender: '',
  role: '',
  term: ''
}
//////////////////////////////////////////////////////////////////////////////////////
function App() {
  const [ users, setUsers ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ errors, setErrors ] = useState(initialErrors);
  const [ disabled, setDisabled ] = useState(true);

  //get users data from axios
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data);

      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsers()
  }, []);

  //add newUser to Users data
  const postNewUsers = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([ ...users, res.data])
      })
      .catch(err => console.log(err))
      setFormValues(initialFormValues);
  }

  //get new Users when onchange and sumit
  //validate the values
  const validation = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }
  const inputChange = (name, value) => {
    //validate first
    validation(name, value);
    //set formvalues
    setFormValues({ ...formValues, [name]: value })
  }

  // enable submit button
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const updateUsers = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      passwoed: formValues.password.trim(),
      dateOfBirth: formValues.dateOfBirth.trim(),
      gender: formValues.gender.trim(),
      role: formValues.role.trim(),
      term: formValues.term
    }
    postNewUsers(newUser);
  }

  return (
    <div className="App">
      <Form
        formValues={formValues}
        change={inputChange}
        update={updateUsers}
        errors={errors}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
