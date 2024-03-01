import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  const [bgColor, setBgColor] = useState(getRandomColor());

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => setUser(data.results[0]));
  }, []);

  function getRandomUser() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => setUser(data.results[0]));
    setBgColor(getRandomColor());
  }

  function getRandomColor() {
    const colors = ['#ff5733', '#33ff57', '#3333ff', '#ffff33', '#33ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1>Random User Generator</h1>
      {user && (
        <div>
          <img src={user.picture.large} alt="User" />
          <p>Name: {user.name.first} {user.name.last}</p>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
          <p>Gender: {user.gender}</p>
        </div>
      )}
      <button onClick={getRandomUser} style={{ marginTop: '20px' }}>Refresh</button>
    </div>
  );
}

export default App;
