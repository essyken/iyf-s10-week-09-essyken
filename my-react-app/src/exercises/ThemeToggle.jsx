import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.style.backgroundColor = theme === 'dark' ? '#333' : '#fff';
        document.body.style.color = theme === 'dark' ? '#fff' : '#000';
    }, [theme]);
    
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
            <h3>Exercise 4: Theme Toggle</h3>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Toggle Theme ({theme})
            </button>
        </div>
    );
}
