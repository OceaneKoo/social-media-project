/** @format */

import React from 'react';
import classes from './CustomStyle.module.css';
import { Link } from 'react-router-dom';
export function Container(props) {
	return <div className={classes.container}>{props.children}</div>;
}
export function LogInButton(props) {
	return (
		<Link to={props.path}>
			<button className={`${classes.buttonContainer} ${classes.loginButton}`}>
				{props.text}
			</button>
		</Link>
	);
}
export function SignUpButton(props) {
	return (
		<Link to={props.path}>
			<button className={`${classes.buttonContainer} ${classes.signUpButton}`}>
				{props.text}
			</button>
		</Link>
	);
}
