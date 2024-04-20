import React, { useState } from 'react';

const AssignSupervisorDropdown = ({ employees, onSelect }) => {
  const [selectedSupervisor, setSelectedSupervisor] = useState('');

  const handleSelect = (e) => {
    const supervisor = e.target.value;
    setSelectedSupervisor(supervisor);
    onSelect(supervisor);
  };

  return (
    <select value={selectedSupervisor} onChange={handleSelect}>
      <option value="">Select Supervisor</option>
      {employees.map((employee) => (
        <option key={employee} value={employee}>
          {employee}
        </option>
      ))}
    </select>
  );
};

export default AssignSupervisorDropdown;
