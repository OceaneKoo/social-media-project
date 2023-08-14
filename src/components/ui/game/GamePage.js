/** @format */
/** @format */
import React, { useRef, useState } from 'react';
import GameCard from './GameCard';
import CardItem from './CardItem';
import classes from './GamePage.module.css';
import { IconButton } from '@mui/material';
import { gameData } from '../../../assets/profile-data/game-data';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
export default function GamePage() {
	const cardRef = useRef(null);
	const [position, setPosition] = useState(0);
	const scrollLeft = () => {
		const container = cardRef.current;
		const newPosition = position + container.clientWidth;

		container.scrollTo({ left: newPosition, behavior: 'smooth' });
		console.log('clicked');

		setPosition(newPosition);
	};

	return (
		<React.Fragment>
			<div className={classes.container}>
				<div className={classes.section}>
					<h2 className={classes.header}>Games we love</h2>
					<div className={classes.cardContainer}>
						{gameData.map((data) => (
							<div ref={cardRef}>
								<GameCard
									name={data.name}
									player={data.player}
									gameCover={data.img}
								/>
							</div>
						))}
					</div>
					<IconButton className={classes.icon}>
						<ArrowCircleRightIcon onClick={scrollLeft} />
					</IconButton>
				</div>
				<h2 className={classes.header}>Most played games</h2>
				<div className={classes.cardContainer}>
					<CardItem />
				</div>

				<h2 className={classes.header}>Games we love</h2>
				<div>
					<GameCard />
				</div>
			</div>
		</React.Fragment>
	);
}
