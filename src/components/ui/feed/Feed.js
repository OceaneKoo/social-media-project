/** @format */

import React from 'react';
import Post from './Post';
import Posting from './Posting';
import classes from './Feed.module.css';
import Share from './Share';
import VideoPage from '../video/VideoPage';
import photo1 from '../../../assets/images/photo1.jpg';
export default function Feed(props) {
	return (
		<div className={classes.postContainer}>
			{/* <Post />
			<Posting srcFile={photo1} />   */}
			<VideoPage />
		</div>
	);
}
