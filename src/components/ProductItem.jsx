import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import s from "./Productitem.module.scss";
import TruncateDescription from "../pages/TruncateDescription";
const ProductItem = ({ data }) => {
	return (
		<div className={s.productItem} >
			
			<Link to={`/product-detail/${data.id}`}>
				<img src={data.thumbnail} alt="" />
			</Link>
			<div className={s.content}>
				<Link style={{textDecoration:"none"}} to={`/product-detail/${data.id}`}>
					<h4>{data.title}</h4>
				</Link>
				<span>${data.price}</span>
				<TruncateDescription description={data.description} maxLength={30} />
				<Button className="btn btn-danger" width="100%">
					Add to cart
				</Button>
			</div>
		</div>
	);
};

export default ProductItem;
