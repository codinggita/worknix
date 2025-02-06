import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LeaveDescription() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }} // Adjust width to 100% for a better layout
      noValidate
      autoComplete="off"
    >
      {/* Other fields (e.g., Leave Type) */}
      
      {/* Add a Leave Description field */}
      <div>
        <TextField
          id="leave-description"
          label="Leave Description"
          placeholder="Enter reason for leave"
          multiline
          rows={4} // You can adjust the number of rows to suit the layout
          variant="outlined"
        />
      </div>
    </Box>
  );
}
