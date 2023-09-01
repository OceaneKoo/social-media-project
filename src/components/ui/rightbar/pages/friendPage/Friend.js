/** @format */

import React, { useRef, useEffect } from "react";
import { Card, CardHeader, Avatar } from "@mui/material";
import classes from "./FriendModal.module.css";
import styles from "../../pages/Style.module.css";
const FriendModal = ({ isOpen, modalRef }) => {
	const cssClass = !isOpen
		? `${styles.invisible}`
		: `${styles.card} ${classes.container}`;
	return (
		<div
			className={cssClass}
			ref={modalRef}
			// onClick={onClose}
		>
			<Card>
				<CardHeader
					title="Johndsfsdfsdfsdfsdf sent you a friend request!"
					subheader="4 hours ago"
					avatar={
						<Avatar
							aria-label="friend request"
							alt=""
							src="https://i.pinimg.com/564x/5a/10/5d/5a105d7900c685466e5ffa860509e471.jpg"></Avatar>
					}
				/>

				<div className={classes.buttonContainer}>
					<button className={classes.Button}>Confirm</button>
					<button className={`${classes.Button} ${classes.deleteButton}`}>
						Delete
					</button>
				</div>

				<CardHeader
					title="John sent you a friend request!"
					subheader="4 hours ago"
					avatar={
						<Avatar
							aria-label="friend request"
							alt=""
							src="https://i.pinimg.com/564x/5a/10/5d/5a105d7900c685466e5ffa860509e471.jpg"></Avatar>
					}
				/>
				<div className={classes.buttonContainer}>
					<button className={classes.Button}>Confirm</button>
					<button className={`${classes.Button} ${classes.deleteButton}`}>
						Delete
					</button>
				</div>
			</Card>
		</div>
	);
};

export default FriendModal;
