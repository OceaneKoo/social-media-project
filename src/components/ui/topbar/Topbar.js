/** @format */
import styles from './Topbar.module.css';
import React from 'react';
import { Search } from '@mui/icons-material';
import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
export default function Topbar() {
	return (
		<div>
			<Grid
				container
				className={styles.topbar}>
				<Grid
					item
					xs={3}>
					<div className={styles.search}>
						<Search className={styles.searchIcon} />
						<input
							className={styles.searchInput}
							placeholder='Search'
						/>
					</div>
				</Grid>
				<Grid
					item
					xs={6}>
					<div className={styles.items}>
						<div className={styles.iconItem}>
							<HomeIcon />
						</div>

						<div className={styles.iconItem}>
							<PeopleIcon />
							<span className={styles.badge}>1</span>
						</div>
						<div className={styles.iconItem}>
							<PlayCircleIcon />
						</div>
						<div className={styles.iconItem}>
							<SportsEsportsIcon />
						</div>
					</div>
				</Grid>
				<Grid
					item
					xs={3}>
					<div className={styles.items}>
						<div className={styles.iconItem}>
							<NotificationsIcon />
							<span className={styles.badge}>1</span>
						</div>
						<div className={styles.iconItem}>
							<EmailIcon />
							<span className={styles.badge}>1</span>
						</div>
						<img
							className={styles.img}
							src='https://i.pinimg.com/564x/5a/10/5d/5a105d7900c685466e5ffa860509e471.jpg'
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
