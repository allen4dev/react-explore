import React, { useRef } from 'react';
import { storage, firestore } from 'utils/firebase';

function Profile({ user }) {
  const image = useRef();

  const uploadProfilePhoto = async e => {
    e.preventDefault();

    const img = image.current.files[0];

    const uploadedPhoto = await storage
      .ref()
      .child('users')
      .child('profiles')
      .child(user.uid)
      .child(img.name)
      .put(img);

    const photoURL = await uploadedPhoto.ref.getDownloadURL();

    await firestore
      .collection('users')
      .doc(user.uid)
      .update({ photoURL });
  };

  return (
    <div>
      <p>Username: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Description: {user.description}</p>
      <form onSubmit={uploadProfilePhoto}>
        <label htmlFor="image">
          Upload profile image:
          <input id="image" name="image" type="file" ref={image} />
          <button type="submit">Upload photo</button>
        </label>
      </form>
    </div>
  );
}

export default Profile;
