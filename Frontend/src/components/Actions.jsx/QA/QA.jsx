import React from 'react';
import  DatePickerValue from './apply_leave.jsx/DatePickerValue';  // Import the ApplyLeave component
import LeaveType from './apply_leave.jsx/LeaveType';
import LeaveDescription from './apply_leave.jsx/LeaveDescription'
const QA = () => {
  return (
    <>
      <DatePickerValue />
      <LeaveType /> 
      <LeaveDescription />
    </>
  );
};


export default QA;
