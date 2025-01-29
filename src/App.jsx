// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Todo from './pages/Todo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/apropos" element={<About />}></Route>
        <Route path='/quoi-faire' element={<Todo />}></Route>
      </Routes>
    </Router>
  );
}
