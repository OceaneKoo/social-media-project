/** @format */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Box, TextField } from "@mui/material";
import classes from "./NamePage.module.css";
import { Button, Container } from "../to-reuse/custom-component";
import userinput from "../hook/user-input";
import { userinfo } from "./set-up-info";
export default function NamePage() {
	const navigate = useNavigate();
	const nameIsNotEmpty = (value) => value.trim() !== "";

	const {
		value: firstName,
		isValid: isFirstNameValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameReset,
	} = userinput(nameIsNotEmpty);
	const {
		value: lastName,
		isValid: isLastNameValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = userinput(nameIsNotEmpty);
	let formIsValid = false;
	if (isFirstNameValid && isLastNameValid) {
		formIsValid = true;
	}
	useEffect(() => {
		const userName = { name: `${firstName} ${lastName}` };
		localStorage.setItem("user-info", JSON.stringify(userName));
	}, [firstName, lastName]);
	const storeInfo = () => {
		navigate("/birthday");
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log("submitted");
		firstNameReset();
		lastNameReset();
	};
	return (
		<div>
			<Container id="name">
				<form
					onSubmit={submitHandler}
					style={{
						padding: "10px",
						height: "300px",
						width: "500px",
					}}>
					<h1>What's your name?</h1>
					<p>Enter the name you use in real life</p>
					<div className={classes.boxContainer}>
						<Box sx={{ marginRight: "10px" }}>
							<TextField
								error={firstNameHasError ? true : false}
								helperText={
									firstNameHasError ? "first name can't be empty" : ""
								}
								className={classes.box}
								id="firstname"
								label="First name"
								name="firstname"
								inputProps={{ "aria-label": "first name" }}
								value={firstName}
								onChange={firstNameChangeHandler}
								onBlur={firstNameBlurHandler}
							/>
						</Box>
						<Box sx={{ marginRight: "10px" }}>
							<TextField
								error={lastNameHasError ? true : false}
								helperText={lastNameHasError ? "last name can't be empty" : ""}
								id="lastname"
								className={classes.box}
								label="Last name"
								name="lastname"
								inputProps={{ "aria-label": "last name" }}
								value={lastName}
								onChange={lastNameChangeHandler}
								onBlur={lastNameBlurHandler}
							/>
						</Box>
					</div>

					<Button
						text="Next"
						disabled={!formIsValid ? true : false}
						onClick={storeInfo}
					/>
				</form>
			</Container>
		</div>
	);
}
