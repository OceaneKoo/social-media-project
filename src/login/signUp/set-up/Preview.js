/** @format */
import {
	Container,
	SignUpButton,
	Button,
} from "../../to-reuse/custom-component";
import React, { useEffect } from "react";
import classes from "./AddProfile.module.css";
import useModal from "../../hook/modal";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
export default function Preview({ imgSrc }) {
	const navigate = useNavigate();
	const {
		isModalOpen,
		openModal: openModalHandler,
		closeModal: closeModalHandler,
	} = useModal();

	const clickHandler = () => {
		console.log("clicked");
	};

	// const imgUrl = URL.createObjectURL(imgSrc);
	const imageType =
		typeof imgSrc === "object" ? URL.createObjectURL(imgSrc) : imgSrc;
	console.log(imageType);
	useEffect(() => {
		const pic = { profilePic: imageType };
		const existingInfo = JSON.parse(localStorage.getItem("user-info"));
		const newInfo = { ...existingInfo, ...pic };
		localStorage.setItem("user-info", JSON.stringify(newInfo));
	}, [imageType]);
	const setProfile = () => {
		navigate("/home");
	};
	return (
		<div>
			<Container>
				<div className={classes.wrapper}>
					<h1>Profile picture added</h1>
					<p>
						This will be your first post.You can always edit or delete it later
					</p>
					<img
						src={imageType}
						className={classes.icon}
					/>
					<Button
						onClick={setProfile}
						text="Done"
					/>
					<SignUpButton
						onClick={openModalHandler}
						text="Change profile picture"
					/>
				</div>
				{isModalOpen && (
					<Modal
						title="Change picture"
						onClose={closeModalHandler}
					/>
				)}
			</Container>
		</div>
	);
}
