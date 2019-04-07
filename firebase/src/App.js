import React, { useState, useEffect } from 'react';

import Header from 'components/Header';
import PostsList from 'components/posts/PostsList';
import AddPost from 'components/posts/AddPost';

import { auth } from 'utils/firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => setUser(authUser));

    return () => {
      unsubscribe();
    };
  });

  return (
    <div>
      <Header user={user} />
      <AddPost user={user} />
      <PostsList />
    </div>
  );
}

export default App;
