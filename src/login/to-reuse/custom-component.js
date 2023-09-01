/** @format */

import React from "react";
import classes from "./CustomStyle.module.css";
import { HashLink as Link } from "react-router-hash-link";
export function Container(props) {
	return <div className={classes.container}>{props.children}</div>;
}
export function Button(props) {
	return (
		<button
			disabled={props.disabled}
			onClick={props.onClick}
			className={`${classes.buttonContainer} ${classes.loginButton}`}>
			{props.text}
		</button>
	);
}
export function SignUpButton(props) {
	return (
		<button
			className={`${classes.buttonContainer} ${classes.signUpButton}`}
			onClick={props.onClick}>
			{props.text}
		</button>
	);
}
