import React from 'react';
import styled from '@emotion/styled';

const Post = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

function PostsList({ posts, deletePost }) {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id}>
          <p>{post.text}</p>
          <button type="button" onClick={() => deletePost(post.id)}>
            Delete
          </button>
        </Post>
      ))}
    </div>
  );
}

export default PostsList;
