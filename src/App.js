import React, { useState } from 'react';
import AddEmployeeForm from './component/AddEmployeeForm';
import ViewHierarchy from './component/ViewHierarchy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [originalEmployees, setOriginalEmployees] = useState([]);


  const handleAddEmployee = (data) => {
    const newEmployee = { id: employees?.length + 1, ...data };
    setEmployees([...employees, newEmployee]);
    setOriginalEmployees([...originalEmployees, newEmployee]);
  };

  const handleDeleteRecord = (id) => {
    toast.success('Employee deleted successfully ');
    setEmployees(employees.filter((obj) => obj?.id !== id));
    setOriginalEmployees(originalEmployees.filter((obj) => obj?.id !== id));
  };

  const handleSearch = (val) => {
    if (val.length) {
      const filtered = employees.filter(
        (obj) => obj.employee.includes(val) || obj.supervisor.includes(val)
      );
      setEmployees(filtered);
    } else {
      setEmployees([...originalEmployees]);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Employee Management System</h1>
      <AddEmployeeForm onSubmit={handleAddEmployee} />
      <ViewHierarchy
        hierarchy={employees}
        handleDelete={handleDeleteRecord}
        handleSearch={handleSearch}
      />
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default App;

