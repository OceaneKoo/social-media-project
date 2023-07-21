/** @format */
import { users } from '../../../assets/profile-data/dummy-data';
import React from 'react';
import {
	Card,
	CardHeader,
	Avatar,
	IconButton,
	CardContent,
	Typography,
	CardMedia,
	Grid,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendIcon from '@mui/icons-material/Send';
import classes from './Posting.module.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
export default function Posting() {
	return (
		<div>
			{users.map((user) => (
				<Card className={classes.cardContainer}>
					<CardHeader
						title={user.username}
						subheader={user.date}
						avatar={
							<Avatar
								aria-label='post'
								alt={user.username}
								src={user.profilePicture}></Avatar>
						}
						action={
							<IconButton aria-label='setting'>
								<MoreHorizIcon />
							</IconButton>
						}
					/>
					<CardContent>
						<Typography
							variant='body2'
							color='text.secondary'>
							{user.caption}
						</Typography>
						<CardMedia
							component='img'
							height='500'
							image='https://i.pinimg.com/564x/57/09/73/5709737a79a821a703279d1f05968386.jpg'
							alt='Paella dish'
						/>
						<div className={classes.iconStyle}>
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
					</CardContent>
				</Card>
			))}
		</div>
	);
}
