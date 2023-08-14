/** @format */

import React from 'react';
// import gameCover from '../../../assets/images/gameImg1.jpg';
import classes from './GameCard.module.css';
export default function (props) {
	return (
		<div className={`${classes.card}`}>
			<img
				className={classes.image}
				src={props.gameCover}
				alt=''
			/>
			<div className={`${classes.overlay} `}>
				<h3 className={`${classes.header}`}>{props.name}</h3>
				<span className={classes.player}>{props.player}</span>
			</div>
		</div>
	);
}
