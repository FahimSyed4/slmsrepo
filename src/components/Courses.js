// CourseSelection.js

import React, { useState } from 'react';
import { Grid, Paper, Select, MenuItem, Button, Typography, TextField, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const CourseSelection = () => {
  const [courses, setCourses] = useState(['Mathematics', 'Physics', 'Computer Science']);
  const [newCourse, setNewCourse] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleAddCourse = () => {
    if (newCourse.trim() !== '') {
      setCourses([...courses, newCourse]);
      setNewCourse('');
    }
  };

  const handleRemoveCourse = (course) => {
    setCourses(courses.filter(item => item !== course));
  };

  const handleUpdateCourse = () => {
    if (selectedCourse && newCourse.trim() !== '') {
      const updatedCourses = courses.map(course => {
        if (course === selectedCourse) {
          return newCourse;
        }
        return course;
      });
      setCourses(updatedCourses);
      setSelectedCourse('');
      setNewCourse('');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Course Selection</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5">Available Courses</Typography>
          <List>
            {courses.map(course => (
              <ListItem key={course}>
                <ListItemText primary={course} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveCourse(course)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5">Add New Course</Typography>
          <TextField
            label="Course Name"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddCourse}>
            <AddIcon /> Add Course
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5">Update Course</Typography>
          <Select
            label="Course"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value="">Select Course</MenuItem>
            {courses.map(course => (
              <MenuItem key={course} value={course}>{course}</MenuItem>
            ))}
          </Select>
          <TextField
            label="New Course Name"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleUpdateCourse}>
            Update Course
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CourseSelection;
