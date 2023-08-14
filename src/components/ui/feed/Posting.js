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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import classes from './Posting.module.css';
import CardBottom from './CardBottom';
import profilePicture from '../../../assets/images/pic3.jpg';
export default function Posting(props) {
	return (
		<div>
			<Card className={classes.cardContainer}>
				<CardHeader
					title={props.name}
					subheader={props.date}
					avatar={
						<Avatar
							aria-label='post'
							alt=''
							src={props.profilePicture}></Avatar>
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
						sx={{ color: 'black' }}>
						{props.caption}
					</Typography>
					<CardMedia
						component={props.type}
						width='100%'
						height='500'
						src={props.srcFile}
						alt=''
						sx={{ backgroundColor: 'black' }}
					/>
					<CardBottom />
				</CardContent>
			</Card>
		</div>
	);
}
