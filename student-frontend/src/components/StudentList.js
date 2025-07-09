import React, { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
    const res = await api.get('/');
    console.log("Fetched students:", res.data);
    setStudents(res.data);
  } catch (err) {
    console.error("Error fetching students:", err);
  }
};

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await api.delete(`${id}/`);
        fetchStudents(); // refresh list
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  return (
    
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Student List</h2>
      <ul className="space-y-2">
        {students.map(student => (
          <li key={student.id} className="border p-2 rounded flex justify-between">
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <div className="space-x-2">
              <button
                onClick={() => navigate(`/edit/${student.id}`)}
                className="px-2 py-1 bg-yellow-400 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteStudent(student.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
