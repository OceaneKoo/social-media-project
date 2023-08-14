/** @format */
import classes from './Sidebar.module.css';
import React from 'react';
import {
	Card,
	Grid,
	ListItemText,
	ListItemIcon,
	ListItemButton,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { DUMMY_DATAS } from './dummyData';
export default function Sidebar() {
	return (
		<div className={classes.sidebar}>
			<div className={classes.itemContainer}>
				{DUMMY_DATAS.map((data) => (
					<ul className={classes.listItems}>
						<li>
							<Card
								sx={{ backgroundColor: '#f0efeb' }}
								className={classes.cardItems}>
								<span>{data.icon}</span>
								{data.data}
							</Card>
						</li>
					</ul>
				))}
			</div>
			<ListItemButton>
				<ListItemIcon>
					<HelpIcon />
				</ListItemIcon>
				<ListItemText primary='Help and Support' />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<SettingsIcon />
				</ListItemIcon>
				<ListItemText primary='Settings and Privacy' />
			</ListItemButton>
		</div>
	);
}
