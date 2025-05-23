import { Request, Response } from 'express';
import { RequestHandler } from 'express';
import { updateUser, getUserById } from '../repository/userCollection';
import { User } from '../entities/user';

export const updateUserData: RequestHandler = async (req, res) => {
  try {
    const user: User = req.body;
    if (!user.id) {
      res.status(400).json({status: 400, message: 'User ID is required' });
      return;
    }
    await updateUser(user);
    res.status(200).json({status: 200, message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({status: 500,  message: 'Update failed', error });
  }
};

export const fetchUserData: RequestHandler = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);
    if (!user) {
      res.status(404).json({status: 400, message: 'User not found' });
      return;
    }
    res.status(200).json({status: 200, message: 'User found !', data:user});
  } catch (error) {
    res.status(500).json({status:500, message: 'Fetch failed', error });
  }
};