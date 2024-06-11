import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
	return (
		<div>
			<main>
				<Outlet/>
			</main>
		</div>
	);
};

export default LayoutAdmin;
