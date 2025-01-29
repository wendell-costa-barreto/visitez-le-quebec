// import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Todo from './pages/Todo';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/apropos" element={<About />}></Route>
        <Route path='/quoi-faire' element={<Todo />}></Route>
      </Routes>
    </HashRouter>
  );
}
