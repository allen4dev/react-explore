import React, { useState, useEffect } from 'react';

import { firestore } from 'utils/firebase';

import PostsList from 'components/posts/PostsList';
import AddPost from 'components/posts/AddPost';

import { normalizeDocument } from 'utils/helpers';

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

  async function deletePost(id) {
    const newPosts = posts.filter(post => post.id !== id);

    await firestore
      .collection('posts')
      .doc(id)
      .delete();

    setPosts(newPosts);
  }

  return (
    <div>
      <AddPost createPost={createPost} />
      <PostsList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
