// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResourcesPage from './pages/ResourcesPage';
import MoodTracker from './components/MoodTracker';

import CopingMechanisms from './components/CopingMechanisms'; // Import CopingMechanisms
import MindfulnessMeditationDetails from './pages/MindfulnessMeditationDetails'; // Import the new component
import PersonalizedRecommendations from './components/PersonalizedRecommendations'; // Import the new component
import GuidedMeditationDetails from './components/RecommendationDetails/GuidedMeditationDetails';
import CommunityForum from './components/CommunityForum';
import RealTimeChat from './components/RealTimeChat';


















const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/real-time-chat" element={<RealTimeChat/>} />
        <Route path="/community-forum" element={<CommunityForum/>} />
        <Route path="/coping-mechanisms" element={<CopingMechanisms />} />
        <Route path="/mindfulness-meditation-details" element={<MindfulnessMeditationDetails/>} />
        <Route path="/personalized-recommendations" element={<PersonalizedRecommendations/>} /> {/* Add this line */}
        <Route path="/guided-meditation-stress-relief" element={<GuidedMeditationDetails/>} />
       
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;