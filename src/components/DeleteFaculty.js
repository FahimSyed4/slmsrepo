import React, { useState } from 'react';
import { Paper, Typography, Button } from '@mui/material';

const RemoveFaculty = ({ faculties = [], onRemove }) => {
  const [selectedFaculty, setSelectedFaculty] = useState('');

  const handleRemoveFaculty = () => {
    if (selectedFaculty) {
      onRemove(selectedFaculty);
      setSelectedFaculty('');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5">Remove Faculty</Typography>
      <select onChange={(e) => setSelectedFaculty(e.target.value)}>
        <option value="">Select Faculty</option>
        {faculties.map((faculty, index) => (
          <option key={index} value={faculty.name}>
            {faculty.name}
          </option>
        ))}
      </select>
      {selectedFaculty && (
        <Button variant="contained" color="secondary" onClick={handleRemoveFaculty}>
          Remove Faculty
        </Button>
      )}
    </Paper>
  );
};

export default RemoveFaculty;
