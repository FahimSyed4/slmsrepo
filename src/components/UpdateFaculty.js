import React, { useState } from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';

const UpdateFaculty = ({ faculties = [], onUpdate }) => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [newName, setNewName] = useState('');
  const [newDetails, setNewDetails] = useState('');

  const handleUpdateFaculty = () => {
    if (selectedFaculty && newName.trim() !== '' && newDetails.trim() !== '') {
      const updatedFaculty = {
        name: newName,
        details: newDetails,
      };
      onUpdate(selectedFaculty, updatedFaculty);
      setSelectedFaculty('');
      setNewName('');
      setNewDetails('');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5">Update Faculty</Typography>
      <select onChange={(e) => setSelectedFaculty(e.target.value)}>
        <option value="">Select Faculty</option>
        {faculties.map((faculty, index) => (
          <option key={index} value={faculty.name}>
            {faculty.name}
          </option>
        ))}
      </select>
      {selectedFaculty && (
        <div>
          <TextField
            label="New Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="New Details"
            value={newDetails}
            onChange={(e) => setNewDetails(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />
          <Button variant="contained" color="primary" onClick={handleUpdateFaculty}>
            Update Faculty
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default UpdateFaculty;
