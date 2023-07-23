/** @format */

import React from 'react';
import Posting from '../feed/Posting';
import tiktok1 from '../../../assets/videos/tiktok1.MP4';
import classes from './VideoPage.module.css';
export default function VideoPage() {
	return (
		<div>
			<h1 className={classes.textDesign}>New Videos for you</h1>
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
		</div>
	);
}
