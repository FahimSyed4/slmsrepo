import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Faculty() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#f0f0f0', padding: '10px 0' }}>
        <nav>
          <Link to="addFaculty" style={linkStyle}>Add Faculty</Link>
          <Link to="viewFaculty" style={linkStyle}>View Faculty</Link>
          <Link to="updateFaculty" style={linkStyle}>Update Faculty</Link>
          <Link to="deleteFaculty" style={linkStyle}>Delete Faculty</Link>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

const linkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '10px 20px',
  transition: 'background-color 0.3s ease',
};

