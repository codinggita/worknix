const express = require("express");
const router = express.Router();
const LeaveRequest = require("../models/LeaveRequest");

// Create a leave request
router.post("/", async (req, res) => {
  try {
    const { employeeId, startDate, endDate, reason, status } = req.body;
    const newLeave = new LeaveRequest({
      employeeId,
      startDate,
      endDate,
      reason,
      status: status || "pending",
    });

    await newLeave.save();
    res.status(201).json({ message: "Leave request submitted successfully", newLeave });
  } catch (error) {
    res.status(500).json({ message: "Error creating leave request", error: error.message });
  }
});

// Get all leave requests
router.get("/", async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.find();
    res.status(200).json(leaveRequests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leave requests", error: error.message });
  }
});

// Update a leave request
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLeave = await LeaveRequest.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!updatedLeave) {
      return res.status(404).json({ message: "Leave request not found" });
    }
    
    res.status(200).json({ message: "Leave request updated successfully", updatedLeave });
  } catch (error) {
    res.status(500).json({ message: "Error updating leave request", error: error.message });
  }
});

// Delete a leave request
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLeave = await LeaveRequest.findByIdAndDelete(id);
    
    if (!deletedLeave) {
      return res.status(404).json({ message: "Leave request not found" });
    }
    
    res.status(200).json({ message: "Leave request deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting leave request", error: error.message });
  }
});

// Approve or Reject a leave request
router.patch("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["approved", "rejected", "pending"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedLeave = await LeaveRequest.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedLeave) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    res.status(200).json({ message: `Leave request ${status}`, updatedLeave });
  } catch (error) {
    res.status(500).json({ message: "Error updating leave status", error: error.message });
  }
});

module.exports = router;
