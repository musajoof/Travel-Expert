import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import About from "./Pages/About";
import ItemList from "./Pages/CMS/index";
// import ItemForm from "./Pages/cms/components/ItemForm";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import Footer from "./Components/Footer";
import Logo from "./assets/world.svg";
import Hambuger from "./assets/menu-2.svg"
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
import Tour2 from './assets/Tour2.jpg'
import Tour3 from './assets/Tour3.jpg'
import Tour4 from './assets/Tour4.jpg'
import Tour5 from './assets/Tour5.jpg'
import Tour6 from './assets/Tour6.jpg'
import Tour7 from './assets/Tour7.jpg'
import Tour8 from './assets/Tour8.jpg'
import Tour9 from './assets/Tour9.jpg'
import Tour1 from "./assets/Tour1.jpg";
import SignupForm from "./Components/SignupForm";
import LoginForm from "./Components/LoginForm";
import PropertyForm from "./Pages/CMS/PropertyForm";
// import EditProperty from "./Pages/CMS/EditProperty";
import SearchBar from "./Components/SearchBar";
import Card from "./Components/Card"; 
import { searchItems } from "./Components/SearchService";
import SunLight from './assets/SunLight.svg';
import SunDark from './assets/SunDark.svg';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
    {
      title: 'Six Senses Samui',
      location: 'Koh Samui, Thailand',
      company: "Adventure Tours",
      address: '9/10 Moo 5, Baan Plai Laem Bophut, Koh Samui, 84320 Thailand',
      description:
        'Utterly and unabashedly romantic, Six Senses Samui is the most delightful daydream come true...',
      image: Tour2,
      amenities: [
        'Upgrade on arrival, subject to availability',
        'Daily breakfast credit of $25 per person...',
        'Complimentary Wi-Fi',
      ],
      features: 'Air Conditioning, Children’s Programs, Complimentary Parking...',
      recreation: 'Golf, Water Sports',
    },
    {
      title: 'Mandarin Oriental, Munich',
      location: 'Munich, Germany',
      company: "Adventure Tours",
      address: 'Neuturmstrasse 1, Munich, 80331, Germany',
      description:
        'Set on a quiet street off the renowned Maximilianstrasse, Mandarin Oriental, Munich is praised...',
      image: Tour3,
      amenities: [
        'Upgrade on arrival, subject to availability',
        'Daily breakfast credit of $25 per person...',
        'Complimentary Wi-Fi',
      ],
      features: 'Banquet Facilities, Conference Facilities, Culinary Program...',
      recreation: 'Bicycle Rental, Fitness Center, Pool, Sauna',
    },
    {
      image: Tour4,
      title: 'Beyond Times Square',
      location: 'New York City, NY United States',
      company: "Adventure Tours",
      address: ['300 Park Avenue 2nd Floor', 'New York City, New York 10022 United States'],
      description: 'Beyond Times Square is a New York City-based destination management company with a 19-year history of delivering tailormade, luxury travel programs with authentic local experiences...',
      amenities: {
        features: 'Banquet Facilities, Conference Facilities, Culinary Program, Internet Access, Lounge/Bar, Restaurant, Villas',
        recreation: 'Golf, Water Sports',
      },
    },
    {
      image: Tour5,
      title: 'Anantara Lawana Koh Samui Resort',
      location: 'Koh Samui, Thailand',
      company: "Adventure Tours",
      address: ['92/1 Moo 2 Bophut Koh Samui, 84320', 'Thailand'],
      description: 'Designed to reflect the island’s history and culture, Anantara Lawana Koh Samui Resort features shop-house-style pool suites...',
      amenities: {
        features: 'Banquet Facilities, Conference Facilities, Culinary Program, Internet Access, Lounge/Bar, Restaurant, Villas',
        recreation: 'Golf, Water Sports',
      },
    },
    {
      image: Tour6,
      title: 'Arabian Adventures',
      location: 'Dubai, United Arab Emirates',
      company: "Adventure Tours",
      address: ['Emirates Holidays Building, 4th Floor Sheikh Zayed Road', 'P.O. Box 7631 Dubai, UAE'],
      description: 'Arabian Adventures, headquartered in Dubai, is part of the Destination and Leisure Management division of the Emirates Group...',
    },
    {
      image: Tour7,
      title: 'Unveil the Perfect Paradise - Dubai and the Maldives',
      location: 'Dubai, United Arab Emirates',
      company: "Adventure Tours",
      address: ['Emirates Holidays Building, 4th Floor Sheikh Zayed Road', 'P.O. Box 7631 Dubai, UAE'],
      description: 'Arabian Adventures, headquartered in Dubai, provides exclusive tailor-made services...',
    },
    {
      image: Tour8,
      title: 'Beyond Times Square',
      location: 'New York City, NY United States',
      company: "Adventure Tours",
      address: ['300 Park Avenue 2nd Floor, New York City, NY 10022'],
      description: 'Arabian Adventures, headquartered in Dubai, provides exclusive tailor-made services...',
    },
    {
      image: Tour9,
      title: 'Discover the wonders of Oman - 7 days 6 nights',
      location: 'Dubai, United Arab Emirates',
      company: "Arabian Adventures",
      address: ['Emirates Holidays Building, 4th Floor Sheikh Zayed Road P.O. Box. 7631 Dubai', 'United Arab Emirates'],
      description: 'Destination and Leisure Management division of the Emirates Group. With offices in Dubai, as well as associates across the world, we are the region’s leading destination management company providing services of an exceptional standard, and are perfectly placed to meet all of your requirements. With over 300 professional, multilingual staff,  to organising excursions and safaris and managing sports trips and events'
    },
    
  ];

  return (
    <Router>
      <div className={darkMode ? "dark" : ""} style={{ scrollBehavior: "smooth" }}>
        <div className="min-h-screen flex flex-col">
          {!loggedIn ? (
            <div className="flex-grow flex justify-center items-center">
              <div className="bg-white flex flex-col dark:bg-gray-900 p-4 rounded-lg w-[70%] justify-center">
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
              <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 dark:text-gray-100 dark:shadow-slate-200 py-4 px-6 shadow-md z-50">
                <nav className="flex justify-between items-center">
                  <div className="text-2xl font-bold">Travel Expert</div>
                  <img className="w-12 md:w-24 dark:bg-slate-200 dark:rounded-full" src={Logo} alt="Logo" />
                  {/* Hamburger Menu for small screens */}
                  <div className="md:hidden flex items-center">
                    <button className="text-white" onClick={toggleMenu}>
                      <img src={Hambuger} alt="Hamburger Menu" className="w-8 h-8 dark:bg-white dark:rounded-md" />
                    </button>
                  </div>
                  {/* Navigation Links */}
                  <ul className="hidden md:flex justify-center items-center space-x-4 text-lg font-bold">
                    <li>
                      <Link to="/cms" className="hover:underline font-bold">
                        CMS
                      </Link>
                    </li>
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
                    <li>
                      <Link to="/contact" className="hover:underline font-bold">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy" className="hover:underline font-bold">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms" className="hover:underline font-bold">
                        Terms of Service
                      </Link>
                    </li>
                    <button
                      onClick={toggleDarkMode}
                      className="p-2 rounded focus:outline-none"
                    >
                      <img
                        src={darkMode ? SunLight : SunDark}
                        alt={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        className="w-6 md:w-8 h-6 md:h-8 bg-red-200 p-1 rounded-full text-center"
                      />
                    </button>
                  </ul>
                </nav>
                {/* Mobile Menu (Hidden by default) */}
                <div className="md:hidden">
                  <ul className={`flex flex-col items-center space-y-4 py-4 ${menuOpen ? "block" : "hidden"}`}>
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
                    <li>
                      <Link to="/contact" className="hover:underline font-bold">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy" className="hover:underline font-bold">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms" className="hover:underline font-bold">
                        Terms of Service
                      </Link>
                    </li>
                    <button
                      onClick={toggleDarkMode}
                      className="p-2 rounded focus:outline-none"
                    >
                      <img
                        src={darkMode ? SunLight : SunDark}
                        alt={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        className="w-6 md:w-8 h-6 md:h-8 bg-red-200 p-1 rounded-xl text-center"
                      />
                    </button>
                  </ul>
                </div>
              </header>



              {/* Search Bar Component */}
              <div className="mt-32">
                <SearchBar onSearch={handleSearch} />
              </div>

              {/* Display search results */}
              <div className=" dark:bg-gray-900 dark:text-gray-100 ">
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

              <main className="flex-grow ">
                <Routes>
                  <Route
                    path="/"
                    element={<Home/>}
                  />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cms" element={<ItemList />} />
                  <Route path="/cms/create" element={<PropertyForm />} />
                  <Route path="/cms/edit/:id" element={<EditProperty />} />
                </Routes>
                <Footer/>
              </main>
            </>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;