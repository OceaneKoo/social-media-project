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
				header="What's your email?"
				subheader='Enter the email where you can be contacted.No one will see this on your profile.'>
				<label htmlFor='email'>Email</label>
				<input
					className={classes.input}
					name='email'
					type='text'
				/>
			</Form>
			<LogInButton
				path='/name/birthday/email/password'
				text='Next'
			/>
		</Container>
	);
}
