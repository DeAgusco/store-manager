import React, { useState } from 'react';
import './AddEmployee.css';

const AddEmployee = () => {
  const [surname, setSurname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [dob, setDob] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log({ surname, firstName, dob, position, image });
  };

  return (
    <div className="add-employee-container">
      <div className="add-employee-box">
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <select
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              <option value="">Select Position</option>
              <option value="Manager">Manager</option>
              <option value="Assistant Manager">Assistant Manager</option>
              <option value="Cashier">Cashier</option>
              <option value="Stock Clerk">Stock Clerk</option>
              <option value="Sales Associate">Sales Associate</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <button type="submit" className="add-employee-button">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
