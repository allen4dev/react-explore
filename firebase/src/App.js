import React, { useState, useEffect } from 'react';
import { firestore } from 'utils/firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const snapshot = await firestore.collection('posts').get();

      const results = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));

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

export default App;
