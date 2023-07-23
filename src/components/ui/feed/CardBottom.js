/** @format */

import React from 'react';
import { Grid, IconButton } from '@mui/material';
import classes from './CardBottom.module.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function CardBottom() {
	return (
		<div className={classes.icon}>
			<Grid
				container
				spacing={2}>
				<Grid
					item
					xs={4}
					container
					alignItems='center'>
					<IconButton aria-label='like'>
						<ThumbUpIcon />
					</IconButton>
					<span>Like</span>
				</Grid>
				<Grid
					item
					container
					alignItems='center'
					xs={4}>
					<IconButton aria-label='comment'>
						<ChatBubbleOutlineIcon />
					</IconButton>
					<span>Comment</span>
				</Grid>
				<Grid
					item
					xs={4}
					container
					alignItems='center'>
					<IconButton aria-label='share'>
						<SendIcon />
					</IconButton>
					<span>Share</span>
				</Grid>
			</Grid>
		</div>
	);
}
