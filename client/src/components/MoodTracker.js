// src/components/MoodTracker.js
import React, { useState, useEffect } from 'react';
import '../styles/MoodTracker.css';

const MoodTracker = () => {
  // State to store the selected mood, timer, and mood entries
  const [selectedMood, setSelectedMood] = useState(null);
  const [timer, setTimer] = useState(0);
  const [moodEntries, setMoodEntries] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  // useEffect to start the timer when a mood is selected
  useEffect(() => {
    let intervalId;

    if (selectedMood) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    // Cleanup the interval when the component unmounts or when a new mood is selected
    return () => clearInterval(intervalId);
  }, [selectedMood]); // Dependency array includes selectedMood

  // Function to handle mood selection
  const handleMoodSelection = (mood) => {
    // Reset the timer when a new mood is selected
    setTimer(0);

    // Set the selected mood to the chosen mood
    setSelectedMood(mood);
  };

  // Function to handle storing the mood entry
  const handleStoreMoodEntry = () => {
    // Create a mood entry object
    const moodEntry = {
      mood: selectedMood,
      timer,
      date: currentDate.toLocaleString(),
    };

    // Update the mood entries state with the new mood entry
    setMoodEntries((prevEntries) => [...prevEntries, moodEntry]);

    // Reset the selected mood and timer
    setSelectedMood(null);
    setTimer(0);
  };

  return (
    <div className="mood-tracker-container">
      <h2>Mood Tracker</h2>
      <div className="mood-selection">
        {/* Add your mood selection buttons here */}
        <button onClick={() => handleMoodSelection('Happy')}>Happy</button>    😊

        <button onClick={() => handleMoodSelection('Neutral')}>Neutral</button>       😐

        <button onClick={() => handleMoodSelection('Sad')}>Sad</button> 😢

        {/* Add more mood buttons as needed */}
      </div>
      <div className="mood-entry">
        {/* Display the selected mood, timer, and current date */}
        {selectedMood && <p>You selected: {selectedMood}</p>}
        <p>Timer: {timer} seconds</p>
        <p>Date: {currentDate.toLocaleString()}</p>
        <button onClick={handleStoreMoodEntry}>Store Mood Entry</button>
      </div>
      {/* Display the mood entries table */}
      <div className="mood-entries-table">
        <h3>Stored Mood Entries</h3>
        <table>
          <thead>
            <tr>
              <th>Mood</th>
              <th>Timer</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {moodEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.mood}</td>
                <td>{entry.timer} seconds</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoodTracker;