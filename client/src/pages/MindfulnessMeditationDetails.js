// src/components/MindfulnessMeditationDetails.js
import React from 'react';
import '../styles/MindfulnessMeditationDetails.css';

const MindfulnessMeditationDetails = () => {
  return (
    <div className="mindfulness-meditation-details-container">
      <h2>Mindfulness Meditation</h2>
      <div className="mindfulness-meditation-details-content">
        <p>
          Mindfulness meditation is a powerful practice that involves bringing your attention
          to the present moment. This ancient technique has been used for centuries to promote
          relaxation, reduce stress, and enhance overall well-being.
        </p>

        <div className="instruction-section">
          <h3>How to Practice Mindfulness Meditation:</h3>
          <ul>
            <li><strong>Find a Quiet Space:</strong> Choose a quiet and comfortable place where you won't be disturbed.</li>
            <li><strong>Sit or Lie Down:</strong> Find a comfortable seated or lying position. You can use a cushion or chair for support.</li>
            <li><strong>Focus on Your Breath:</strong> Close your eyes and bring your attention to your breath. Notice the sensation of each inhale and exhale.</li>
            <li><strong>Stay Present:</strong> When your mind starts to wander (and it will), gently guide your focus back to your breath. Be present without judgment.</li>
            <li><strong>Start with Short Sessions:</strong> Begin with short sessions, gradually increasing the duration as you become more comfortable.</li>
          </ul>
        </div>

        <div className="benefits-section">
          <h3>Benefits of Mindfulness Meditation:</h3>
          <ul>
            <li><strong>Stress Reduction:</strong> Mindfulness meditation has been shown to reduce stress and promote a sense of calm.</li>
            <li><strong>Improved Focus:</strong> Regular practice can enhance your ability to concentrate and stay focused.</li>
            <li><strong>Emotional Well-being:</strong> It can help regulate emotions, leading to increased emotional resilience.</li>
            <li><strong>Better Sleep:</strong> Mindfulness meditation may contribute to improved sleep quality.</li>
          </ul>
        </div>

        <div className="explore-section">
          <h3>Explore Additional Content:</h3>
          <p>
            Ready to dive deeper into mindfulness meditation? Explore additional content such as guided meditations,
            mindfulness exercises, and expert insights to enhance your practice.
          </p>
          <a href="/mindfulness-meditation" className="additional-content-link">
            Explore Additional Content
          </a>
        </div>
      </div>
    </div>
  );
};

export default MindfulnessMeditationDetails;