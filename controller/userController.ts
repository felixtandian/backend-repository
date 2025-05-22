import { Request, Response } from 'express';
import { RequestHandler } from 'express';
import { updateUser, getUserById } from '../repository/userCollection';
import { User } from '../entities/user';

export const updateUserData: RequestHandler = async (req, res) => {
  try {
    const user: User = req.body;
    if (!user.id) {
      res.status(400).json({ message: 'User ID is required' });
      return;
    }
    await updateUser(user);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Update failed', error });
  }
};

export const fetchUserData: RequestHandler = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Fetch failed', error });
  }
};