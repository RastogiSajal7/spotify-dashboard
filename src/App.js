import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const token = useSelector((state) => state.token.token);

  return (
    <Router>
      <div className="app">
        {!token ? (
          <Login/>
        ) : (
          <Routes>
            <Route path="/home" element={<Dashboard/>} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
