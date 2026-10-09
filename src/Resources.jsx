import React from 'react';
import './Resources.css';

function Resources() {
  return (
    <div className="resources-container">
      <header className="resources-header">
        <h1>GDGC Study Resources</h1>
        <p>Explore curated roadmaps, tools, and learning materials</p>
      </header>

      <div className="resources-grid">
        <div className="resource-card">
          <h3>Web Development</h3>
          <p>HTML, CSS, JS, React Roadmaps & Resources</p>
          <button className="res-btn">Explore</button>
        </div>

        <div className="resource-card">
          <h3>AI & Machine Learning</h3>
          <p>Python, Data Science, Neural Networks Basics</p>
          <button className="res-btn">Explore</button>
        </div>

        <div className="resource-card">
          <h3>Cloud Computing</h3>
          <p>Google Cloud Platform & DevOps Guides</p>
          <button className="res-btn">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Resources;