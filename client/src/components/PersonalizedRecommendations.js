// src/components/PersonalizedRecommendations.js
import React, { useState, useEffect } from 'react';
import '../styles/PersonalizedRecommendations.css';
import { Link } from 'react-router-dom'; 
//import NavBar from './NavBar';

const PersonalizedRecommendations = () => {
  const [preferences ,setPreferences] = useState([]);

  const recommendationsData = [
    { id: 1, title: 'Guided Meditation for Stress Relief', link: '/guided-meditation-stress-relief' },
    { id: 2, title: 'Morning Yoga Routine', link: '/morning-yoga' },
    { id: 3, title: 'Relaxing Music Playlist', link: '/relaxing-music' },
    { id: 4, title: 'Mindful Breathing Exercises', link: '/mindful-breathing-exercises' },
    { id: 5, title: 'Positive Affirmations for the Day', link: '/positive-affirmations' },
    // Add more recommendations as needed
  ];

  // Simulate user interaction and update recommendations
  const simulateUserInteraction = () => {
    // Simulated user preferences (you can replace this with actual user data)
    const userPreferences = ['stress-relief', 'morning-routine'];

    const filteredRecommendations = recommendationsData.filter((recommendation) =>
    userPreferences.includes(recommendation.link.replace('/', ''))
    );

    setPreferences(filteredRecommendations );
  };

  useEffect(() => {
    simulateUserInteraction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="personalized-recommendations-container">
      <h2>Personalized Recommendations</h2>
      <div className="recommendations-list">
        {recommendationsData.map((item) => (
          <div key={item.id} className="recommendation-item">
            <h3>{item.title}</h3>
            <Link to={item.link} className="recommendation-link">
              Explore Recommendation
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;