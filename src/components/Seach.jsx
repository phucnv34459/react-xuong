// import React, { useEffect, useState, useCallback } from 'react'
// import instance from '../axios';

// function Seach(){
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredData, setFilteredData] = useState([]);
  
//     const handleSearchChange = useCallback((event) => {
//       setSearchTerm(event.target.value);
//     }, []);
  
//     const fetchData = useCallback(async () => {
//       try {
//         const { data } = await instance.get("/products");
//         setFilteredData(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }, []);
  
//     useEffect(() => {
//       fetchData();
//     }, [fetchData]);
  
//     useEffect(() => {
//       const filteredResults = filteredData.filter((item) =>
//         item.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredData(filteredResults);
//     }, [searchTerm, filteredData]);
  
//     return (
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Tìm kiếm..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <button onClick={fetchData}>Tìm kiếm</button>
//       </div>
//     );
// }

// export default Seach

