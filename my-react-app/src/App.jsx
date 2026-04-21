import './App.css';
import Counter from './exercises/Counter';
import UserProfile from './exercises/UserProfile';
import WindowSize from './exercises/WindowSize';
import ThemeToggle from './exercises/ThemeToggle';
import { Routes, Route } from 'react-router-dom';
import Layout from './exercises/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { useNavigate, NavLink } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // Clear user data
        navigate('/');  // Redirect to home
    };
    
    return (
        <nav>
            {/* NavLink adds active class automatically */}
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active' : ''}
            >
                Home
            </NavLink>
            <NavLink to="/posts">Posts</NavLink>
            
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}
// Using Tailwind
function Card({ title, children }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {title}
            </h3>
            <div className="text-gray-600">
                {children}
            </div>
        </div>
    );
}

function Button({ variant = 'primary', children }) {
    const baseClasses = "px-4 py-2 rounded font-medium transition-colors";
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600"
    };
    
    return (
        <button className={`${baseClasses} ${variants[variant]}`}>
            {children}
        </button>
    );
}
// App.jsx
<Route path="posts/:postId" element={<PostDetail />} />

// pages/PostDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [postId]);
    
    if (!post) return <p>Loading...</p>;
    
    return (
        <article>
            <Link to="/posts">&larr; Back to Posts</Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="posts" element={<Posts />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

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
