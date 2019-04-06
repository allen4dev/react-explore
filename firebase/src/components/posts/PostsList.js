import React from 'react';

function PostsList({ posts }) {
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
