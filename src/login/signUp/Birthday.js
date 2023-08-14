/** @format */
import { useState, useRef } from 'react';
import React from 'react';
import { Container } from '../to-reuse/custom-component';
import classes from './Birthday.module.css';
import { LogInButton } from '../to-reuse/custom-component';
import Form from '../to-reuse/Form';
export default function Birthday() {
	const inputRef = useRef(null);
	const [age, setAge] = useState(0);
	const [isValid, setIsValid] = useState(true);
	const birthDateHandler = () => {
		const birthDate = new Date(inputRef.current.value);
		const currentDate = new Date();
		const year = currentDate.getFullYear() - birthDate.getFullYear();
		if (year <= 0) {
			setIsValid(false);
		}
		setAge(year);
	};
	return (
		<Container>
			<Form
				header="What's your birthday?"
				subheader='Choose your data of birth.You can always make this private later.'>
				{/* <form style={{ width: '430px' }}>
				<h1>What's your birthday?</h1>
				<p>
					Choose your data of birth.You can always make this private later.{' '}
				</p>
				<div className={classes.formContainer}> */}
				<label htmlFor='birthdate'>
					Birthday(
					{!isValid ? (
						<span>Your age is not valid!</span>
					) : (
						<span>{`${age} years old`}</span>
					)}
					)
				</label>
				<input
					ref={inputRef}
					className={classes.formInput}
					type='date'
					name='birthdate'
					onChange={birthDateHandler}
				/>
			</Form>
			{/* </div>
			</form> */}
			<LogInButton
				path='/name/birthday/email'
				text='Next'
			/>
		</Container>
	);
}
