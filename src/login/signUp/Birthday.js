/** @format */
import React, { useEffect } from "react";
import { Container } from "../to-reuse/custom-component";
import { Button } from "../to-reuse/custom-component";
import userinput from "../hook/user-input";
import ErrorElement from "../to-reuse/ErrorElement";
import { useNavigate } from "react-router-dom";
import { userinfo } from "./set-up-info";
export default function Birthday() {
	const navigate = useNavigate();
	const validateBirthDate = (value) => {
		if (!value) {
			return { age: "" };
		}
		const birthDate = new Date(value);
		const currentDate = new Date();
		const year = currentDate.getFullYear() - birthDate.getFullYear();
		console.log(year);
		if (year < 13) {
			return { age: year, isValid: false };
		} else {
			return { age: year, isValid: true };
		}
	};
	const {
		value: birthDate,
		isValid: ageIsValid,
		hasError: birthdateHasError,
		valueChangeHandler: birthdateChangeHandler,
		inputBlurHandler: birthdateBlurHandler,
		reset: resetAge,
	} = userinput(validateBirthDate);

	const displayedAge =
		ageIsValid.age === "" ? (
			<span>Select your birthday</span>
		) : !ageIsValid.isValid ? (
			<ErrorElement text="Your age must be above thirteen" />
		) : (
			<span>{`Birthday(${ageIsValid.age} years old)`}</span>
		);
	const errorClass = birthdateHasError
		? "formContainer invalid"
		: "formContainer";
	const inputErrorClass = birthdateHasError
		? "formInput invalidInput"
		: "formInput";
	useEffect(() => {
		const age = { age: ageIsValid.age };
		const existingInfo = JSON.parse(localStorage.getItem("user-info"));
		const newInfo = { ...existingInfo, ...age };
		localStorage.setItem("user-info", JSON.stringify(newInfo));
	}, [ageIsValid.age]);
	const submitHandler = (event) => {
		event.preventDefault();

		if (ageIsValid.isValid) {
			console.log("submitted");
		}
		resetAge();
	};
	const storeInfo = () => {
		// userinfo({ age: ageIsValid.age });
		navigate("/email");
	};
	return (
		<Container>
			<form
				style={{ width: "430px" }}
				onSubmit={submitHandler}>
				<h1>What's your birthday?</h1>
				<p>
					Choose your data of birth.You can always make this private later.{" "}
				</p>
				<div>
					<div className={errorClass}>
						<label htmlFor="birthdate">{displayedAge}</label>
						<input
							className={inputErrorClass}
							type="date"
							name="birthdate"
							onChange={birthdateChangeHandler}
							onBlur={birthdateBlurHandler}
							value={birthDate}
						/>
					</div>
				</div>
				<Button
					text="Next"
					disabled={!ageIsValid.isValid ? true : false}
					onClick={storeInfo}
				/>
			</form>
		</Container>
	);
}
