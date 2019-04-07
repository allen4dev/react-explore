import React, { useState, useEffect } from 'react';

import Header from 'components/Header';
import Profile from 'components/users/Profile';
import PostsList from 'components/posts/PostsList';
import AddPost from 'components/posts/AddPost';

import { auth } from 'utils/firebase';
import { getOrCreateProfile } from 'utils/firebase/helpers';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async authUser => {
      const user = await getOrCreateProfile(authUser, {
        description: 'Get this from some form',
      });

      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Header user={currentUser} />
      {currentUser && <Profile user={currentUser} />}
      <AddPost user={currentUser} />
      <PostsList />
    </div>
  );
}

export default App;
