/** @format */

import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import { users as friends } from '../../../../../../assets/profile-data/dummy-data';
import classes from './AllFriends.module.css';
function AllFriends() {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: { md: '1fr 1fr' },
				gap: 1,
			}}>
			{friends.map((fri) => (
				<Paper elevation={0}>
					<div
						style={{
							borderRadius: '10px',

							display: 'flex',
							alignItems: 'center',
							border: '1px solid #f0efeb',
						}}>
						<img
							className={classes.image}
							src={fri.profilePicture}
						/>
						<div>
							<h3 style={{ margin: '5px' }}>{fri.username}</h3>
							<p>{fri.mutual}</p>
						</div>
					</div>
				</Paper>
			))}
		</Box>
	);
}

export default AllFriends;
