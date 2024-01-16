// src/pages/ResourcesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Resource from '../components/Resource';
import '../styles/ResourcesPage.css';

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <h1>Mental Health Resources</h1>
      <p>
        Explore a variety of mental health resources to support your well-being. Find articles,
        videos, and tools to help you navigate your mental health journey.
      </p>

      {/* Replace placeholder content with Resource component */}
      <Resource
        title="Article Title 1"
        description="Description of the article goes here..."
        linkText="Read More"
        link="#"
      />

      <Resource
        title="Video Title 1"
        description="Description of the video goes here..."
        linkText="Watch Video"
        link="#"
      />

      {/* Add more Resource components as needed */}

      {/* Back link to the homepage */}
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default ResourcesPage;


