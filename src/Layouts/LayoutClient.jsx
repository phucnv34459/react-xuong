import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LayoutClient = ({ children, data }) => {
	console.log(data);
	return (
		<>
	 <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
		</>
	);
};

export default LayoutClient;
