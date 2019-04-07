import React from 'react';

import Header from 'components/Header';
import PostsList from 'components/posts/PostsList';
import AddPost from 'components/posts/AddPost';

function App() {
  return (
    <div>
      <Header />
      <AddPost />
      <PostsList />
    </div>
  );
}

export default App;
