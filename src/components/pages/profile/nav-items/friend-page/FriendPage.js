/** @format */

import React from 'react';
import { Card, CardContent, Typography, CardHeader } from '@mui/material';
import classes from './FriendPage.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AllFriends from './nav-items/AllFriends';
export default function FriendPage() {
	return (
		<div className={classes.container}>
			<Card>
				<CardContent>
					<div className={classes.topbar}>
						<header>Friends</header>
						<div className={`${classes.barItems} ${classes.searchBar}`}>
							<SearchIcon />
							<input placeholder='Search ' />
						</div>
						<span className={classes.barItems}>Find requests</span>
						<span className={classes.barItems}>Find friends</span>
						<MoreVertIcon className={classes.barItems} />
					</div>
					<nav>
						<div className={classes.navBar}>
							<a href='#'>All friends</a>
							<a href='#'>Recently Added</a>
							<a href='#'>Birthday</a>
							<a href='#'>Work</a>
							<a href='#'>High School</a>
							<a href='#'>Current City</a>
							<a href='#'>Hometown</a>
							<a href='#'>Followers</a>
							<a href='#'>Following</a>
						</div>
					</nav>
					<AllFriends />                      
				</CardContent>
			</Card>
		</div>
	);
}
