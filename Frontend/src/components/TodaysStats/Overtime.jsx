import React, { useEffect, useState } from 'react';
import styles from './Overtime.module.css';

const API_URL = "http://localhost:3000/overtime"; // Update if needed

const Overtime = () => {
  const [overtimeRequests, setOvertimeRequests] = useState([]);

  useEffect(() => {
    fetchOvertimeRequests();
  }, []);

  const fetchOvertimeRequests = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setOvertimeRequests(data);
    } catch (error) {
      console.error('Error fetching overtime data:', error);
    }
  };

  const handleApprove = async (employeeId) => {
    try {
      await fetch(`${API_URL}/${employeeId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" }),
      });
      fetchOvertimeRequests();
    } catch (error) {
      console.error("Error approving overtime request:", error);
    }
  };

  const handleReject = async (employeeId) => {
    try {
      await fetch(`${API_URL}/${employeeId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "declined" }),
      });
      fetchOvertimeRequests();
    } catch (error) {
      console.error("Error rejecting overtime request:", error);
    }
  };

  const handleDelete = async (employeeId) => {
    try {
      await fetch(`${API_URL}/${employeeId}`, { method: "DELETE" });
      fetchOvertimeRequests();
    } catch (error) {
      console.error("Error deleting overtime request:", error);
    }
  };

  return (
    <div className={styles.overtime}>
      <h2 className={styles.overtimeRequst}>Overtime Requests</h2>
      {overtimeRequests.length > 0 ? (
        overtimeRequests.map((request) => (
          <div key={request.employee_id} className={styles.overtimeCard}>
            <div className={styles.profile}>
              <img alt="Profile" src={request.profileImage || 'default.png'} />
              <div>
                <strong>{request.employee_name}</strong>
                <div className={styles.position}>{request.position}</div>
              </div>
            </div>
            <div className={styles.details}>
              <p><strong>Date:</strong> {request.date}</p>
              <p><strong>Hours:</strong> {request.hours_requested} hours</p>
              <p><strong>Reason:</strong> {request.reason}</p>
            </div>
            <div className={styles.actions}>
              <button className={styles.approve} onClick={() => handleApprove(request.employee_id)}>Approve</button>
              <button className={styles.reject} onClick={() => handleReject(request.employee_id)}>Reject</button>
            </div>
          </div>
        ))
      ) : (
        <p>No overtime requests available.</p>
      )}
    </div>
  );
};

export default Overtime;

