import React, { useState, useEffect } from 'react';

import { firestore } from 'utils/firebase';

import { normalizeDocument } from 'utils/helpers';

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const snapshot = await firestore.collection('posts').get();

      const results = snapshot.docs.map(normalizeDocument);

      setPosts(results);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
