import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import instance from "../axios";
import { useNavigate } from "react-router-dom";
// src/components/Login.jsx
import authSchema from '/src/schemaValid/authSchema.js';


const Login = () => {
	const nav = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(authSchema),
	});
	const onSubmit = async (data) => {
		try {
            const res = await instance.post(`/login`, data);
			if (confirm("Login successfully, redirect to home page!")) {
				nav("/");
			}
         } catch (error) {
			alert(error?.response?.data);
         } 
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Login</h1>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						email
					</label>
					<input type="email" className="form-control" id="email" {...register("email", { required: true })} />
					{errors.email?.message && <p className="text-danger">{errors.email?.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						password
					</label>
					<input type="password" className="form-control" id="password" {...register("password", { required: true })} />
					{errors.password?.message && <p className="text-danger">{errors.password?.message}</p>}
				</div>
				<div className="mb-3">
					<button className="btn btn-primary w-100" type="submit">
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;

