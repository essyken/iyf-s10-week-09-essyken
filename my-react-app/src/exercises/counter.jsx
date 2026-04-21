import { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('Effect ran! Count is:', count);
    });
    
    useEffect(() => {
        console.log('Component mounted!');
    }, []);
    
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    
    useEffect(() => {
        const interval = setInterval(() => console.log('Tick'), 1000);
        return () => {
            clearInterval(interval);
            console.log('Cleaned up!');
        };
    }, []);
    
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
            <h3>Exercise 1: Counter</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}