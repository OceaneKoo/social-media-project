/** @format */

import React from "react";
import classes from "./AddProfile.module.css";
import { SignUpButton, Button } from "../../to-reuse/custom-component";
import { Container } from "../../to-reuse/custom-component";
import defaultProfile from "../../../assets/images/profilelogo.jpg";
import Modal from "./Modal";
import { useState } from "react";
import useModal from "../../hook/modal";
export default function AddProfile() {
	const {
		isModalOpen: openModal,
		openModal: openModalHandler,
		closeModal: closeModalHandler,
	} = useModal();
	// const [openModal, setOpenModal] = useState(false);
	// const openModalHandler = () => {
	// 	setOpenModal(true);
	// };
	// const closeModalHandler = () => {
	// 	setOpenModal(false);
	// };
	return (
		<div>
			<Container>
				<div className={classes.wrapper}>
					<h1>Add profile picture</h1>
					<p>
						Add a profile picture so your friends know it's you.Everyone will be
						able to see your profile.
					</p>
					<img
						src={defaultProfile}
						className={classes.icon}
					/>
					<Button
						onClick={openModalHandler}
						text="Add Picture"
					/>
					<SignUpButton text="Skip" />
				</div>

				{openModal && (
					<Modal
						title="Add profile picture"
						onClose={closeModalHandler}
					/>
				)}
			</Container>
		</div>
	);
}
