/** @format */

import React from 'react';
import { Search } from '@mui/icons-material';
import classes from './Messenger.module.css';
import Messages from './Messages';
export default function () {
	return (
		<div>
			<div className={classes.search}>
				<Search className={classes.searchIcon} />
				<input
					className={classes.searchInput}
					placeholder='Search messenger'
				/>
			</div>
			<Messages />
			<Messages /> <Messages />
		</div>
	);
}
