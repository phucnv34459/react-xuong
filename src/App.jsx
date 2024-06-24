import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LayoutAdmin from "./Layouts/LayoutAdmin";
import LayoutClient from "./Layouts/LayoutClient";
import instance, { getProducts } from "./axios";
import AuthForm from "./components/AuthForm";
import Header from "./components/Header";
import PrivateRouter from "./components/PrivateRouter";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductFrom";

function App() {
	console.log(<Header />);
	return (
		<>
			
			<main>
				<Routes>
					
					{/* path for client */}
					<Route path="/" element={<LayoutClient/>}>
					<Route index element={<Home  />} />
					<Route path="/home" element={<Navigate to="/" />} />
					<Route path="/product-detail/:id" element={<ProductDetail />} />
					<Route path="/product" element={<About />} />
					</Route>
					
					{/* path for admin */}
					<Route path="/admin" element={<PrivateRouter/>}>
					<Route path="/admin" element={<LayoutAdmin/>}>
					<Route index element={<Dashboard   />} />
					<Route path="/admin/product-form" element={<ProductForm  />} />
					<Route path="/admin/product-form/:id" element={<ProductForm  />} />
					
					</Route>
					</Route>

					{/* path empty */}
					{/* <Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} /> */}
					<Route path="/register" element={<AuthForm isRegister />} />
					<Route path="/login" element={<AuthForm />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
				<ToastContainer/>
			</main>
		</>
	);
}

export default App;
