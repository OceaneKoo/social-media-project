/** @format */
import defaultProfile from "../../../assets/images/profilelogo.jpg";
import useModal from "../../hook/modal";
import React from "react";
import { Card, Box } from "@mui/material";
import classes from "./Modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
import Preview from "./Preview";
import Webcam from "react-webcam";
export default function Modal(props) {
	const [selectedImage, setSelectedImage] = useState(null);
	const [openCamera, setCamera] = useState(false);
	const inputRef = useRef(null);
	const clickHandler = () => {
		inputRef.current.click();
	};
	const imageChangeHandler = (event) => {
		const file = event.target.files[0];
		console.log(file);
		console.log(selectedImage);
		if (file) {
			setSelectedImage(file);
		}
	};

	const onDelete = () => {
		console.log("delete");
		setSelectedImage(defaultProfile);
	};
	const onCapture = () => {
		setCamera(true);
	};
	const displayClass = selectedImage ? classes.display : classes.modalContainer;
	return (
		<div className={classes.container}>
			{/* <div className={classes.modalContainer}> */}
			<div className={displayClass}>
				<button onClick={props.onClose}>
					<CloseIcon className={classes.crossIcon} />
				</button>
				<h2>{props.title}</h2>
				<Card sx={{ border: "1px solid #f0efeb" }}>
					<div
						// elevation={0}
						className={classes.box}
						onClick={clickHandler}>
						<label htmlFor="profile">Choose from Camera Roll</label>
						<input
							ref={inputRef}
							type="file"
							style={{ display: "none" }}
							onChange={imageChangeHandler}
							accept="image/*"
							name="profile"
						/>
					</div>
					<div
						// elevation={0}
						className={classes.box}
						// onClick={clickHandler}
					>
						<button onClick={onCapture}>Take photo</button>
						{/* Take photo */}
						{/* <label htmlFor="camera">Take photo</label>
						<input
							ref={inputRef}
							type="file"
							style={{ display: "none" }}
							onChange={imageChangeHandler}
							accept="image/*"
							name="camera"
						/> */}
					</div>
					{props.title === "Change picture" && (
						<div
							// elevation={0}
							className={classes.box}
							onClick={onDelete}>
							Remove profile picture
						</div>
					)}
				</Card>
			</div>
			{selectedImage && <Preview imgSrc={selectedImage} />}
			{openCamera && <Webcam />}
		</div>
	);
}
