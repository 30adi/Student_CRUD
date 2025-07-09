import React from 'react';
import StudentList from '../components/StudentList';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    
    <div className="p-4">
      <p></p>
      <Link to="/add">
        <button className="px-4 py-2 bg-green-600 text-white rounded mb-4">
            + Add New Student
        </button>
    </Link>
    <StudentList />
    </div>
  );
};

export default Home;