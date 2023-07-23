/** @format */

import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, Avatar } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 30,
	},
}));
export default function Messages() {
	return (
		<div>
			<Card elevation={0}>
				<CardHeader
					title='John'
					subheader='You sent a photo.26m'
					avatar={
						<StyledBadge
							color='success'
							overlap='circle'
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							variant='dot'>
							<Avatar
								aria-label='friend request'
								alt=''
								src='https://i.pinimg.com/564x/5a/10/5d/5a105d7900c685466e5ffa860509e471.jpg'></Avatar>
						</StyledBadge>
					}
				/>
			</Card>
		</div>
	);
}
