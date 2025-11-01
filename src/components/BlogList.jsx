import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/blogPosts';
import '../App.css';

const BlogList = () => {
  const posts = getAllPosts();
  console.log('BlogList - Posts loaded:', posts);

  return (
    <div className="container" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Link to="/" className="back-home-link">← Back to Home</Link>
      <h1>Blog</h1>
      <p style={{ fontSize: '16px', marginBottom: '40px', marginTop: '20px' }}>
        Thoughts on software engineering, technology, and career growth.
      </p>

      <div className="blog-posts-grid">
        {posts.map((post) => (
          <article key={post.slug} className="blog-post-card">
            <Link to={`/blog/${post.slug}`} className="blog-post-link">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="blog-post-description">{post.description}</p>
              <span className="blog-read-more">Read more →</span>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '60px', fontSize: '16px', color: '#a0a0a0' }}>
          No blog posts yet. Check back soon!
        </p>
      )}
    </div>
  );
};

export default BlogList;
