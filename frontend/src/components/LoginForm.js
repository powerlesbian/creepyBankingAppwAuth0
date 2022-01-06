import React, { createContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter } from 'react-router-dom';
import { UserContext } from 'react';
import {Card } from 'react-bootstrap';
import chineseceramic from '../images/chineseceramic.jpg';

const ErrorChecker = (values) => {
  let errors = {};

  // Email Validation
  values.email = values.email.trim();
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Password Validation
  values.password = values.password.trim();
  if(!values.password) {
    errors.password = 'Required';
  } else if(values.password.search(/[^a-zA-Z0-9-_@#$]/g) !== -1) {
    errors.password = 'Only alphanumeric characters and _ - @ # $ are permitted';
  } else if(values.password.length < 8) {
    errors.password = "Your password should be at least 8 characters";
  }

  return errors;
}

const FormLayout = ({ isSubmitting, animationToggle }) => (

  <Card style={{ width: '33rem' }}>
      <Card.Img variant="top" src={chineseceramic} alt="empress vase"/>

<Card.Body>
<Card.Title> Log in here if you already have an account with us </Card.Title><pre></pre>
    <Form>
     <label>User name</label><pre/>
    <Field label="username" type="username" className={`${animationToggle} fadeIn-second`}
        name="username" placeholder="ChineseHacker" /><br/>
      <ErrorMessage name="name" component="div" />
      <br/>
      <label>Email</label><pre/>
      <Field type="email" className={`${animationToggle} fadeIn-second`}
        name="email" placeholder="crazygirl@fictious.io" /><br/>
      <ErrorMessage name="email" component="div" />
      <br/>
      <label>Password</label><pre/>
      <Field type="password" className={`${animationToggle} fadeIn-second`} 
        name="password" placeholder="Password" />
      <ErrorMessage name="password" component="div" />
      <br/><br/>
      <button type="submit" className={`button button-large ${animationToggle} fadeIn-third`} 
        disabled= {ErrorMessage()}>
          Login
      </button>
    </Form>
    </Card.Body>
    <div className="formFooter">
      <a className="underlineHover" href="#/createaccount/">Create a new account</a>
    </div>
    </Card>       
)

const LoginForm = (props) => {
  const animationToggle = props.inView ? 'fadeIn' : 'hidden';
  return (
  <Formik
    initialValues={{ email: '', password: '' }}
    validate={ErrorChecker}
    onSubmit={(values, { setSubmitting }) => {
      UserContext(values, setSubmitting, props.history);
    }}
    render={props => <FormLayout animationToggle={animationToggle} {...props} />}
  />
)};

export default LoginForm;
