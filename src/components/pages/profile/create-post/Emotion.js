/** @format */
import classes from "./TagModal.module.css";
import style from "./Emotion.module.css";
import styles from "./CreatePostModal.module.css";
import CreatePostModal, { CardModal } from "./CreatePostModal";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";
import { useState } from "react";
const items = [
	{ id: 1, feeling: "happy", emoji: "😄" },
	{ id: 2, feeling: "sad", emoji: "😢" },
	{ id: 3, feeling: "in love", emoji: "🥰" },
	{ id: 4, feeling: "tired", emoji: "😫" },
];
export default function Emotion(props) {
	const [filteredItems, setFilteredItems] = useState(items);
	const [searchInput, setSearchInput] = useState("");
	const [selectedEmotion, setselectedEmoji] = useState("");
	const [selectedFeeling, setSelectedFeeling] = useState("");

	const inputChangeHandler = (event) => {
		const newInput = event.target.value;
		setSearchInput(newInput);

		const filtered = items.filter((item) =>
			item.feeling.toLowerCase().startsWith(newInput.toLowerCase())
		);
		console.log(filtered);
		setFilteredItems(filtered);
	};
	const clickHandler = (item) => {
		console.log(item.feeling);
		console.log(item.emoji);
		setSelectedFeeling(item.feeling);
		setselectedEmoji(item.emoji);
		// console.log("hi");
		// console.log(selectedEmotion, "fsdf");
		// console.log(selectedFeeling, "trt");
		props.onClose();
	};
	return (
		<CardModal>
			<div className={`${styles.display} ${styles.top}`}>
				<p className={styles.header}>How are you feeling?</p>
				<CloseIcon
					className={styles.position}
					sx={{ fontSize: "30px" }}
					onClick={() => {
						console.log("hi");
						props.onClose();
					}}
				/>
			</div>
			<input
				style={{ width: "90%", margin: "10px 20px" }}
				className={classes.searchFri}
				type="text"
				placeholder="Search for Friends"
				onChange={inputChangeHandler}
				value={searchInput}
			/>
			<div style={{ margin: "10px 20px" }}>
				<Grid container>
					{filteredItems.length === 0 ? (
						<p>Nothing found</p>
					) : (
						filteredItems.map((item) => (
							<Grid
								key={item.id}
								className={style.grid}
								item
								xs={6}
								onClick={() => {
									clickHandler(item);
								}}>
								<EmojiBox
									emoji={item.emoji}
									feeling={item.feeling}
								/>
							</Grid>
						))
					)}
				</Grid>
			</div>
			{selectedEmotion && selectedFeeling && (
				<CreatePostModal
					selectedFeeling={selectedFeeling}
					selectedEmoji={selectedEmotion}
				/>
			)}
		</CardModal>
	);
}
export function EmojiBox(props) {
	return (
		<div className={style.box}>
			<span className={style.border}>{props.emoji}</span>
			<span>{props.feeling}</span>
		</div>
	);
}
