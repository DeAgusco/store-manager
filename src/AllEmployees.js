import React, { useState } from 'react';
import './AllEmployees.css';

const employees = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Employee ${index + 1}`,
  profilePicture: `https://via.placeholder.com/50`, // Placeholder image URL
  position: `Position ${index % 5}`,
  department: `Department ${index % 3}`,
  status: index % 2 === 0 ? 'Active' : 'Inactive',
}));

const AllEmployees = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 20;

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="all-employees">
      <h3>All Employees</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td><img src={employee.profilePicture} alt={employee.name} /></td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td className={employee.status === 'Active' ? 'active' : 'inactive'}>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(employees.length / employeesPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllEmployees;
