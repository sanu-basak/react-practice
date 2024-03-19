import { useEffect, useState } from 'react';

const ProductPagination = () => {
    const [products, setProducts] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
  
    const fetchData = async () => {
      const data = await fetch("https://dummyjson.com/products?limit=100");
      const json = await data.json();
      setProducts(json.products);
      setTotalPage(Math.ceil(json.total / 10)); // Calculate total pages
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handlePagination = (selectedPage) => {
      if (selectedPage > 0 && selectedPage <= totalPage) {
        setCurrentPage(selectedPage);
      }
    };
  
    return (
      <div>
        <div className='main-table'>
          <h1 className='header'>React Pagination</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.slice((currentPage - 1) * 10, currentPage * 10).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
                    <td><img className='product-logo' src={item.images[4] ?? item.images[0]} alt='product-logo'/></td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='pagination'>
          <span className='pagination-btn' onClick={() => handlePagination(currentPage - 1)}>Prev</span>
          <span>{currentPage*10} of {totalPage*10}</span>
          <span className='pagination-btn' onClick={() => handlePagination(currentPage + 1)}>Next</span>
        </div>
      </div>
    );
}

export default ProductPagination;