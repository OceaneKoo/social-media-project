/** @format */

import React from 'react';
import Topbar from '../../ui/topbar/Topbar';
import Sidebar from '../../ui/sidebar/Sidebar';
import classes from './Home.module.css';
import Feed from '../../ui/feed/Feed';
import { Grid } from '@mui/material';
import Rightbar from '../../ui/rightbar/Rightbar';
export default function Home() {
	return (
		<div>
			<Topbar />
			<Grid container>
				<Grid
					item
					xs={3}>
					<Sidebar style={{ position: 'sticky' }} />
				</Grid>
				<Grid
					item
					xs={6}>
					<Feed />
				</Grid>
				<Grid
					item
					xs={3}>
					<Rightbar />
				</Grid>
			</Grid>
		</div>
	);
}
