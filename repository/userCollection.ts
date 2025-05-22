import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';

const USERS_COLLECTION = 'USERS';

export const updateUser = async (user: User): Promise<void> => {
  await db.collection(USERS_COLLECTION).doc(user.id).set(user, { merge: true });
};

export const getUserById = async (userId: string): Promise<User | null> => {
  const doc = await db.collection(USERS_COLLECTION).doc(userId).get();
  if (!doc.exists) return null;
  return doc.data() as User;
};

