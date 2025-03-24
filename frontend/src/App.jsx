// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InventoryList from './components/InventoryList';
import InventoryForm from './components/InventoryForm';
import Navigation from './components/Navigation';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<InventoryList />} />
          <Route path="/add" element={<InventoryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
