/** @format */

import React, { useRef, useEffect } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import Posting from '../../../../ui/feed/Posting';
import { Grid, Card, CardHeader, CardContent, Typography } from '@mui/material';
import classes from './YourPost.module.css';
import SchoolIcon from '@mui/icons-material/School';
import HouseIcon from '@mui/icons-material/House';
import FavoriteIcon from '@mui/icons-material/Favorite';
import story1 from '../../../../../assets/images/story/cat1.jpg';
import story2 from '../../../../../assets/images/story/cat2.jpg';
import story3 from '../../../../../assets/images/story/cat3.jpg';
import { users as friends } from '../../../../../assets/profile-data/dummy-data';
import { data as images } from '../../../../../assets/profile-data/profile-data';
import CustomCard from './CustomComponent';
import profilePic from '../../../../../assets/images/pic3.jpg';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import CollectionsIcon from '@mui/icons-material/Collections';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function YourPost(props) {
	return (
		<div className={classes.container}>
			<Grid
				sx={{ width: '1000px', margin: 'auto' }}
				container>
				<Grid
					item
					xs={5}>
					<div className={classes.scrollable}>
						<Card className={classes.cardContainer}>
							<CardContent>
								<Typography
									sx={{ fontWeight: 'bold' }}
									className={classes.header}
									variant='h5'
									component='h5'>
									Intro
								</Typography>
								<Typography
									className={classes.box}
									variant='p'
									component='div'
									sx={{ marginBottom: '10px' }}>
									Add bio
								</Typography>
								<Typography
									className={classes.icon}
									variant='p'
									component='div'>
									<SchoolIcon sx={{ marginRight: '5px' }} />
									went to BEHS(2)Amarapura
								</Typography>
								<Typography
									className={classes.icon}
									variant='p'
									component='div'>
									<HouseIcon sx={{ marginRight: '5px' }} />
									lives in{' '}
									<span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
										{' '}
										Mandalay
									</span>
								</Typography>
								<Typography
									className={classes.icon}
									variant='p'
									component='div'>
									<FavoriteIcon sx={{ marginRight: '5px' }} />
									Single
								</Typography>
								<Typography
									className={classes.box}
									variant='p'
									component='div'
									sx={{ marginBottom: '10px' }}>
									Edit details
								</Typography>
								<Typography
									className={classes.box}
									variant='p'
									component='div'
									sx={{ marginBottom: '10px' }}>
									Add hobbies
								</Typography>
								<div className={classes.imageContainer}>
									<div className={classes.name}>
										<img src={story1} />
										<span>featured name</span>
									</div>
									<div className={classes.name}>
										<img src={story2} />
										<span>featured name</span>
									</div>{' '}
									<div className={classes.name}>
										<img src={story3} />
										<span>featured name</span>
									</div>
								</div>
								<Typography
									className={classes.box}
									variant='p'
									component='div'
									sx={{ marginBottom: '10px' }}>
									Edit featured{' '}
								</Typography>
							</CardContent>
						</Card>
						<Card className={classes.cardContainer}>
							<CardContent>
								<CustomCard
									header='Photos'
									action='See all photos'
								/>
								<div className={classes.photoContainer}>
									{images.map((image) => (
										<img
											className={classes.photos}
											key={image.id}
											src={image.img}
										/>
									))}
								</div>
							</CardContent>
						</Card>
						<Card className={classes.cardContainer}>
							<CardContent>
								<CustomCard
									header='friends'
									action='See all friends'
								/>
								<Typography
									sx={{ marginLeft: '5px', fontSize: '13px' }}
									variant='p'
									component='p'>
									{`${friends.length} friends`}
								</Typography>
								<div>
									<div>
										<div className={classes.wrapper}>
											{friends.map((fris) => (
												<div className={classes.friContainer}>
													<img
														key={fris.id}
														className={classes.friends}
														src={fris.profilePicture}
													/>

													<span className={classes.friName}>
														{fris.username}
													</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card className={classes.cardContainer}>
							<CardContent>
								<CustomCard
									header='Life events'
									action='See all'
								/>
								<div className={classes.jobContainer}>
									<div className={`${classes.paper} ${classes.whitePaper}`}>
										<WorkIcon className={classes.logo} />
										<p>Started job at YG Entertainment</p>
										<span>August 29,2019</span>
									</div>

									<div className={`${classes.paper} ${classes.coloredPaper}`}>
										<WorkIcon className={classes.logo} />
										<p>Started job at YG Entertainment</p>
										<span>August 29,2019</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</Grid>

				<Grid
					item
					xs={7}>
					<div className={classes.scrollable}>
						<Card>
							<CardContent>
								<div className={classes.inputContainer}>
									<img src={profilePic} />
									<input
										type='text'
										placeholder='what are you thinking'
									/>
								</div>
								<div className={classes.inputContainer}>
									<div className={classes.items}>
										<VideoCameraBackIcon sx={{ color: 'red' }} />
										<span>live video</span>
									</div>
									<div className={classes.items}>
										<CollectionsIcon sx={{ color: 'green' }} />
										<span>Image/Video</span>
									</div>
									<div className={classes.items}>
										<CelebrationIcon sx={{ color: 'blue' }} />
										<span>life events</span>
									</div>
								</div>
							</CardContent>
						</Card>
						<Posting
							type='img'
							srcFile={story1}
							caption='cuteee'
						/>
						<Posting
							type='img'
							srcFile={story1}
							caption='cuteee'
						/>
						<Posting
							type='img'
							srcFile={story1}
							caption='cuteee'
						/>
						<Posting
							type='img'
							srcFile={story1}
							caption='cuteee'
						/>
						<Posting
							type='img'
							srcFile={story1}
							caption='cuteee'
							name='Leila Park'
							date='July 30'
							profilePicture={profilePic}
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
