
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Aquila App
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/" className="text-white hover:text-blue-200">Dashboard</Link>
                <Link to="/products" className="text-white hover:text-blue-200">Products</Link>
                <Link to="/users" className="text-white hover:text-blue-200">Users</Link>
                <Link to="/analytics" className="text-white hover:text-blue-200">Analytics</Link>
                <button 
                  onClick={handleLogout}
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
                <Link to="/register" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {isAuthenticated ? (
                <>
                  <Link to="/" className="block text-white hover:text-blue-200 px-3 py-2">Dashboard</Link>
                  <Link to="/products" className="block text-white hover:text-blue-200 px-3 py-2">Products</Link>
                  <Link to="/users" className="block text-white hover:text-blue-200 px-3 py-2">Users</Link>
                  <Link to="/analytics" className="block text-white hover:text-blue-200 px-3 py-2">Analytics</Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left text-white hover:text-blue-200 px-3 py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block text-white hover:text-blue-200 px-3 py-2">Login</Link>
                  <Link to="/register" className="block text-white hover:text-blue-200 px-3 py-2">Register</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
