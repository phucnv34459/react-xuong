import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = ({ data,Remove }) => {
	const navigate = useNavigate();
   	const Logout = () =>{
		if (confirm("Are you sure?")) {
			localStorage.removeItem('token');
			navigate('/')
		}
	}
	return (
		<div>
			<header>
				<ul>
					<li onClick={Logout} className="btn btn-danger">Logout</li>
				</ul>
			</header>
			<h1 className="ml-2">Hello, Admin</h1>
			<Link to="/admin/product-form" className="btn btn-primary mb-4 ml-2">
				Add new product
			</Link>
			<table className="table table-bordered table-striped text-center ml-2">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Description</th>
						<th>Thumbnail</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((p) => (
						<tr key={p.id}>
							<td>{p.id}</td>
							<td>{p.title}</td>
							<td>{p.price}</td>
							<td>{p.description || "Dang cap nhat"}</td>
							<td>{p.thumbnail ? <img src={p.thumbnail} alt="Dang cap nhat" /> : "Dang cap nhat"}</td>
							<td>
								<button className="btn btn-danger" onClick={() => Remove(p.id)}>Delete</button>
								<Link to={`/admin/product-form/${p.id}`} className="btn btn-warning">Edit</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
