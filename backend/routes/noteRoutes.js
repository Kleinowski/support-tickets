const express = require('express');
const { getNodes, addNote } = require('../controllers/noteController');
const router = express.Router({ mergeParams: true });

const protect = require('../middleware/authMiddleware');

router.route('/').get(protect, getNodes).post(protect, addNote);

module.exports = router;
