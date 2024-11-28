import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Logo from "./assets/world.svg";
import hotell from "./assets/hotel-1.jpeg";
import hotel2 from "./assets/hotel-1.jpeg";
import hotel3 from './assets/hotel-3.jpeg'
import hotel4 from './assets/hotel-4.jpeg'
import hotel5 from './assets/hotel-5.jpeg'
import hotel7 from './assets/hotel-7.jpeg'
import hotel8 from './assets/hotel-8.jpeg'
import hotel9 from './assets/hotel-9.jpeg'
import hotel10 from './assets/hotel-10.jpeg'
import hotel11 from './assets/hotel-11.jpeg'
import hotel12 from './assets/hotel-12.jpeg'
import hotel13 from './assets/hotel-13.jpeg'
import Cruise1 from "./assets/cruise1.jpeg";
import Cruise2 from './assets/cruise2.jpeg'
import Cruise3 from './assets/cruise3.jpeg'
import Cruise4 from './assets/cruise4.jpeg'
import Cruise5 from './assets/cruise5.jpeg'
import Cruise6 from './assets/cruise6.jpeg'
import Tour1 from "./assets/Tour1.jpg";
import SignupForm from "./Components/SignupForm";
import LoginForm from "./Components/LoginForm";
import SearchBar from "./Components/SearchBar";
import Card from "./Components/Card"; 
import { searchItems } from "./Components/SearchService";
import SunLight from './assets/SunLight.svg';
import SunDark from './assets/SunDark.svg';
import "./index.css";

const App = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleSignupSuccess = () => {
    alert("Signup successful! You can now log in.");
    setShowSignup(false);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleSearch = (query, category) => {
    console.log(`Searching for ${query} in ${category}`);
    const results = searchItems(query, category);
    setSearchResults(results);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark Mode:", !darkMode);
  };
  const hotels = [
    {
      title: "Miami Beach Resort",
      image: hotell,
      company: "Luxury Stay Hotels",
      location: "Miami, FL United States",
      address: "123 Ocean Drive, Miami, Florida 33139 United States",
      description: "Experience ultimate relaxation with beachfront views.",
      category: "Hotel",
      details: "5-Star Resort",
      dates: "Available Year-Round",
    },
    {
      title: "Pines Resort Ibiza",
      image: hotel2,
      company: "Luxury Stay Hotels",
      location: "Ibiza, Spain",
      address: "Calle Puig Delfin",
      description: "A CULINARY DESTINATION Set within the vibrant culinary landscape of the island, 7Pines Resort Ibiza, a part of Destination by Hyatt, stands out as a culinary haven showcasing some of Ibiza's most acclaimed restaurants. Guests can enjoy a seat overlooking the dramatic cliff facing Es Vedrà and indulge in delightful creations throughout the day. Whether it's a hearty breakfast, a leisurely late lunch by our infinity or lagoon pool, tapas and drinks at sunset at Cone Club, sushi served Izakaya style at Pershing Yacht Terrace, or fine dining at The View, there's something to tantalize every palates..",
      category: "Hotel",
      details: "5-Star Resort",
      dates: "Available Year-Round",
    },
    {
      title: 'LeDomaine',
      image: hotel3,
      company: "Royal Caribbean International",
      location: 'Valladolid, Spain',
      address: ['N-122 km 332.5', 'Sardon de Duero', 'Valladolid, 47340', 'Spain'],
      description: `A restored abbey set on 500 acres of vineyards near Madrid, offering 30 guestrooms with butler service, a Michelin-starred restaurant, and the Santuario Wellness & Spa.`,
      category: "Hotel",
      details: "5-Star Resort",
      amenities: [
        'Upgrade on arrival, subject to availability',
        'Daily breakfast credit of $25 per person',
        '$100 USD Food & Beverage credit',
        'Early Check-In / Late Check-Out, subject to availability',
        'Complimentary Wi-Fi',
      ],
      features: ['24-hour Security', 'Air Conditioning', 'Banquet Facilities', 'Fitness Center', 'Pool', 'Sauna'],
      services: ['Concierge Desk', 'Laundry/Dry Cleaning/Pressing', 'Valet Parking', 'Wedding Services'],
    },
    {
      title: 'Abaton Island Resort & Spa',
      image: hotel4,
      company: "Royal Caribbean International",
      location: 'Hersonissos, Crete, Greece',
      address: [
        'Themistokleous Avenue, Hersonissos',
        'Hersonissos, Crete, 70014',
        'Greece',
      ],
      description: `A labyrinth of gleaming white cubes along Crete’s north coast with 152 Zen-chic rooms, villas (many with private pools), an Elemis spa, and five restaurants.`,
      category: "Hotel",
      company: "Royal Caribbean International",
      details: "5-Star Resort",
      amenities: [
        'Upgrade on arrival, subject to availability',
        'Daily breakfast credit of $25 per person',
        '$100 USD Food & Beverage credit',
        'Early Check-In / Late Check-Out, subject to availability',
        'Complimentary Wi-Fi',
      ],
      features: ['Air Conditioning', 'Banquet Facilities', 'Fitness Center', 'Infinity Pool'],
    },
    {
      title: 'Abercrombie & Kent Villas',
      image: hotel5,
      company: "Royal Caribbean International",
      location: 'Cheltenham, United Kingdom',
      address: ['St. George\'s House', 'Ambrose Street', 'Cheltenham, GL50 3LG', 'United Kingdom'],
      description: `From beach retreats to countryside estates, these luxurious villas are ideal for large groups or family reunions, with concierge service for tailored experiences.`,
      category: "Hotel",
      details: "5-Star Resort",
      amenities: [
        'Upgrade on arrival, subject to availability',
        'Daily breakfast credit of $25 per person',
        '$100 USD Food & Beverage credit',
        'Early Check-In / Late Check-Out, subject to availability',
        'Complimentary Wi-Fi',
      ],
      features: ['24-hour Security', 'Bicycle Rental', 'Pool', 'Sauna'],
    },
    {
      title: 'Acqualina Resort & Residences on the Beach',
      image: hotel7,
      location: 'Miami Beach, FL United States',
      company: "Royal Caribbean International",
      address: [
        '17875 Collins Ave',
        'Miami Beach, Florida 33160',
        'United States',
      ],
      description: `Acqualina Resort & Residences is an award-winning Forbes Five Star...`,
      amenities: [
        'Upgrade on arrival, subject to availability',
        'Daily breakfast credit of $25 per person...',
      ],
      features: '24-hour Security, Air Conditioning, Banquet Facilities...',
      services: 'Concierge Desk, Laundry/Dry Cleaning/Pressing...',
      recreation: 'Bicycle Rental, Fitness Center, Pool, Sauna',
      inYourRoom: 'Bathrobes, Complimentary Coffee/Tea, Hair Dryer...',
    },
    {
      title: 'Adare Manor',
      image: hotel8,
      location: 'Limerick, Ireland',
      company: "Royal Caribbean International",
      address: [
        'Adare Village',
        'Limerick, V94 W8WR',
        'Ireland',
      ],
      description: `Adare Manor is a five-star luxury resort defined by its spectacular setting...`,
      amenities: [
        'Upgrade on arrival, subject to availability',
        'Daily breakfast credit of $25 per person...',
      ],
      features: '24-hour Security, Air Conditioning, Banquet Facilities...',
      services: 'Concierge Desk, Laundry/Dry Cleaning/Pressing...',
      recreation: 'Bicycle Rental, Fitness Center, Pool, Sauna',
      inYourRoom: 'Bathrobes, Complimentary Coffee/Tea, Hair Dryer...',
    },
    {
      title: "Los Angeles Oceanfront Inn",
      image: hotel9,
      company: "Beachfront Inns",
      location: "Los Angeles, CA United States",
      address: "789 Sunset Blvd, Los Angeles, CA 90028 United States",
      description: "Enjoy breathtaking ocean views and top-tier amenities.",
      category: "Hotel",
      details: "Beachfront Resort",
      dates: "Available Year-Round",
    },
    {
      title: "Chicago Lakeside Retreat",
      image: hotel10,
      company: "Urban Stays",
      location: "Chicago, IL United States",
      address: "101 Lakeside Drive, Chicago, IL 60601 United States",
      description: "Relax in a tranquil lakeside retreat with modern comforts.",
      category: "Hotel",
      details: "Lakeside Resort",
      dates: "Available Year-Round",
    },
  ];

  const cruises = [
    {
      title: "Western Caribbean Charm",
      image: Cruise1,
      company: "Royal Caribbean International",
      location: "Miami, FL United States",
      address: "1080 Caribbean Way Miami, Florida 33132 United States",
      description:
        "Royal Caribbean International has been delivering innovation at sea for more than 50 years. Each successive class of ships presents a new architectural marvel...",
      ship: "Explorer of the Seas",
      itinerary: "Miami, FL United States to Miami, FL United States",
      dates: "14 Apr 2024 to 19 Apr 2024",
    },
    {
      title: "Eastern Caribbean With Bahamas",
      image: Cruise2,
      company: "Royal Caribbean International",
      location: "Miami, FL United States",
      address: "1080 Caribbean Way Miami, Florida 33132 United States",
      description:
        "Royal Caribbean International has been delivering innovation at sea for more than 50 years...",
      ship: "Explorer of the Seas",
      itinerary: "Miami, FL United States to Miami, FL United States",
      dates: "14 Apr 2024 to 19 Apr 2024",
    },
    {
      title: "Western Caribbean Charm",
      image: Cruise3,
      company: "Royal Caribbean International",
      location: "Miami, FL United States",
      address: "1080 Caribbean Way Miami, Florida 33132 United States",
      description:
        "Royal Caribbean International has been delivering innovation at sea for more than 50 years...",
      ship: "Explorer of the Seas",
      itinerary: "Miami, FL United States to Miami, FL United States",
      dates: "14 Apr 2024 to 19 Apr 2024",
    },
    {
      title: "Sète to Avignon",
      image: Cruise4,
      company: "Royal Caribbean International",
      location: "Miami, FL United States",
      address: "1080 Caribbean Way Miami, Florida 33132 United States",
      description:
        "Royal Caribbean International has been delivering innovation at sea for more than 50 years...",
      ship: "Explorer of the Seas",
      itinerary: "Miami, FL United States to Miami, FL United States",
      dates: "14 Apr 2024 to 19 Apr 2024",
    },
    {
      title: "Dijon to Saint-Léger-Sur-Dheune",
      image: Cruise5,
      company: "Royal Caribbean International",
      location: "Miami, FL United States",
      address: "1080 Caribbean Way Miami, Florida 33132 United States",
      description:
        "Royal Caribbean International has been delivering innovation at sea for more than 50 years...",
      ship: "Explorer of the Seas",
      itinerary: "Miami, FL United States to Miami, FL United States",
      dates: "14 Apr 2024 to 19 Apr 2024",
    },
    {
      title: "Western Caribbean",
      image: Cruise6,
      company: "Royal Caribbean International",
      location: "Miami, FL United States",
      address: "1080 Caribbean Way Miami, Florida 33132 United States",
      description:
        "Royal Caribbean International has been delivering innovation at sea for more than 50 years...",
      ship: "Explorer of the Seas",
      itinerary: "Miami, FL United States to Miami, FL United States",
      dates: "14 Apr 2024 to 19 Apr 2024",
    },
  ];


  const tours = [
    {
      title: "Grand Canyon Adventure",
      image: Tour1,
      company: "Adventure Tours",
      location: "Arizona, United States",
      address: "Grand Canyon National Park",
      description: "Explore the natural wonders of the Grand Canyon with guided tours and breathtaking views.",
      category: "Tour",
      details: "Guided Group Tour",
      dates: "1 Dec 2024 to 10 Dec 2024",
    },
  ];

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''} style={{ scrollBehavior: "smooth" }}>
      <div className="min-h-screen flex flex-col">
        {!loggedIn ? (
          <div className="flex-grow flex justify-center items-center">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96">
              {showSignup ? (
                <SignupForm onSuccess={handleSignupSuccess} />
              ) : (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
              )}
              <button
                className="mt-4 text-blue-500 hover:underline"
                onClick={() => setShowSignup(!showSignup)}
              >
                {showSignup ? "Go to Login" : "Go to Signup"}
              </button>
            </div>
          </div>
        ) : (
          <>
            <header className="bg-white dark:bg-gray-900 dark:text-gray-100 py-4 px-6">
              <nav className="flex justify-between items-center">
                <div className="text-2xl font-bold">Travel Expert</div>
                <img className="w-12 md:w-24" src={Logo} alt="Logo" />
                <ul className="flex justify-center items-center space-x-4 text-lg font-bold">
                  <li>
                    <Link to="/" className="hover:underline font-bold">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us" className="hover:underline font-bold">
                      About Us
                    </Link>
                  </li>
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded focus:outline-none"
                  >
                    <img
                      src={darkMode ? SunLight : SunDark}
                      alt={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                      className="w-6 md:w-8 h-6 md:h-8 bg-red-200 p-1 rounded-xl text-center"
                    />
                  </button>
                </ul>
              </nav>
            </header>

            {/* Search Bar Component */}
            <SearchBar onSearch={handleSearch} />

            {/* Display search results */}
            <div className="mt-6 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="text-xl font-semibold">Search Results:</h2>
                <ul>
                  {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                      <li key={result.id} className="border-b py-2">
                        <h3 className="text-lg font-bold">{result.name}</h3>
                        <p>{result.location}</p>
                      </li>
                    ))
                  ) : (
                    <p>No results found.</p>
                  )}
                </ul>
              </div>
            
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={<Home hotels={hotels} cruises={cruises} tours={tours} />}
                />
                <Route path="/about-us" element={<AboutUs />} />
              </Routes>
            </main>
          </>
        )}
        <Footer />
      </div>
      </div>
    </Router>
  );
};

export default App;


