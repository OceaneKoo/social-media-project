/** @format */

import React from 'react';
import Badge from '@mui/material/Badge';
import { Card, Avatar, CardHeader, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import classes from './Notification.module.css';
const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 30,
		padding: '0 4px',
	},
}));
export default function () {
	return (
		<div>
			<Card>
				<CardHeader
					title={
						<Typography
							variant='h1'
							component='h2'
							style={{ fontSize: '1rem' }}>
							<span style={{ fontWeight: 'bold' }}>John</span>liked your post.
						</Typography>
					}
					subheader='4 hours ago'
					avatar={
						<StyledBadge
							badgeContent={<ThumbUpIcon className={classes.likeIcon} />}
							color='info'>
							<Avatar
								aria-label='friend request'
								alt=''
								src='https://i.pinimg.com/564x/5a/10/5d/5a105d7900c685466e5ffa860509e471.jpg'></Avatar>{' '}
						</StyledBadge>
					}
				/>
			</Card>
		</div>
	);
}
