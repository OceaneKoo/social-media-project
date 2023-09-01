/** @format */

import React from "react";
import {
	Card,
	CardHeader,
	CardContent,
	Avatar,
	Typography,
} from "@mui/material";
import Posting from "./Posting";
// import Post from './Post';
import classes from "./Share.module.css";
export default function () {
	return (
		<div className={classes.shareContainer}>
			<Card>
				<CardHeader
					title="John"
					subheader="Sep 28"
					avatar={
						<Avatar
							aria-label="share"
							alt=""
							src="https://i.pinimg.com/564x/57/09/73/5709737a79a821a703279d1f05968386.jpg"></Avatar>
					}>
					<CardContent>
						<Typography variant="body1">Please dont fgdfgdfgf</Typography>
					</CardContent>
					<Card>
						<CardHeader>
							<CardContent>
								<Posting />
							</CardContent>
						</CardHeader>
					</Card>
				</CardHeader>
			</Card>
		</div>
	);
}
