import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Register from './pages/register';
import Landing from './pages/landing'

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;