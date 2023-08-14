/** @format */

import React from 'react';
import gameCover from '../../../assets/images/gameImg1.jpg';
import classes from './CardItem.module.css';
export default function CardItem() {
	return (
		<div className={`${classes.card}`}>
			<img
				className={classes.image}
				src={gameCover}
				alt=''
			/>
			<div className={`${classes.overlay}`}>
				<h3 className={`${classes.header}`}>Mergest Kingdom</h3>
				<span className={`${classes.player}`}>443k players</span>
			</div>
		</div>
	);
}
