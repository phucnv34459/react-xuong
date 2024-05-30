import React from "react";
import style from "./home.module.scss";
import TruncateDescription from "./TruncateDescription";
function Home({ data }) {
	return (
		<>
		<div className="container">
		<h1>Danh sach san pham</h1>
			{data.map((product) => (
				<div key={product.id} className={style.card}>
					<img src={product.thumbnail} alt="" />
					<h2>{product.name}</h2>
					<p>${product.price}</p>
					<TruncateDescription description={product.description} maxLength={30} />
					<button className="btn btn-danger">Add to cart</button>
				</div>
			))}
		</div>	
		</>
	);
}
export default Home;
