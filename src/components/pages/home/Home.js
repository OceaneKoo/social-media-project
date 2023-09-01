/** @format */

import React from "react";
import Topbar from "../../ui/topbar/Topbar";
import Sidebar from "../../ui/sidebar/Sidebar";
import classes from "./Home.module.css";
import Feed from "../../ui/feed/Feed";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function Home() {
	return (
		<div>
			<Topbar />
			<Grid
				sx={{ position: "fixed" }}
				container
				className={classes.container}>
				<Grid
					item
					xs={3}
					sx={{ backgroundColor: "#f0efeb" }}>
					<Sidebar />
				</Grid>
				<Grid
					item
					xs={9}
					sx={{ backgroundColor: "#f0efeb" }}>
					<Outlet />
				</Grid>
				{/* <Grid
					item
					xs={3}></Grid>*/}
			</Grid>
		</div>
	);
}
