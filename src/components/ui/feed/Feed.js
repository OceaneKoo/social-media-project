/** @format */

import React from "react";
// import Post from "./Post";
import Posting from "./Posting";
import classes from "./Feed.module.css";
import Share from "./Share";
import VideoPage from "../video/VideoPage";
import photo1 from "../../../assets/images/photo1.jpg";
import GamePage from "../game/GamePage";
import { Post } from "../../pages/profile/nav-items/post-page/YourPost";
import { YourPost } from "../../pages/profile/nav-items/post-page/YourPost";
export default function Feed(props) {
	return (
		<div className={classes.postContainer}>
			<Post />
			<Posting
				type="img"
				srcFile={photo1}
				caption="cuteee"
				date="December 23"
				name="Smith"
				caption="hi fdsdfsdfsdf"
			/>
			<Posting
				srcFile={photo1}
				type="img"
				caption="cuteee"
				date="December 23"
				name="Smith"
				caption="hi fdsdfsdfsdf"
			/>
			<Posting
				type="img"
				srcFile={photo1}
				caption="cuteee"
				date="December 23"
				name="Smith"
				caption="hi fdsdfsdfsdf"
			/>
		</div>
	);
}
