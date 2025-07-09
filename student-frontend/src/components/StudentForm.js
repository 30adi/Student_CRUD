

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';

function StudentForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();
  const { id } = useParams();  // 👈 Get ID if editing

  // Load existing student data if editing
  useEffect(() => {
    if (id) {
      api.get(`${id}/`).then(res => {
        setFormData(res.data);
      }).catch(err => {
        console.error("Error loading student:", err);
      });
    }
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
  try {
    if (id) {
        await api.post(`update-student/${id}`, formData);  
    } else {
        await api.post('add-student', formData);
    }


    alert("Student saved. Redirecting to home...");
    navigate('/', { replace: true });  // 👈 This should run after success
  } catch (err) {
    console.error("Error saving:", err);
  }
};


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{id ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;