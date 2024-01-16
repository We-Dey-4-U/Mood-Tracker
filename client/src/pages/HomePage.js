// client/src/pages/HomePage.js
import React from 'react';
import '../styles/HomePage.css'; // Import the styles
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
//import ResourcesPage from './ResourcesPage';
//import MoodTracker from '../components/MoodTracker'; 
//import CopingMechanisms from '../components/CopingMechanisms'; // Import CopingMechanisms


const HomePage = () => {
    return (

        


      
    <div>
      <div className="hero-section">
        {/* Add the image path dynamically */}
        <img
          src="https://media.istockphoto.com/id/1447032220/photo/barber-and-satisfied-bearded-man-in-front-of-the-mirror.jpg?s=612x612&w=0&k=20&c=HAUtXFMktfwXTZgShMfSL8XTtmppYVsC0NjZh15DNQ4="
          alt="Hero Section"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Mental Health Support App</h1>
          <p>Empowering Your Journey to Mental Well-being</p>
        </div>
      </div>


      <div className="home-container">
        <section className="section">
        <Link to="/resources">Explore Mental Health Resources</Link>
          <p>
            Explore a variety of mental health resources to support your well-being. Find articles,
            videos, and tools to help you navigate your mental health journey.
          </p>
        </section>

       
  
        <section className="section">
          <Link to="/coping-mechanisms">Coping Mechanisms</Link>
          <p>
            Discover effective coping mechanisms to deal with stress and challenges. Learn different
            techniques such as mindfulness, breathing exercises, and positive affirmations.
          </p>
        </section>
  
        <section className="section">
        <Link to="/personalized-recommendations">Personalized Recommendations</Link>
          <p>
            Receive personalized recommendations based on your preferences and needs. Our system
            analyzes your interactions and provides content tailored to your mental health goals.
          </p>
        </section>
        
        <section className="section">
        <Link to="/mood-tracker">Mood Tracking</Link>
          <p>
            Track and visualize your mood changes over time to better understand your mental
            well-being. Use our mood tracking feature to log your emotions and identify patterns.
          </p>
        </section>
  
        <section className="section">
          <h2>Meditation Guides</h2>
          <p>
            Access meditation guides to help you relax and center yourself. Our collection includes
            guided meditations, breathing exercises, and soothing sounds to support your mental
            wellness.
          </p>
        </section>
  
        <section className="section">
          
          <Link to="/supportive-community">Supportive Community</Link>
          <p>
            Join our supportive community to connect with others on similar journeys. Share your
            experiences, provide encouragement, and engage in discussions that promote mental health
            awareness and understanding.
          </p>
        </section>
        
      </div>
    
      <Footer />
      </div>
    );
  };
  
  export default HomePage;