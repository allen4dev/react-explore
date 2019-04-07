import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { firestore } from 'utils/firebase';

import { normalizeDocument } from 'utils/helpers';

const Post = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const unsubscribe = await firestore
        .collection('posts')
        .onSnapshot(snapshot => {
          const results = snapshot.docs.map(normalizeDocument);

          setPosts(results);
        });

      return unsubscribe;
    }

    const unsubscribe = fetchPosts();

    return () => {
      unsubscribe();
    };
  }, []);

  const deletePost = async id => {
    await firestore
      .collection('posts')
      .doc(id)
      .delete();
  };

  const updatePost = async id => {
    await firestore
      .collection('posts')
      .doc(id)
      .update({ text: 'Get this value somewhere else' });
  };

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id}>
          <p>{post.text}</p>

          <button type="button" onClick={() => updatePost(post.id)}>
            Update
          </button>

          <button type="button" onClick={() => deletePost(post.id)}>
            Delete
          </button>
        </Post>
      ))}
    </div>
  );
}

export default PostsList;
