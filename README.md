Week 9: CommunityHub — React Advanced
Author

Name: ESTHER WANJIRU NJOROGE
GitHub: @essyken
Date: May 12, 2026

Project Description
A multi-page community web application built with React. CommunityHub lets users browse, search, and create posts fetched from the JSONPlaceholder API. The project transforms a basic React app into a fully routed, data-driven frontend with reusable components and custom hooks.
Technologies Used

React 
React Router DOM
JavaScript (ES6+)
CSS Modules 
JSONPlaceholder REST API
Vite

Features

Multi-page routing with React Router (Home, Posts, Post Detail, Create Post, About)
Data fetching from JSONPlaceholder API with loading and error states
Search and filter posts in real time
Create new posts (local state)
Like posts functionality
Custom hooks: useFetch, useLocalStorage, useToggle, useForm
Reusable component library: Button, Input, Card, Modal, Avatar
Responsive design with consistent styling
Protected route simulation with fake auth (Day 4 challenge)
Debounced API search (Day 2 challenge)
Timer component with start/stop/reset (Day 1 challenge)

How to Run

Clone this repository

bash   git clone https://github.com/essyken/iyf-s10-week-09-essyken.git
   cd iyf-s10-week-09-essyken

Install dependencies

bash   npm install

Start the development server

bash   npm run dev

Open http://localhost:5173 in your browser

Project Structure
src/
├── components/
│   ├── Layout/
│   ├── Post/
│   └── shared/
│       ├── Button/
│       ├── Input/
│       ├── Card/
│       ├── Modal/
│       └── Avatar/
├── hooks/
│   ├── useFetch.js
│   ├── useLocalStorage.js
│   ├── useToggle.js
│   └── useForm.js
├── pages/
│   ├── Home.jsx
│   ├── Posts.jsx
│   ├── PostDetail.jsx
│   ├── CreatePost.jsx
│   └── About.jsx
├── App.jsx
└── main.jsx
Lessons Learned

How useEffect works with dependency arrays and cleanup functions to avoid memory leaks
Building custom hooks to extract and reuse stateful logic across components
Setting up React Router for client-side navigation including dynamic routes and useParams
Centralising loading and error state management for a better user experience
Structuring a scalable component library with CSS Modules / Tailwind

Challenges Faced

Cleanup in useEffect: Forgetting to clear intervals and event listeners caused bugs on re-render; solved by always returning a cleanup function.
Stale closures: Dependency array mismatches led to effects using outdated state; fixed by carefully listing all dependencies.
Debouncing search: Implementing a debounce without a library required using setTimeout inside useEffect with a cleanup to cancel the previous timer on each keystroke.
Router nesting: Understanding how nested <Route> and <Outlet> work together took some trial and error before the layout rendered correctly.

