// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // Get from localStorage or use initial value
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });
    
    // Update localStorage when value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}

// Usage
function Settings() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);
    
    return (
        <div>
            <select 
                value={theme} 
                onChange={e => setTheme(e.target.value)}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            
            <input 
                type="range" 
                value={fontSize}
                onChange={e => setFontSize(Number(e.target.value))}
                min="12"
                max="24"
            />
        </div>
    );
}