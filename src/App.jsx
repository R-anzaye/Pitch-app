import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import StadiumList from './StadiumList';
import ReviewForm from './ReviewForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>PITCH</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/review">Review</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<StadiumList />} />
            <Route path="/review" element={<ReviewForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

// had to write this, weuh this is tougher than I thought, Mahn I keep reffering. so sad lol
