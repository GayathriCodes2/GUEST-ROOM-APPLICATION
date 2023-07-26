// Import necessary dependencies from 'react-router-dom'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import BookNow from './pages/BookNow';
import ListHotel from './pages/ListHotel';
import RegistrationPage from './pages/RegistrationPage';
import Admin from './pages/AdminPage';
import PageNotFound from './pages/PageNotFound';
import MakePayement from './pages/MakePayementPage';
import Success from './pages/SuccessPage';

function App() {
  return (
    // Set up the Router to handle route navigation
    <Router>
      <Routes>
        {/* Define routes and their corresponding components */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/hotel-list" element={<ListHotel />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/book-now' element={<BookNow />} />
        <Route path='/payement' element={<MakePayement />} />
        <Route path='/success' element={<Success />} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

// Export the App component as default
export default App;
