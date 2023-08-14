/** @format */
import classes from './CustomComponent.module.css';
import { Typography } from '@mui/material';
const CustomCard = (props) => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}>
				<Typography
					sx={{ fontWeight: 'bold' }}
					className={classes.header}
					variant='h5'
					component='h5'>
					{props.header}
				</Typography>
				<Typography
					sx={{
						color: '#464646',
						fontSize: '15px',
					}}
					variant='h5'
					component='p'>
					{props.action}
				</Typography>
			</div>
		</>
	);
};
export default CustomCard;
