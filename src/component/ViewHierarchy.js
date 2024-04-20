import React from 'react';
import './style.css';

const ViewHierarchy = ({ hierarchy, handleDelete, handleSearch }) => {
  return (
    <div className='hierarchy_wrapper'>
      <h2>Employee Hierarchy</h2>
      <input
        name='search'
        className='search_bar'
        placeholder='Search here...'
        onChange={({ target }) => handleSearch(target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Sr no#</th>
            <th>Employee Name</th>
            <th>Supervisor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hierarchy.length ? hierarchy.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.employee}</td>
              <td>{obj.supervisor}</td>
              <td>
                <button className='add_btn' onClick={() => handleDelete(obj.id)}>Delete</button>
              </td>
            </tr>
          )) :
            <p>No records found!</p>}
        </tbody>
      </table>
    </div>
  );
};

export default ViewHierarchy;
