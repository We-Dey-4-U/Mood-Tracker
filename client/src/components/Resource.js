  // src/components/Resource.js
  import React from 'react';

  const Resource = ({ title, description, linkText, link }) => {
    return (
      <div className="resource">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
      </div>
    );
  };
  
  export default Resource;