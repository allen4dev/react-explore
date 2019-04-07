import React, { useState, useEffect } from 'react';

import Header from 'components/Header';
import PostsList from 'components/posts/PostsList';
import AddPost from 'components/posts/AddPost';

import { auth } from 'utils/firebase';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => setUser(authUser));

    return () => {
      unsubscribe();
    };
  });

  return (
    <div>
      <Header user={user} />
      <AddPost />
      <PostsList />
    </div>
  );
}

export default App;
