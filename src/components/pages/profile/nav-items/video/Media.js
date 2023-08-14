/** @format */

import React from 'react';
import { Card, CardContent, Paper } from '@mui/material';
import { data } from '../../../../../assets/profile-data/profile-data';
import classes from './Media.module.css';
import { PermPhoneMsg } from '@mui/icons-material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
export default function Media(props) {
	console.log(props.isVideo);
	return (
		<div className={classes.container}>
			<header className={classes.header}>Videos</header>
			<div className={classes.wrapper}>
				{data.map((mediaData) =>
					props.isVideo === 'true' ? (
						<div
							key={mediaData.id}
							className={classes.customContainer}>
							<ModeEditIcon
								className={classes.editIcon}
								sx={{ fontSize: 15 }}
							/>
							<video className={classes.media}>
								<source
									src={mediaData.vd}
									type='video/mp4'
								/>
							</video>
						</div>
					) : (
						<div key={mediaData.id}>
							<img
								className={classes.media}
								src={mediaData.img}
								alt='image'
							/>
							<ModeEditIcon
								className={classes.editIcon}
								sx={{ fontSize: 20 }}
							/>
						</div>
					)
				)}
			</div>
		</div>
	);
}
