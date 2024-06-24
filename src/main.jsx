import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductContextProvider from "./contexts/ProductContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
		<ProductContextProvider>
		<App />
		</ProductContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
