/** @format */

import React from 'react';
import {
	Card,
	CardHeader,
	Typography,
	Avatar,
	CardContent,
	Button,
} from '@mui/material';
import classes from './Friend.module.css';

export default function () {
	return (
		<div>
			<div className={classes.friendContainer}>
				<p className={classes.start}>Friend Requests</p>
				<span className={classes.end}>See all</span>
			</div>
			<Card>
				<CardHeader
					title='John sent you a friend request!'
					subheader='4 hours ago'
					avatar={
						<Avatar
							aria-label='friend request'
							alt=''
							src='https://i.pinimg.com/564x/5a/10/5d/5a105d7900c685466e5ffa860509e471.jpg'></Avatar>
					}
				/>
				<CardContent>
					<div className={classes.buttonContainer}>
						<Button
							className={classes.confirmButton}
							sx={{ color: '#f2e9e4', backgroundColor: '#4a4e69' }}
							variant='contained'
							color='primary'
							disableElevation>
							Confirm
						</Button>
						<Button
							className={classes.deleteButton}
							variant='contained'
							sx={{ color: '#9a8c98', backgroundColor: '#f2e9e4' }}
							disableElevation>
							Delete
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
