/** @format */

import React from 'react';
import classes from './Form.module.css';
export default function Form(props) {
	return (
		<form style={{ width: '430px' }}>
			<h1>{props.header}</h1>
			<p>{props.subheader}</p>
			<div className={classes.formContainer}>{props.children}</div>
		</form>
	);
}
