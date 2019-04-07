import { firestore } from './index';

// eslint-disable-next-line
export async function getOrCreateProfile(user, additionalInfo = {}) {
  if (!user) return null;

  const userRef = firestore.collection('users').doc(user.uid);

  const snapshot = await userRef.get();

  if (snapshot.exists) return snapshot.data();

  const { displayName, email, photoURL } = user;
  const createdAt = new Date();

  await userRef.set({
    displayName,
    email,
    photoURL,
    createdAt,
    ...additionalInfo,
    uid: user.uid,
  });

  const created = await userRef.get();

  return created.data();
}
