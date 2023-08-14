/** @format */

import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classes from './AddProfile.module.css';
import Person2Icon from '@mui/icons-material/Person2';
import { SignUpButton, LogInButton } from '../../to-reuse/custom-component';
import { Container } from '../../to-reuse/custom-component';
import Form from '../../to-reuse/Form';
import defaultProfile from '../../../assets/images/profilelogo.jpg';
export default function AddProfile() {
	return (
		<Container>
			<div style={{ display: 'flex', flexDirection: 'column', width: '430px' }}>
				<h1>Add profile picture</h1>
				<p>
					Add a profile picture so your friends know it's you.Everyone will be
					able to see your profile.
				</p>
				<img
					src={defaultProfile}
					className={classes.icon}
				/>
				{/* <AccountCircleIcon className={classes.icon} /> */}
				<LogInButton text='Add picture' />
				<SignUpButton text='Skip' />
			</div>
		</Container>
	);
}
