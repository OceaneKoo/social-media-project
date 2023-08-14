/** @format */

import React from 'react';
import Posting from '../feed/Posting';
import classes from './VideoPage.module.css';
import { data } from '../../../assets/profile-data/profile-data';
export default function VideoPage() {
	return (
		<div>
			<h1 className={classes.textDesign}>New Videos for you</h1>
			<Posting
				srcFile={data[0].vd}
				type='video'
				caption='hurts me'
			/>
			{/* <Posting
				srcFile={tiktok1}
				type='video'
				caption='hurts me'
			/>
			<Posting
				srcFile={tiktok1}
				type='video'
				caption='hurts me'
			/>
			<Posting
				srcFile={tiktok1}
				type='video'
				caption='hurts me'
			/>
			<Posting
				srcFile={tiktok1}
				type='video'
				caption='hurts me'
			/> */}
		</div>
	);
}
