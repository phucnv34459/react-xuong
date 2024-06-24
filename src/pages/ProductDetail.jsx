import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../axios";
import s from "./ProductDetail.module.scss";
import { ProductContext } from "../contexts/ProductContext";
const ProductDetail = () => {
	const context = useContext(ProductContext);
	const { id } = useParams();
	const [p, setP] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const { data } = await instance.get(`/products/${id}`);
				setP(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return (
		<div>
			<h1 class="text-center mb-2 mt-2">Chi tết sản phẩm</h1>
         <div className={s.productDetailContainer}>
			<div className={s.productGallery}>
				<img src={p.thumbnail} alt="Sản phẩm chính" className={s.mainImage} />
			</div>
			<div className={s.productInfo}>
				<h1 className={s.productTitle}>{p.title}</h1>
				<p className={s.productPrice}>${p.price}</p>
				<p className={s.productDescription}>
					{p.description}
				</p>
				<button className={s.addToCartBtn}>Add to cart</button>
			</div>
		</div>
         <div>
			<h2 style={{textAlign:"center",marginTop:"10px"}}>Sản phẩm liên quan</h2>
		 <div className={s.relatedProducts}>
			{context?.state.products.map((p)=>(
				<div className={s.relatedProductsList}>
					<Link to={`/product-detail/${p.id}`} key={p.id}>
					<div className={s.relatedProductItem}>
					<img src={p.thumbnail}  alt="Sản phẩm liên quan " />
					<h3>{p.title}</h3>
					<p className={s.relatedProductPrice}>${p.price}</p>
				</div>
					</Link>
				</div>
			))}
	</div>
	</div>
		 </div>
		
		

	);
};

export default ProductDetail;
