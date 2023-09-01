/** @format */
import img1 from "../../../../../assets/images/friends/img-1.jpg";
import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Card, CardHeader, Avatar } from "@mui/material";
import classes from "./BoxStyle.module.css";
import styles from "../../pages/Style.module.css";

export default function BoxStyle(props) {
	return (
		<div className={classes.container}>
			<div className={classes.box}>
				<img
					src={img1}
					className={classes.image}
				/>
				<div>{props.children}</div>
			</div>
		</div>
	);
}
