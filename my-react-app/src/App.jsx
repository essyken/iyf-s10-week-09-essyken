import { useState } from 'react'
import './App.css';

// Import your new components
import Counter from './exercises/Counter';
import UserProfile from './exercises/UserProfile';
import WindowSize from './exercises/WindowSize';
import ThemeToggle from './exercises/ThemeToggle';

function App() {
  return (
    <main className="app-container">
      <header>
        <h1>React useEffect Mastery</h1>
        <p>Task 17.1 Exercises</p>
      </header>

      <section className="exercise-grid">
        <Counter />
        <UserProfile userId={1} />
        <WindowSize />
        <ThemeToggle />
      </section>
      
      <div className="ticks"></div>
    </main>
  );
}

export default App;
