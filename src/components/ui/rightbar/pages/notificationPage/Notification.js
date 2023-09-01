/** @format */
import { Card, CardHeader } from "@mui/material";
import NotiBox from "../messengerPage.js/BoxStyle";
import styles from "../Style.module.css";
import classes from "./Notification.module.css";
// import { useEffect, useRef } from "react";
export default function NotificationModal({ isOpen, onClose, modalRef }) {
	const cssClass = isOpen
		? `${styles.card} ${classes.container}`
		: styles.invisible;
	return (
		<div
			className={cssClass}
			ref={modalRef}
			onClick={onClose}>
			<Card>
				<CardHeader title="Notifications" />
				<NotiBox>
					<p>
						<span style={{ fontWeight: "bold", fontSize: "17px", margin: "0" }}>
							John
						</span>{" "}
						sent you a friend request
					</p>
					<p>20 hrs ago</p>
				</NotiBox>
			</Card>
		</div>
	);
}
