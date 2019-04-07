import React from 'react';

function Profile({ user }) {
  return (
    <div>
      <p>Username: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Description: {user.description}</p>
    </div>
  );
}

export default Profile;
