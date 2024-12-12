
   


import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const apiKey = '64cfacd8e6594e7b8a50179a0aaf6c06' 
      const url = `https://newsapi.org/v2/everything?q=real+estate&apiKey=${apiKey}`;

      try {
        const response = await axios.get(url);
        setBlogs(response.data.articles);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="App">
      <h1>Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog) => {
          if (blog.title && blog.description && blog.urlToImage) {
            return (
              <div key={blog.title} className="blog-item">
                <img src={blog.urlToImage} alt={blog.title} />
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <a href={blog.url} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
