// AddFaculty.js
import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddFaculty = ({ onAdd }) => {
  const [facultyName, setFacultyName] = useState('');
  const [facultyDetails, setFacultyDetails] = useState('');
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddFaculty = () => {
    if (facultyName.trim() !== '' && facultyDetails.trim() !== '') {
      const newFaculty = {
        name: facultyName,
        details: facultyDetails,
      };
      onAdd(newFaculty);
      setFacultyName('');
      setFacultyDetails('');
      setSnackbarOpen(true);
    } else {
      setError('Please fill in both name and details');
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5">Add Faculty</Typography>
      <TextField
        label="Faculty Name"
        value={facultyName}
        onChange={(e) => setFacultyName(e.target.value)}
        fullWidth
        margin="normal"
        error={error !== ''}
        helperText={error}
      />
      <TextField
        label="Faculty Details"
        value={facultyDetails}
        onChange={(e) => setFacultyDetails(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={3}
      />
      <Button variant="contained" color="primary" onClick={handleAddFaculty}>
        <AddIcon /> Add Faculty
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Faculty added successfully"
      />
    </Paper>
  );
};

export default AddFaculty;
