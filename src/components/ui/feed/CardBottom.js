/** @format */

import React from "react";
import { Grid, IconButton } from "@mui/material";
import classes from "./CardBottom.module.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RecommendIcon from "@mui/icons-material/Recommend";
export default function CardBottom() {
	return (
		<div>
			<div className={classes.container}>
				{/* <ThumbUpIcon
					className={classes.icon}
					sx={{ fontSize: "18px" }}
				/> */}
				<RecommendIcon className={classes.icon} />
				<span style={{ marginLeft: "5px" }}>365</span>
				<div className={classes.position}>
					<span>37 comments </span>
					<span>55 shares</span>
				</div>
			</div>
			<Grid container>
				<Grid
					className={classes.center}
					item
					xs={4}
					container>
					<div className={`${classes.center} ${classes.box}`}>
						<IconButton aria-label="like">
							<ThumbUpOffAltIcon />
						</IconButton>
						<span>Like</span>
					</div>
				</Grid>
				<Grid
					item
					container
					xs={4}
					className={classes.center}>
					<div className={`${classes.center} ${classes.box}`}>
						<IconButton aria-label="comment">
							<ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
						</IconButton>
						<span>Comment</span>
					</div>
				</Grid>
				<Grid
					item
					xs={4}
					container
					className={classes.center}>
					<div className={`${classes.center} ${classes.box}`}>
						<IconButton aria-label="share">
							<ReplyIcon />
						</IconButton>
						<span>Share</span>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
