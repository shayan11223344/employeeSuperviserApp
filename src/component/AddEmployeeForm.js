import React, { useState } from 'react';
import './style.css';
import { toast } from 'react-toastify';

const AddEmployeeForm = ({ onSubmit }) => {
    const defaultValues = { employee: '', supervisor: '' };
    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!values.employee || !values.supervisor) {
            const newErrors = {};
            if (!values.employee) {
                newErrors.employee = 'Employee name is required';
            }
            if (!values.supervisor) {
                newErrors.supervisor = 'Supervisor is required';
            }
            setErrors(newErrors);
            return; 
        }

        toast.success('Employee added successfully', {
            autoClose: true,
        });
        onSubmit(values);
        setValues(defaultValues);
        setErrors({}); 
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const supervisorData = [
        { id: '1', name: 'ali' },
        { id: '2', name: 'khalid' },
        { id: '3', name: 'arsalan' },
        { id: '4', name: 'fazal' },
        { id: '5', name: 'ahmad' },
    ];

    return (
        <form onSubmit={handleSubmit} className='add_employee_form'>
            <input
                type="text"
                className='input'
                placeholder="Enter employee name"
                name='employee'
                value={values.employee}
                onChange={handleChange}
            />
            {errors.employee && <span style={{color:'red'}} className="error">{errors.employee}</span>}
            <select
                name='supervisor'
                className='input'
                onChange={handleChange}
                value={values.supervisor}
               
            >
                <option value="">Select Supervisor</option>
                {supervisorData.map((obj) => (
                    <option key={obj.id} value={obj.name}>
                        {obj.name}
                    </option>
                ))}
            </select>
            {errors.supervisor && <span style={{color:'red'}} className="error">{errors.supervisor}</span>}
            <button type="submit" className='add_btn'>Add Employee</button>
        </form>
    );
};

export default AddEmployeeForm;
