import React from "react";
import ProductItem from "../components/ProductItem";

const About = ({products: data}) => {
	return <div><h1 class="text-center mb-5">Danh sách sản phẩm</h1>
	<div className="row">
		{data.map((item) => (
			<div className="col-12 col-sm-6 col-md-4 col-lg-3"  key={item.id}>
				<ProductItem data={item} />
			</div>
		))}
	</div></div>;
};

export default About;
