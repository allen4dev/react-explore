import React, { useState, useEffect } from 'react';

import { firestore } from 'utils/firebase';

import { normalizeDocument } from 'utils/helpers';
import PostsList from 'components/posts/PostsList';
import AddPost from 'components/posts/AddPost';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const snapshot = await firestore.collection('posts').get();

      const results = snapshot.docs.map(normalizeDocument);

      setPosts(results);
    }

    fetchPosts();
  }, []);

  async function createPost(post) {
    const postRef = await firestore.collection('posts').add(post);

    const created = await postRef.get();

    setPosts([...posts, normalizeDocument(created)]);
  }

  return (
    <div>
      <AddPost createPost={createPost} />
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
