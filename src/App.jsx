import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import instance, { getProducts } from "./axios";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import ProductForm from "./pages/admin/ProductFrom";

function App() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				const { data } = await instance.get("/products");
				console.log(data);
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const handleSubmit = (data) => {
		(async () => {
			try {
				const res = await instance.post("/products", data);
				console.log(res.data);
				setProducts([...products, res.data]);
				if (confirm("Add product successfully, redirect to admin page!")) {
					navigate("/admin");
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};
	const handleSubmitEdit = (data) => {
		(async () => {
			try {
    await instance.patch(`/products/${data.id}`, data);
	const newData = await getProducts();
				setProducts( newData);
				if (confirm("Edit product successfully, redirect to admin page!")) {
					// navigate("/admin");
					window.location.href = "/admin";
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};
	const handleSubmitForm = (data) => {
	      (async () => {
			try {
				if (data.id) {
					await instance.patch(`/products/${data.id}`, data);
					const newData = await getProducts();
					setProducts( newData);
				} else {
					const res = await instance.post("/products", data);
				    console.log(res.data);
				    setProducts([...products, res.data]);
				}
				if (confirm(" successfully, redirect to admin page!")) {
					// navigate("/admin");
					window.location.href = "/admin";
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};

	const handleRemove = (id) => {
		(async () => {
			try {
				if (confirm("Are you sure?")) {
				await instance.delete(`/products/${id}`);
				const newData = products.filter(i => i.id !== id ? i : null);
				setProducts(newData);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	};
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home data={products} />} />
					<Route path="/home" element={<Navigate to="/" />} />
					<Route path="/product-detail/:id" element={<ProductDetail />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/admin" element={<Dashboard data={products} Remove={handleRemove} />} />
					{/* <Route path="/admin/product-add" element={<ProductAdd onAdd={handleSubmit} />} />
					<Route path="/admin/product-edit/:id" element={<ProductEdit onEdit={handleSubmitEdit} />} /> */}
					<Route path="/admin/product-form/:id" element={<ProductForm onProduct={handleSubmitForm}/>} />
					<Route path="/admin/product-form" element={<ProductForm onProduct={handleSubmitForm}/>} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
