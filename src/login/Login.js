/** @format */
import { useNavigate } from "react-router-dom";
import React from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { Button, SignUpButton } from "./to-reuse/custom-component";
import userinput from "./hook/user-input";
import ErrorElement from "./to-reuse/ErrorElement";
export default function Login(props) {
	const navigate = useNavigate();
	const isEmail = (value) => value.trim().includes("@");
	const isPassword = (value) => value.trim().length > 6;
	const {
		value: email,
		isValid: isEmailValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailIsTouched,
		reset: resetEmail,
	} = userinput(isEmail);
	const {
		value: password,
		isValid: isPasswordValid,
		hasError: passwordHasError,
		valueChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordIsTouched,
		reset: resetPassword,
	} = userinput(isPassword);
	let formIsValid = false;
	if (isEmailValid && isPasswordValid) formIsValid = true;

	const submitHandler = (event) => {
		console.log("fsdf");
		console.log(event);
		event.preventDefault();
		console.log(formIsValid);
		if (!formIsValid) return;
		console.log("submitted");
		resetEmail();
		resetPassword();
	};
	const emailClass = emailHasError ? "invalid" : "";
	const passwordClass = passwordHasError ? "invalid" : "";
	return (
		<div className={classes.container}>
			<form
				onSubmit={submitHandler}
				className={classes.login}>
				<input
					className={emailClass}
					type="text"
					name="email"
					placeholder="Email"
					value={email}
					onChange={emailChangeHandler}
					onBlur={emailIsTouched}
				/>
				{emailHasError && <ErrorElement text="Email is not valid" />}
				<input
					className={passwordClass}
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={passwordChangeHandler}
					onBlur={passwordIsTouched}
				/>
				{passwordHasError && (
					<ErrorElement text="Password must be at least 6 characters" />
				)}

				<Button
					disabled={formIsValid ? true : false}
					text="Log in"
					onClick={() => console.log("clicked")}
				/>

				<SignUpButton
					disabled={false}
					text="Create new account"
					onClick={() => {
						console.log("abc");
						navigate("name");
					}}
				/>

				<Link className={classes.password}>Forgot password?</Link>
			</form>
		</div>
	);
}
