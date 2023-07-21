/** @format */
import classes from './Post.module.css';
import React from 'react';
import { Grid } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
export default function Post() {
	return (
		<div>
			<div className={classes.postContainer}>
				<img
					className={classes.img}
					src='https://i.pinimg.com/564x/5a/10/5d/5a105d7900c685466e5ffa860509e471.jpg'
				/>
				<input
					className={classes.inputText}
					placeholder="What's on your mind? "
				/>

				<PhotoIcon className={classes.icon} />
			</div>
		</div>
	);
}
