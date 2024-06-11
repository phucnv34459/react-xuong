import React from "react";
import ProductItem from "../components/ProductItem";

function Home({ data, }) {
	return (
		<>  
		    
			
			<div className="row">
				{data.map((item) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3"  key={item.id}>
						<ProductItem data={item} />
					</div>
				))}
			</div>
		</>
	);
}

export default Home;
