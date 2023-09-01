/** @format */
import ErrorIcon from '@mui/icons-material/Error';
import React from 'react';
import classes from './ErrorElement.module.css';
function ErrorElement(props) {
	return (
		<div className={classes.container}>
			<ErrorIcon />
			<p className={classes.errorText}>{props.text}</p>
		</div>
	);
}

export default ErrorElement;
