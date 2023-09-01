/** @format */
import CancelIcon from "@mui/icons-material/Cancel";
import React, { useState, useRef } from "react";
import classes from "./CreatePostModal.module.css";
import { Card } from "@mui/material";
import { Image } from "../../../ui/topbar/Topbar";
import { userInfo } from "../../../ui/feed/user-info";
import photo from "../../../../assets/images/photo1.jpg";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import useModal from "../../../../login/hook/modal";
import { CustomHook as useCustomHook } from "../../../../login/hook/modal";
import TagModal from "./TagModal";
import Emotion from "./Emotion";
function CreatePostModal(props) {
	const {
		isModalOpen,
		closeModal: closeContent,
		openModal: openContent,
		activeItem,
		clickHandler: onClickHandler,
	} = useModal();

	const modalRef = useRef(null);
	const [selectedFile, setSelectedFile] = useState("");

	const clickHandler = () => {
		modalRef.current.click();
	};

	const imageChangeHandler = (e) => {
		const file = e.target.files[0];
		// console.log(file);
		setSelectedFile(file);
	};
	console.log(props.selectedEmoji, "helo");
	// console.log("activeitem", activeItem);
	// const modalClass =
	// 	props.isOpen && activeItem ? classes.backdrop : classes.invisible;
	const boxClass = isModalOpen ? classes.box : classes.invisible;
	return (
		<div className={classes.backdrop}>
			<Card
				ref={props.modalref}
				className={classes.centerCard}
				onClick={props.clickOutside}>
				<div className={`${classes.display} ${classes.top}`}>
					<p className={classes.header}>Create Post</p>
					{/* <CloseIcon
						className={classes.position}
						sx={{ fontSize: "30px" }}
						onClick={() => {
							console.log("hi");
							props.onClose();
						}}
					/> */}
				</div>
				<div className={classes.profile}>
					<Image />
					<p style={{ fontWeight: "bold", margin: "5px" }}>
						{`${userInfo.username} ${props.selectedEmoji || ""}`}
					</p>
				</div>
				<input
					className={classes.input}
					type="text"
					placeholder="What's on your mind?"
				/>
				<div className={boxClass}>
					<CancelIcon
						className={classes.icon}
						onClick={closeContent}
					/>
					{activeItem === "album" && (
						<div
							className={`${classes.display} ${classes.content}`}
							onClick={clickHandler}>
							<input
								ref={modalRef}
								type="file"
								accept="image/*, video/*"
								onChange={imageChangeHandler}
								style={{ display: "none" }}
							/>
							<PhotoAlbumIcon sx={{ fontSize: "50px", color: "gray" }} />
							<h3 style={{ margin: "0" }}>Add photos/videos</h3>
						</div>
					)}
				</div>
				<div className={classes.bottom}>
					<p>Add to your post</p>
					<div>
						<PhotoLibraryIcon
							className={classes.postItems}
							sx={{
								color: "green",
							}}
							onClick={() => {
								onClickHandler("album");
								// openContent();
							}}
						/>
						<AccountBoxIcon
							className={classes.postItems}
							sx={{ color: "blue" }}
							onClick={() => {
								onClickHandler("tag");
							}}
						/>
						<SentimentSatisfiedIcon
							className={classes.postItems}
							sx={{ color: "orange" }}
							onClick={() => {
								onClickHandler("emotion");
							}}
						/>
					</div>
				</div>

				<button className={classes.button}>Post</button>
			</Card>
			{activeItem === "tag" && isModalOpen && (
				<TagModal onClose={closeContent} />
			)}
			{activeItem === "emotion" && isModalOpen && (
				<Emotion onClose={closeContent} />
			)}
		</div>
	);
}

export default CreatePostModal;

export function CardModal(props) {
	return (
		<div className={classes.backdrop}>
			<Card
				ref={props.modalref}
				className={classes.centerCard}
				onClick={props.clickOutside}>
				{/* <div className={`${classes.display} ${classes.top}`}>
					{props.children}
				</div> */}
				{props.children}
			</Card>
		</div>
	);
}
