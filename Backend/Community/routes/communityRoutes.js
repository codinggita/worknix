import express from 'express';
import { createCommunity, inviteUser, makeVIP } from '../controllers/communityController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', protect, createCommunity);
router.post('/invite', protect, inviteUser);
router.post('/make-vip', protect, makeVIP);

export default router;
