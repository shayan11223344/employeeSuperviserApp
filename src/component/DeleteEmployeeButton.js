import React from 'react';

const DeleteEmployeeButton = ({ onDelete }) => {
  return <button onClick={onDelete}>Delete Employee</button>;
};

export default DeleteEmployeeButton;
