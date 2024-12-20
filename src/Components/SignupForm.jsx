import React, { useState } from 'react';
import EyeOff from '../assets/eye-off.svg';
import EyeOn from '../assets/eye.svg';

const SignupForm = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Validate fields
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to signup');
      }

      // Reset error and simulate success
      setError('');
      setSuccess('Signup successful!');
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      onSignupSuccess(); // Notify parent component
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-[100%]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Signup for Travel Expert
        </h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={showPassword ? EyeOff : EyeOn}
                alt="Toggle password visibility"
                className="w-5 h-5"
              />
            </span>
          </div>
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <img
                src={showConfirmPassword ? EyeOff : EyeOn}
                alt="Toggle password visibility"
                className="w-5 h-5"
              />
            </span>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
