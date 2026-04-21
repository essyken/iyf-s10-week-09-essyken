import { useState, useEffect } from 'react';

export default function WindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    
    useEffect(() => {
        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
            <h3>Exercise 3: Window Size</h3>
            <p>Window: {size.width} x {size.height}</p>
        </div>
    );
}
