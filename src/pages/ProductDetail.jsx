import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";
import s from "./ProductDetail.module.scss";
const ProductDetail = () => {
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
		<div className={s.productDetailContainer}>
  <div className={s.productGallery}>
    <img src={p.thumbnail} alt="Sản phẩm chính" className={s.mainImage}/>
  </div>
  <div className={s.productInfo}>
    <h1 className={s.productTitle}>{p.title}</h1>
    <p className={s.productPrice}>${p.price}</p>
    <p className={s.productDescription}>
      {p.description}
    </p>
    <button className={s.addToCartBtn}>Thêm vào Giỏ hàng</button>
  </div>
</div>


	);
};

export default ProductDetail;
