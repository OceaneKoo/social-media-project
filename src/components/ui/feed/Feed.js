/** @format */

import React from 'react';
import Post from './Post';
import Posting from './Posting';
import classes from './Feed.module.css';
export default function Feed() {
	return (
		<div className={classes.postContainer}>
			<Post />
			<Posting />
		</div>
	);
}
