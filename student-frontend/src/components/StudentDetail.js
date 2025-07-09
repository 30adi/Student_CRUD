import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const StudentDetail = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    api.get(`/${id}/`).then(res => setStudent(res.data));
  }, [id]);

  if (!student) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Student Detail</h2>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
    </div>
  );
};

export default StudentDetail;