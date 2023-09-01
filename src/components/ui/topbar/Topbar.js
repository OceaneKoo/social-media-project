/** @format */
import styles from "./Topbar.module.css";
import React from "react";
import { Search } from "@mui/icons-material";
import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import profilePic from "../../../assets/images/pic3.jpg";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import FriendModal from "../rightbar/pages/friendPage/Friend";
import useModal from "../../../login/hook/modal";
import MessageModal from "../rightbar/pages/messengerPage.js/Messenger";
import NotificationModal from "../rightbar/pages/notificationPage/Notification";
// const profilePic = JSON.parse(localStorage.getItem("user-info")).profilePicture;
// console.log(profilePic);
const Topbar = (props) => {
	const [activeItem, setActiveItem] = useState(null);
	const {
		isModalOpen: openModal,
		openModal: openModalHandler,
		closeModal: closeModalHandler,
		clickFromOutside,
		modalRef,
	} = useModal();
	console.log("from top bar");
	const clickHandler = (item) => {
		setActiveItem(item);
		openModalHandler();
	};

	return (
		<div>
			<Grid
				container
				className={styles.topbar}>
				<Grid
					item
					xs={3}>
					<div className={styles.search}>
						<Search className={styles.searchIcon} />
						<input
							className={styles.searchInput}
							placeholder="Search"
						/>
					</div>
				</Grid>
				<Grid
					item
					xs={6}>
					<div className={styles.items}>
						<div className={styles.iconItem}>
							<NavLink to="">
								<HomeIcon />
							</NavLink>
						</div>

						<div className={styles.iconItem}>
							<NavLink to="">
								<PlayCircleIcon />
							</NavLink>
						</div>
						<div className={styles.iconItem}>
							<NavLink to="game">
								<SportsEsportsIcon />
							</NavLink>
						</div>
					</div>
				</Grid>
				<Grid
					item
					xs={3}>
					<div className={styles.items}>
						<div
							onClick={() => {
								clickHandler("request");
							}}
							className={styles.iconItem}>
							<PeopleIcon />
							<span className={styles.badge}>1</span>
						</div>
						<div
							className={styles.iconItem}
							onClick={() => {
								clickHandler("notification");
							}}>
							<NotificationsIcon />
							<span className={styles.badge}>1</span>
						</div>
						<div
							className={styles.iconItem}
							onClick={() => {
								clickHandler("messenger");
							}}>
							<EmailIcon />
							<span className={styles.badge}>1</span>
						</div>
						<Link to="/home/profilePage">
							{/* <img
								className={styles.img}
								src={profilePic}
								alt=""/> */}
							<Image />
						</Link>
					</div>
				</Grid>
			</Grid>
			{openModal && activeItem === "request" && (
				<FriendModal
					// onClose={clickFromOutside}
					isOpen={openModal}
					modalRef={modalRef}
				/>
			)}
			{openModal && activeItem === "messenger" && (
				<MessageModal
					onClose={clickFromOutside}
					isOpen={openModal}
					modalRef={modalRef}
				/>
			)}
			{openModal && activeItem === "notification" && (
				<NotificationModal
					onClose={clickFromOutside}
					isOpen={openModal}
					modalRef={modalRef}
				/>
			)}
		</div>
	);
};
export default Topbar;
export function Image(props) {
	console.log(props.imgFile);
	return (
		<img
			className={styles.img}
			src={profilePic}
			alt=""
		/>
	);
}
