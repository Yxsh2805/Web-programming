import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedApp = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: dark ? "#222" : "#eee", color: dark ? "#fff" : "#000", padding: 20 }}>
      <h2>{dark ? "Dark" : "Light"} Theme</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedApp;
