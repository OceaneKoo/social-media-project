/** @format */
import { useEffect, useState } from "react";
import React from "react";
import { Container } from "../to-reuse/custom-component";
import { Button } from "../to-reuse/custom-component";
import userinput from "../hook/user-input";
import { userinfo } from "./set-up-info";
import { useNavigate } from "react-router-dom";
import ErrorElement from "../to-reuse/ErrorElement";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export default function Password() {
	const navigate = useNavigate();
	const [passVisual, setPassVisual] = useState(false);
	const isPassword = (value) => value.trim().length >= 6;
	const {
		value: password,
		isValid: passwordIsValid,
		valueChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
		hasError: passwordHasError,
		reset: resetPassword,
	} = userinput(isPassword);

	const errorClass = passwordHasError
		? "formContainer invalid"
		: "formContainer";
	const inputError = passwordHasError ? "formInput invalidInput" : "formInput";
	useEffect(() => {
		const userPass = { password };
		const existingInfo = JSON.parse(localStorage.getItem("user-info"));
		const newInfo = { ...existingInfo, ...userPass };
		localStorage.setItem("user-info", JSON.stringify(newInfo));
	}, [password]);
	const submitHandler = (event) => {
		event.preventDefault();
		if (!passwordIsValid) {
			return;
		}
		console.log("submitted");
		resetPassword();
	};
	const storeInfo = () => {
		userinfo({ password });
		navigate("/addProfile");
	};
	const seePassword = () => {
		setPassVisual((prev) => !prev);
	};
	return (
		<Container>
			<form
				style={{ width: "430px" }}
				onSubmit={submitHandler}>
				<h1>Create a password</h1>
				<p>
					Create a password with at least 6 letters or numbers.It should be
					something other can't guess
				</p>
				<div>
					<div className={errorClass}>
						<label
							htmlFor="password"
							className="formLabel">
							Password
						</label>
						<div style={{ display: "flex", position: "relative" }}>
							<input
								id="password"
								className={inputError}
								name="password"
								type={passVisual ? "text" : "password"}
								value={password}
								onChange={passwordChangeHandler}
								onBlur={passwordBlurHandler}
							/>
							<VisibilityOffIcon
								onClick={seePassword}
								sx={{ position: "absolute", right: "0" }}
							/>
						</div>
						{passwordHasError && (
							<ErrorElement text="Your password is not valid." />
						)}
					</div>
				</div>

				<Button
					text="Next"
					disabled={passwordIsValid ? false : true}
					onClick={storeInfo}
				/>
			</form>
		</Container>
	);
}
