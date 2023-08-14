/** @format */

import React from 'react';
import { Container } from '../to-reuse/custom-component';
import Form from '../to-reuse/Form';
import classes from './Email.module.css';
import { LogInButton } from '../to-reuse/custom-component';
export default function Email() {
	return (
		<Container>
			<Form
				header='Create a password'
				subheader="Create a password with at least 6 letters or numbers.It should be something others can't guess ">
				<label htmlFor='password'>Password</label>
				<input
					className={classes.input}
					name='password'
					type='password'
				/>
			</Form>
			<LogInButton
				path='/name/birthday/email/password/addProfile'
				text='Next'
			/>
		</Container>
	);
}
