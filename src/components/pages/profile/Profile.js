/** @format */

import React from "react";
import coverPhoto from "../../../assets/images/pic2.jpg";
import classes from "./Profile.module.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import profilePic from "../../../assets/images/pic3.jpg";
import img1 from "../../../assets/images/friends/img-1.jpg";
import img2 from "../../../assets/images/friends/img-2.jpg";
import img3 from "../../../assets/images/friends/img-3.jpg";
import img4 from "../../../assets/images/friends/img-4.jpg";
import img5 from "../../../assets/images/friends/img-5.jpg";
import EditIcon from "@mui/icons-material/Edit";
import { users as friends } from "../../../assets/profile-data/dummy-data";
import { YourPost } from "./nav-items/post-page/YourPost";
import FriendPage from "./nav-items/friend-page/FriendPage";
import Media from "./nav-items/video/Media";
export default function Profile() {
	return (
		<React.Fragment>
			<div className={classes.container}>
				<section className={classes.coverContainer}>
					<img
						className={classes.img}
						src={coverPhoto}
					/>
					<h2 className={classes.edit}>
						<CameraAltIcon />
						Edit cover photo
					</h2>
				</section>
				<section className={`${classes.profileContainer}`}>
					<img
						className={classes.profile}
						src={profilePic}
					/>
					<CameraAltIcon className={classes.cameraIcon} />
					<div className={classes.profileInfo}>
						<h3>
							Leila Park <span>(gue)</span>
						</h3>
						<p>{`${friends.length} friends`}</p>
						<div className={classes.circleContainer}>
							<img src={img1} />
							<img src={img2} />
							<img src={img3} />
							<img src={img4} />
							<img src={img5} />
						</div>
						<p className={classes.editProfile}>
							<span>
								<EditIcon sx={{ fontSize: "20px" }} />
							</span>
							Edit profile
						</p>
					</div>
				</section>
				<div className={classes.link}>
					<a href="#">Posts</a>
					<a href="#">About</a>
					<a href="#">Friends</a>
					<a href="#">Photos</a>
					<a href="#">Videos</a>
				</div>
				<YourPost />
				{/* <FriendPage /> */}

				{/* <Media isVideo='true' /> */}
			</div>
		</React.Fragment>
	);
}
