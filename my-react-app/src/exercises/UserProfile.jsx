import { useState, useEffect } from 'react';

export default function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            try {
                // Using a real placeholder API for testing
                const response = await fetch(`https://typicode.com{userId}`);
                const data = await response.json();
                setUser(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [userId]);
    
    if (loading) return <p>Loading user...</p>;
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
            <h3>Exercise 2: User Profile</h3>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
        </div>
    );
}
