/** @format */

import { useState, useRef, useEffect } from "react";
import React from "react";

export default function UseModal() {
	const modalRef = useRef(null);
	const [isModalOpen, setModalOpen] = useState(false);
	const [activeItem, setActiveItem] = useState(null);

	const openModal = () => {
		setModalOpen(true);
		console.log("open modal");
	};
	const closeModal = () => {
		setModalOpen(false);
		console.log("close modal");
	};
	const clickFromOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			closeModal();
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", clickFromOutside);
		return () => {
			document.removeEventListener("mousedown", clickFromOutside);
		};
	}, []);
	const clickHandler = (item) => {
		setActiveItem(item);
		openModal();
	};
	return {
		isModalOpen,
		closeModal,
		openModal,
		clickFromOutside,
		modalRef,
		activeItem,
		clickHandler,
	};
}
// export function CustomHook(openModal) {
// 	const [activeItem, setActiveItem] = useState(null);
// 	const clickHandler = (item) => {
// 		setActiveItem(item);
// 		openModal();
// 	};
// 	return { activeItem, clickHandler };
// }
// export function UseModalPost() {
// 	const modalRef = useRef(null);
// 	const [isModalOpen, setModalOpen] = useState(false);
// 	const openModal = () => {
// 		setModalOpen(true);
// 		console.log("open modal");
// 	};
// 	const closeModal = () => {
// 		setModalOpen(false);
// 		console.log("close modal");
// 	};
// 	const clickFromOutside = (event) => {
// 		if (modalRef.current && !modalRef.current.contains(event.target)) {
// 			closeModal();
// 		}
// 	};
// 	useEffect(() => {
// 		document.addEventListener("mousedown", clickFromOutside);
// 		return () => {
// 			document.removeEventListener("mousedown", clickFromOutside);
// 		};
// 	}, []);
// 	return {
// 		isModalOpen,
// 		closeModal,
// 		openModal,
// 		clickFromOutside,
// 		modalRef,
// 	};
// }
