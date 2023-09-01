/** @format */

import React from "react";
import { Search } from "@mui/icons-material";
import classes from "./Messenger.module.css";
import MessageBox from "./BoxStyle";
import styles from "../../pages/Style.module.css";
import { Card, CardHeader } from "@mui/material";
export default function MessageModal({ isOpen, onClose, modalRef }) {
	const cssClass = isOpen
		? `${styles.card} ${classes.messageContainer}`
		: styles.invisible;
	return (
		<div
			className={cssClass}
			ref={modalRef}
			onClick={onClose}>
			<Card>
				<CardHeader title="Chat" />
				<div className={classes.search}>
					<Search className={classes.searchIcon} />
					<input
						className={classes.searchInput}
						placeholder="Search messenger"
					/>
				</div>
				<MessageBox>
					<p className={classes.name}>John</p>
					<p className={classes.noti}>You:you sent a photo.26m</p>
				</MessageBox>
			</Card>
		</div>
	);
}
