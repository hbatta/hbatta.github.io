import { Buffer } from 'buffer';
window.Buffer = Buffer;

import matter from 'gray-matter';

// Import markdown files directly
import welcomePost from '../posts/welcome-to-my-blog.md?raw';
import vitePost from '../posts/migrating-to-vite.md?raw';
import coffeePost from '../posts/coffee-and-code.md?raw';

const postFiles = {
  'welcome-to-my-blog': welcomePost,
  'migrating-to-vite': vitePost,
  'coffee-and-code': coffeePost,
};

export const getAllPosts = () => {
  const posts = Object.entries(postFiles).map(([filename, content]) => {
    const { data, content: markdown } = matter(content);
    return {
      ...data,
      content: markdown,
      slug: data.slug || filename,
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPostBySlug = (slug) => {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
};
