import React, { useState } from 'react';
import './AllProducts.css';

const products = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  image: `https://via.placeholder.com/50`, // Placeholder image URL
  price: `$${(Math.random() * 100).toFixed(2)}`,
  stock: Math.floor(Math.random() * 100) + 1, // Random stock between 1 and 100
  status: index % 2 === 0 ? 'In Stock' : 'Out of Stock',
}));

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="all-products">
      <h3>All Products</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Amount in Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td><img src={product.image} alt={product.name} /></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${product.stock}%` }}>{product.stock}%</div>
                </div>
              </td>
              <td className={product.status === 'In Stock' ? 'in-stock' : 'out-of-stock'}>{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
