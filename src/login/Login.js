/** @format */

import React from 'react';
import classes from './Login.module.css';
import { Link } from 'react-router-dom';
import { LogInButton, SignUpButton } from './to-reuse/custom-component';
export default function Login(props) {
	return (
		<div className={classes.container}>
			<form className={classes.login}>
				<input
					type='text'
					name='email/ph'
					placeholder='Mobile number or email'
				/>
				<input
					type='text'
					name='password'
					placeholder='Password'
				/>
				<LogInButton
					text='Log in'
					path='/'
				/>
				<SignUpButton
					text='Create new account'
					path='/name'
				/>
				{/* <Link className={classes.loginButton}>Log in</Link> */}
				{/* <Link
					className={classes.signupButton}
					to='/name'>
					Create new account
				</Link>
				<Link className={classes.password}>Forgot password?</Link> */}
			</form>
		</div>
	);
}
