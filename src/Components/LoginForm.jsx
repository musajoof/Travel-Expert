import User from '../../Backend/models/User.js';
import React, { useState } from 'react';
import EyeOff from '../assets/eye-off.svg';
import eyeOn from '../assets/eye.svg';

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Initialize as a boolean, not a string

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    onLoginSuccess();

    // User.find({email:username})
    //   .then(username => {
    //     if (!username) {
    //       setError('Invalid username or password');
    //       return;
    //     }

    //     // Assuming user.comparePassword is a method to compare hashed passwords
      
    //   // Mock login logic - replace this with actual authentication
    //   if ( password === user.password) {
    //     onLoginSuccess();  // Call the onLoginSuccess function to update loggedIn state
    //   } else {
    //     setError('Invalid username or password');
    //   }
    //   })
    //   .catch(err => {
    //     console.error('Login failed:', err);
    //     setError('Login failed. Please try again later');
    //   })

    
  };

  return (
    <div className="flex items-center justify-center w-[100%]">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login to Travel Expert</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">email</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={showPassword ? EyeOff : eyeOn}
                  alt="Toggle password visibility"
                  className="w-5 h-5"
                />
              </span>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
