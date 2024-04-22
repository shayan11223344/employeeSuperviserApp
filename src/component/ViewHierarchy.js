// import React from 'react';
// import './style.css';

// const ViewHierarchy = ({ hierarchy, handleDelete, handleSearch }) => {
//   return (
//     <div className='hierarchy_wrapper'>
//       <h2>Employee Hierarchy</h2>
//       <div>
//         <input
//           name='search'
//           className='search_bar'
//           placeholder='Search here...'
//           onChange={({ target }) => handleSearch(target.value)}
//         />
//       </div>

//       <div class="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Sr no#</th>
//               <th>Employee Name</th>
//               <th>Supervisor</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {hierarchy.length ? hierarchy.map((obj) => (
//               <tr key={obj.id}>
//                 <td>{obj.id}</td>
//                 <td>{obj.employee}</td>
//                 <td>{obj.supervisor}</td>
//                 <td>
//                   <button className='add_btn' onClick={() => handleDelete(obj.id)}>Delete</button>
//                 </td>
//               </tr>
//             )) :
//               <p style={{ textAlign: 'center' }}>No records found!</p>}
//           </tbody>
//         </table>
//       </div>
//     </div>

//   );
// };

// export default ViewHierarchy;



import React, { useState } from 'react';
import './style.css';

const ViewHierarchy = ({ hierarchy, handleDelete, handleSearch }) => {
  const [sortConfig, setSortConfig] = useState({ key: 'employee', direction: 'ascending' });

  const sortedHierarchy = React.useMemo(() => {
    let sortableItems = [...hierarchy];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [hierarchy, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key === columnKey) {
      return sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽';
    }
    return null; // or return a default icon if you prefer every column to have an icon always
  };

  return (
    <div className='hierarchy_wrapper'>
      <h2>Employee Hierarchy</h2>
      <div>
        <input
          name='search'
          className='search_bar'
          placeholder='Search here...'
          onChange={({ target }) => handleSearch(target.value)}
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Sr no#</th>
              <th onClick={() => requestSort('employee')}>Employee Name<SortIcon columnKey="employee" /></th>
              <th onClick={() => requestSort('supervisor')}>Supervisor<SortIcon columnKey="supervisor" /></th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedHierarchy.length ? sortedHierarchy.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.employee}</td>
                <td>{obj.supervisor}</td>
                <td>
                  <button className='add_btn' onClick={() => handleDelete(obj.id)}>Delete</button>
                </td>
              </tr>
            )) :
              <tr><td colSpan="4" style={{ textAlign: 'center' }}>No records found!</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewHierarchy;


