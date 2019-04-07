import React from 'react';

import PostsList from 'components/posts/PostsList';
import AddPost from 'components/posts/AddPost';

function App() {
  return (
    <div>
      <AddPost />
      <PostsList />
    </div>
  );
}

export default App;
