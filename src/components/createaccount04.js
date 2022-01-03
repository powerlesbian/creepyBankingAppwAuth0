//React Imports
import React, {useContext, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import {UserContext} from '../App';
import hennessy from '../images/hennessy.jpg';

//Account State Creation
const CreateAccount = () => {
	const [show, setShow] = useState(true);
	const [status, setStatus] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const context = useContext(UserContext);

	// Logic for Checking errors
	function validate(field, label) {
		if (label==='name' && !field){
			alert(`${label} cannot be blank`);
			setStatus('Error: ' + label);
			return false;
		}

		else if (!field || (label === 'password' && password.length < 8)) {
				setStatus('Error: ' + label);
				alert(`${label} must be at least 8 characters. Please amend and try again.`);
				return false;
			}
        else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) {
          
                setStatus('Error:' + label);
                alert('Invalid email address. Please amend and try again.');
                return false;
              }
            
			// setStatus('Error: ' + label);
			// alert(`No ${label} has been entered`);
			// setTimeout(() => setStatus(''), 3000);
			// return false;
		
		return true;
	}

	// Account creation logic
	function handleCreate() {
		console.log(name, email, password);
		if (!validate(name, 'name')) return;
		if (!validate(email, 'email')) return;
		if (!validate(password, 'password')) return;
	 context.users.push({ name, email, password, balance: 100 });
		setShow(false);
	}

	// Resets the form to its initial state
	function clearForm() {
		setName('');
		setEmail('');
		setPassword('');
		setShow(true);
	}

	// Bootstrap Form (Cards used)
	return (

			
				<Card style={{ width: '33rem' }}>
      <Card.Img variant="top" src={hennessy} alt="fancy bottle"/>
					<Card.Header
						className='border-dark'
						align='left'
						style={{ padding: '.75rem 1.25rem' }}
					>
						<h4>Create Account</h4>
					</Card.Header>
					<Card.Body
						className='border-dark'
						align='left'
						style={{ padding: '1.25rem' }}
					>
						{show ? (
							<>
								Name
								<br />
								<input
									type='input'
									className='form-control'
									id='name'
									placeholder="NewRussianHacker"
									value={name}
									onChange={(e) => setName(e.currentTarget.value)}
									required
									valid-feedback='valid'
									invalid-feedback='A name or username is required'
								/>
								<br />
								Email address
								<br />
								<input
									type='input'
									className='form-control'
									id='email'
									placeholder="blondegirl@fictious.io"
									value={email}
									onChange={(e) => setEmail(e.currentTarget.value)}
                                    required
									valid-feedback='Looks Good'
									invalid-feedback='Please enter a valid email'
								/>
								<br />
								Password
								<br />
								<input
									type='password'
									className='form-control'
									id='password'
									placeholder='Enter password'
									value={password}
									onChange={(e) => setPassword(e.currentTarget.value)}
									span
									help-block='Your password must be at least 8 characters'
								/>
								<br />
								<Button
									type='submit'
									variant="outline-secondary" size="sm"
									onClick={handleCreate}
									disabled={
										!name && !email && password.length < 8 ? true : false
									}
								>
									Create Account
								</Button>
							</>
						) : (
							<>
								<h2>Success!  We now can take all your money. </h2><br/><br/>

                                <h5>Let's do another👇🏾</h5>
								<Button
									type='submit'
									variant="outline-secondary" size="sm"
									onClick={clearForm}
								>
									Add another account
								</Button>
							</>
						)}
					</Card.Body>
                    <div className="formFooter">
					<a className="underlineHover" href="#/home/"> Go back to home page</a> <br/><br/>
    <a className="underlineHover" href="#/help/">I need help creating an account and want to speak to a human</a>
    </div>
    </Card>

	);
};

// React component Export
export default CreateAccount;