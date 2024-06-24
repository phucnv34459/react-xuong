import React, { useContext } from "react";
import ProductItem from "../components/ProductItem";
import Banner from "../components/Banner";
import { ProductContext } from "../contexts/ProductContext";


function Home() {
	const context = useContext(ProductContext);
	return (
		<>  
		    
		<Banner/>
			<div className="row">
				{context?.state.products.map((item) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3"  key={item.id}>
						<ProductItem data={item} />
					</div>
				))}
			</div>
		</>
	);
}

export default Home;
