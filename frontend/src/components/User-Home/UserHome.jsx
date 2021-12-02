import React from "react";
import InfoSection from "../InfoSection";
import { UHomeObjOne } from "./Data";

const UserHome = (props) => {
	const { handleLogout } = props;

	return (
		<>
		<InfoSection {...UHomeObjOne}/>
		</>
	);
}

export default UserHome;
