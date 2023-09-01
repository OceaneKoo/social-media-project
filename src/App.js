/** @format */
import Home from "./components/pages/home/Home";
// import Profile from './components/pages/profile/Profile';
// import Topbar from './components/ui/topbar/Topbar';
import GamePage from "./components/ui/game/GamePage";
import Login from "./login/Login";
import Birthday from "./login/signUp/Birthday";
import Email from "./login/signUp/Email";
import NamePage from "./login/signUp/NamePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Password from "./login/signUp/Password";
import AddProfile from "./login/signUp/set-up/AddProfile";
import Feed from "./components/ui/feed/Feed";
import VideoPage from "./components/ui/video/VideoPage";
import Friend from "./components/ui/rightbar/pages/friendPage/Friend";
import Notification from "./components/ui/rightbar/pages/notificationPage/Notification";
import Messenger from "./components/ui/rightbar/pages/messengerPage.js/Messenger";
import Profile from "./components/pages/profile/Profile";
import CreatePostModal from "./components/pages/profile/create-post/CreatePostModal";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},

		{ path: "/name", element: <NamePage /> },
		{ path: "/birthday", element: <Birthday /> },
		{
			path: "/email",
			element: <Email />,
		},
		{
			path: "/password",
			element: <Password />,
		},
		{
			path: "/addProfile",
			element: <AddProfile />,
		},
		{
			path: "home",
			element: <Home />,
			children: [
				{ path: "", element: <Feed /> },
				{ path: "game", element: <GamePage /> },
			],
		},
		{
			path: "/home/post",
			element: <CreatePostModal />,
		},
		{
			path: "home/profilePage",
			element: <Profile />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
