/** @format */
import { useEffect } from "react";
import React from "react";
import { Container } from "../to-reuse/custom-component";
import { Button } from "../to-reuse/custom-component";
import userinput from "../hook/user-input";
import { userinfo } from "./set-up-info";
import { useNavigate } from "react-router-dom";
import ErrorElement from "../to-reuse/ErrorElement";
export default function Email() {
	const navigate = useNavigate();
	const isEmail = (value) => value.trim().includes("@");
	const {
		value: email,
		isValid: emailIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		hasError: emailHasError,
		reset: resetEmail,
	} = userinput(isEmail);

	const errorClass = emailHasError ? "formContainer invalid" : "formContainer";
	const inputError = emailHasError ? "formInput invalidInput" : "formInput";
	useEffect(() => {
		const userEmail = { email };
		const existingInfo = JSON.parse(localStorage.getItem("user-info"));
		const newInfo = { ...existingInfo, ...userEmail };
		localStorage.setItem("user-info", JSON.stringify(newInfo));
	}, [email]);
	const submitHandler = (event) => {
		event.preventDefault();
		if (!emailIsValid) {
			return;
		}
		console.log("submitted");
		resetEmail();
	};
	const storeInfo = () => {
		userinfo({ email });
		navigate("/password");
	};

	return (
		<Container>
			<form
				style={{ width: "430px" }}
				onSubmit={submitHandler}>
				<h1>What's your email?</h1>
				<p>
					Enter the email where you can be contacted.No one will see this on
					your profile."
				</p>
				<div>
					<div className={errorClass}>
						<label
							htmlFor="email"
							className="formLabel">
							Email
						</label>
						<input
							id="email"
							className={inputError}
							name="email"
							type="text"
							value={email}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
						/>
						{emailHasError && <ErrorElement text="Your e-mail is not valid." />}
					</div>
				</div>

				<Button
					text="Next"
					disabled={emailIsValid ? false : true}
					onClick={storeInfo}
				/>
			</form>
		</Container>
	);
}
