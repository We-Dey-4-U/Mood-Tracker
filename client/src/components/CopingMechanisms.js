// src/components/CopingMechanisms.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import MindfulnessMeditationDetails from './MindfulnessMeditationDetails';
import '../styles/CopingMechanisms.css';

const CopingMechanisms = () => {
  const [completed, setCompleted] = useState([]);

  const copingMechanismsData = [
    {
      id: 1,
      title: 'Mindfulness Meditation',
      description: 'Practice mindfulness to stay present and reduce stress  Follow these steps:\n\n1. Choose a quiet and comfortable place where you wont be disturbed.\n2. Find a comfortable seated or lying position. You can use a cushion or chair for support.\n3.Close your eyes and bring your attention to your breath. Notice the sensation of each inhale and exhale',
      link: '/mindfulness-meditation',
      videoLink: 'https://www.youtube.com/watch?v=bLpChrgS0AY',
    },
    {
      id: 2,
      title: 'Breathing Exercises',
      description:
        'Engage in deep breathing exercises to promote relaxation. Follow these steps:\n\n1. Find a quiet and comfortable place to sit or lie down.\n2. Close your eyes and take a deep breath in through your nose, counting to four.\n3. Hold your breath for a count of four.\n4. Exhale slowly and completely through your mouth, counting to four.\n5. Repeat the cycle for several minutes.\n\nFeel free to adjust the breath count based on your comfort level.',
      link: '/breathing-exercises',
      videoLink: 'https://www.youtube.com/watch?v=SomeBreathingExerciseVideoLink', // Add video link
    },
    {
      id: 3,
      title: 'Positive Affirmations',
      description:
        'Use positive affirmations to foster a positive mindset. Repeat affirmations such as:\n\n1. I am worthy of love and joy.\n2. I believe in my abilities and potential.\n3. Today, I will embrace positivity and let go of negativity.\n\nRepeat these affirmations regularly to reinforce a positive mental attitude.',
      link: '/positive-affirmations',
      videoLink: 'https://www.youtube.com/watch?v=SomePositiveAffirmationVideoLink', // Add video link
    },
  ];

  const handleToggleComplete = (id) => {
    setCompleted((prevCompleted) =>
      prevCompleted.includes(id)
        ? prevCompleted.filter((completedId) => completedId !== id)
        : [...prevCompleted, id]
    );
  };

  return (
    <div className="coping-mechanisms-container">
      <h2>Coping Mechanisms</h2>
      <div className="coping-mechanisms-list">
        {copingMechanismsData.map((item) => (
          <div key={item.id} className="coping-mechanism-item">
            <div className="coping-mechanism-header" onClick={() => handleToggleComplete(item.id)}>
              <h3>{item.title}</h3>
              <span>{completed.includes(item.id) ? '✔ Completed' : '➜ Mark as Completed'}</span>
            </div>
            {completed.includes(item.id) && (
              <div>
                <p className="coping-mechanism-description">{item.description}</p>
                <Link to={item.link === '/mindfulness-meditation' ? '/mindfulness-meditation-details' : item.link} className="additional-content-link">
                  Explore Additional Content
                </Link>
                
                <a href="https://www.youtube.com/watch?v=bLpChrgS0AY" className="video-link" target="_blank" rel="noopener noreferrer">
                Watch Video
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default CopingMechanisms;