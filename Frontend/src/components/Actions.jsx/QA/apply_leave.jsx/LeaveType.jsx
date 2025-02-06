import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function LeaveType() {
  const leaveTypes = [
    { title: 'Paid Leave' },
    { title: 'Unpaid Leave' },
    { title: 'Work Leave' },
    { title: 'Sick Leave' },
  ];

  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={leaveTypes}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="Leave Type" margin="normal" />
      )}
    />
  );
}
