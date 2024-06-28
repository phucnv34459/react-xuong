import React, { useEffect, useState } from 'react'
import instance from '../axios';
import ProductItem from './ProductItem';


const Seach = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    (async () => {
        try {
            const { data } = await instance.get("/products");
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    })();
}, []);

useEffect(() => {
    const filtered = products.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [query, products]);
  const handleSearch = () => {
    const filtered = products.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  return (
    <div>
        <div>
        <input
      className='border border-black'
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)} 
      />
        </div>
        <div>
        <ul>
        {filteredItems.map(product => (
          <ProductItem  key={product.id} data={product}/>
        ))}
      </ul>
        </div>
      
    </div>
  )
}

export default Seach

