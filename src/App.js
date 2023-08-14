/** @format */
// import Home from './components/pages/home/Home';
// import Profile from './components/pages/profile/Profile';
// import Topbar from './components/ui/topbar/Topbar';
import Login from './login/Login';
import Birthday from './login/signUp/Birthday';
import Email from './login/signUp/Email';
import NamePage from './login/signUp/NamePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Password from './login/signUp/Password';
import AddProfile from './login/signUp/set-up/AddProfile';
function App() {
	const router = createBrowserRouter([
		{ path: '/', element: <Login /> },
		{ path: '/name', element: <NamePage /> },
		{ path: '/name/birthday', element: <Birthday /> },
		{
			path: '/name/birthday/email',
			element: <Email />,
		},
		{
			path: '/name/birthday/email/password',
			element: <Password />,
		},
		{
			path: '/name/birthday/email/password/addProfile',
			element: <AddProfile />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
