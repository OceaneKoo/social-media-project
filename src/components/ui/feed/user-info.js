/** @format */

const info = JSON.parse(localStorage.getItem("user-info"));
export const userInfo = {
	username: info.name,
	profilePicture: info.profilePic,
	age: info.age,
	email: info.email,
	password: info.password,
};
