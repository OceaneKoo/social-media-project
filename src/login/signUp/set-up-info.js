/** @format */
let USERINFO = {};
export const userinfo = (info) => {
	let data;
	data = Object.assign(USERINFO, info);
	USERINFO = data;
	console.log(USERINFO);
	return USERINFO;
};
