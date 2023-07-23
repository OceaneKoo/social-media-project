/** @format */

import React from 'react';
import Friend from './pages/friendPage/Friend';
import Notification from './pages/notificationPage/Notification';
import Messenger from './pages/messengerPage.js/Messenger';
import classes from './Rightbar.module.css';
export default function Rightbar() {
	return (
		<div className={classes.rightbarContainer}>
			{/* <Friend /> */}
			{/* <Notification/> */}
			<Messenger />
		</div>
	);
}
