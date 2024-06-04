import React, { useState } from 'react';
import './AllProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [actionType, setActionType] = useState('');
  const [quantity, setQuantity] = useState(0);

  const productsPerPage = 20;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleIconClick = (product, type) => {
    setModalProduct(product);
    setActionType(type);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setQuantity(0);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleModalSubmit = () => {
    if (actionType === 'add') {
      console.log(`Adding ${quantity} to ${modalProduct.name}`);
    } else if (actionType === 'remove') {
      console.log(`Removing ${quantity} from ${modalProduct.name}`);
    }
    handleModalClose();
  };

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
            <th>Actions</th>
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
              <td>
                <FontAwesomeIcon icon={faPlus} onClick={() => handleIconClick(product, 'add')} className="action-icon" />
                <FontAwesomeIcon icon={faMinus} onClick={() => handleIconClick(product, 'remove')} className="action-icon" />
              </td>
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
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h4>{actionType === 'add' ? 'Add Quantity' : 'Remove Quantity'} for {modalProduct.name}</h4>
            <input type="number" value={quantity} onChange={handleQuantityChange} placeholder="Quantity" />
            <button onClick={handleModalSubmit}>{actionType === 'add' ? 'Add' : 'Remove'}</button>
            <button onClick={handleModalClose}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
