const express = require('express');
const { createCommunity, deleteCommunity, addMember, removeMember, getCommunities } = require('../controllers/communityController');
const router = express.Router();

router.post('/create', createCommunity);
router.delete('/:id', deleteCommunity);
router.post('/:id/add-member', addMember);
router.delete('/:id/remove-member', removeMember);
router.get('/explore', getCommunities);

module.exports = router;
