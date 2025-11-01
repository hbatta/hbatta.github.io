import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../utils/blogPosts';
import '../App.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="container" style={{ marginTop: '60px', textAlign: 'center' }}>
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" style={{ marginTop: '20px', display: 'inline-block' }}>
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container blog-post-container" style={{ marginTop: '40px', marginBottom: '60px' }}>
      <Link to="/blog" className="blog-back-link">
        ← Back to Blog
      </Link>

      <article className="blog-post-article">
        <header className="blog-post-header">
          <h1>{post.title}</h1>
          <p className="blog-post-meta">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>

        <div className="blog-post-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
