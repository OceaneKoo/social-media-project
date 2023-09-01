/** @format */
import { Card } from "@mui/material";
import React from "react";
import styles from "./CreatePostModal.module.css";
import classes from "./TagModal.module.css";
import { CardModal } from "./CreatePostModal";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
function TagModal(props) {
	return (
		<CardModal>
			<div className={`${styles.display} ${styles.top}`}>
				<p className={styles.header}>Tag people</p>
				<CloseIcon
					className={styles.position}
					sx={{ fontSize: "30px" }}
					onClick={() => {
						console.log("hi");
						props.onClose();
					}}
				/>
			</div>
			{/* <div style={{ borderBottom: "2px solid #f0efeb" }}> */}
			<input
				className={classes.searchFri}
				type="text"
				placeholder="Search for Friends"
			/>
			<button className={classes.Button}>Done</button>
			{/* </div> */}
			<p className={classes.text}>No friends to show</p>
		</CardModal>
	);
}

export default TagModal;
