/** @format */
import { Link } from 'react-router-dom';
import React from 'react';
import { Box, TextField } from '@mui/material';
import classes from './NamePage.module.css';
import { LogInButton, Container } from '../to-reuse/custom-component';
export default function NamePage() {
	return (
		// <div className={classes.container}>
		<Container>
			<form
				style={{
					padding: '10px',
					height: '300px',
					width: '500px',
				}}>
				<h1>What's your name?</h1>
				<p>Enter the name you use in real life</p>
				<div className={classes.boxContainer}>
					<Box sx={{ marginRight: '10px' }}>
						<TextField
							className={classes.box}
							label='First name'
						/>
					</Box>
					<Box sx={{ marginRight: '10px' }}>
						<TextField
							className={classes.box}
							label='Last name'
						/>
					</Box>
				</div>
				<LogInButton
					path='/name/birthday'
					text='Next'
				/>
			</form>
			{/* </div> */}
		</Container>
	);
}
