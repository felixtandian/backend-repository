import express from 'express';
import { updateUserData, fetchUserData } from '../controller/userController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.put('/updateUsers', authMiddleware, updateUserData);
router.get('/users/:id', authMiddleware, fetchUserData);

export default router;
