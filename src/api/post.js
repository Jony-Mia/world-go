// src/api/posts.js

const postCache = new Map();
let postsPromise = null;

export const fetchPosts = () => {
  if (!postsPromise) {
    postsPromise = fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json());
  }
  return postsPromise;
};

export const fetchPost = (id) => {
  if (!postCache.has(id)) {
    const promise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json());

    postCache.set(id, promise);
  }

  return postCache.get(id);
};