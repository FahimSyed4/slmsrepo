import React from 'react';
import { Paper, Typography } from '@mui/material';

const ViewFaculty = ({ faculties = []}) => {
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5">Available Faculties</Typography>
      <ul>
        {faculties.map((faculty, index) => (
          <li key={index}>{faculty.name}</li>
        ))}
      </ul>
    </Paper>
  );
};

export default ViewFaculty;
