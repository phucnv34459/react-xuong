import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import instance, { getProducts } from "./axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import ProductDetail from "./pages/ProductDetail";
import ProductForm from "./pages/admin/ProductFrom";
import AuthForm from "./components/AuthForm";
import LayoutClient from "./Layouts/LayoutClient";
import LayoutAdmin from "./Layouts/LayoutAdmin";
import { ToastContainer, toast } from "react-toastify";
import Check from "./components/Check";

function App() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				const { data } = await instance.get("/products");
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const handleSubmitForm = (data) => {
		(async () => {
			try {
				if (data.id) {
					// logic cho edit product
					await instance.patch(`/products/${data.id}`, data);
					const newData = await getProducts();
					setProducts(newData);
				} else {
					// logic cho add product
					const res = await instance.post("/products", data);
					setProducts([...products, res.data]);
				}
				if (confirm("Successfully, redirect to admin page!")) {
					window.location.href="/admin"
					// navigate("/admin");
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};

	const handleRemove = (id) => {
		console.log(id);
		(async () => {
			try {
				if (confirm("Are yout sure?")) {
					await instance.delete(`/products/${id}`);
					const newData = products.filter((item) => item.id !== id && item);
					setProducts(newData);
					toast.success("Product deleted successfully!")
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};
	console.log(<Header />);
	return (
		<>
			
			<main>
				<Routes>
					{/* path for client */}
					<Route path="/" element={<LayoutClient/>}>
					<Route index element={<Home data={products} />} />
					<Route path="/home" element={<Navigate to="/" />} />
					<Route path="/product-detail/:id" element={<ProductDetail ps={products} />} />
					<Route path="/about" element={<About />} />
					</Route>
					
					{/* path for admin */}
					<Route element={<Check/>}>
					<Route path="/admin" element={<LayoutAdmin/>}>
					<Route index element={<Dashboard data={products} Remove={handleRemove} />} />
					<Route path="/admin/product-form" element={<ProductForm onProduct={handleSubmitForm} />} />
					<Route path="/admin/product-form/:id" element={<ProductForm onProduct={handleSubmitForm} />} />
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
