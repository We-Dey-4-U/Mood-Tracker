// src/components/recommendationDetails/MorningYogaDetailsDetails.js
import React from 'react';
import '../../styles/RecommendationDetails.css'; // Import the shared styles for recommendation details

const MorningYogaDetailsDetails = () => {
  return (
    <div className="recommendation-details-container">
      <h2>Morning Yoga Routine</h2>
      <div className="recommendation-details-content">
        <p>
          Start your day with a rejuvenating morning yoga routine. This practice aims to enhance your physical and mental well-being,
          providing a gentle and invigorating start to your day.
        </p>

        <div className="instruction-section">
          <h3>How to Practice Morning Yoga:</h3>
          <ul>
            <li><strong>Set a Peaceful Space:</strong> Choose a quiet and clutter-free space for your practice.</li>
            <li><strong>Start with Warm-Up Poses:</strong> Begin with gentle warm-up poses to awaken your body.</li>
            <li><strong>Flow through Asanas:</strong> Move through a series of yoga poses to improve flexibility and strength.</li>
            <li><strong>Include Breathing Exercises:</strong> Incorporate mindful breathing exercises for relaxation.</li>
            <li><strong>Conclude with Savasana:</strong> End your routine with a few minutes of relaxation in Savasana.</li>
          </ul>
        </div>

        <div className="benefits-section">
          <h3>Benefits of Morning Yoga Routine:</h3>
          <ul>
            <li><strong>Increased Energy:</strong> Boost your energy levels for the day ahead.</li>
            <li><strong>Enhanced Focus:</strong> Improve mental clarity and concentration.</li>
            <li><strong>Reduced Stress:</strong> Enjoy a calm and peaceful start to your day.</li>
            <li><strong>Improved Flexibility:</strong> Work on your flexibility and balance with regular practice.</li>
          </ul>
        </div>

        <div className="explore-section">
          <h3>Explore Additional Content:</h3>
          <p>
            Ready to explore more about morning yoga? Dive deeper into guided routines, advanced poses, and expert tips to elevate your practice.
          </p>
          {/* Add a link to additional content page for morning yoga */}
          <a href="/morning-yoga-additional-content" className="additional-content-link">
            Explore Additional Content
          </a>
        </div>
      </div>
    </div>
  );
};

export default MorningYogaDetailsDetails;