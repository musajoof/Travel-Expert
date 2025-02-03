import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ItemList from "./Pages/CMS/index";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import Footer from "./Components/Footer";
import Logo from "./assets/world.svg";
import Hambuger from "./assets/menu-2.svg"
import SignupForm from "./Components/SignupForm";
import LoginForm from "./Components/LoginForm";
import PropertyForm from "./Pages/CMS/PropertyForm";
import EditProperty from "./Pages/CMS/EditProperty";
import SearchBar from "./Components/SearchBar";
import Help from './Components/Help';
import UserManual from './Components/UserManual';
import { searchItems } from "./Components/SearchService";
import SunLight from './assets/SunLight.svg';
import SunDark from './assets/SunDark.svg';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from "./Components/Payment";
import BookingForm from "./Components/BookingForm";

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
 
  return (
    <Router>
      <div className={darkMode ? "dark" : ""} style={{ scrollBehavior: "smooth" }}>
        <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100">
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
              <header className="fixed top-0 left-0 w-full bg-slate-50 dark:bg-gray-900 dark:text-gray-100 dark:shadow-slate-200 py-4 px-6 shadow-md z-50">
                <nav className="flex justify-between items-baseline">
                  <div className="text-2xl font-bold text-blue-500 dark:text-white ">Travel Expert</div>
                  <img className="w-12 md:w-24 dark:bg-slate-200 dark:rounded-full" src={Logo} alt="Logo" />
                  {/* Hamburger Menu for small screens */}
                  <div className="md:hidden flex items-center">
                    <button className="text-white" onClick={toggleMenu}>
                      <img src={Hambuger} alt="Hamburger Menu" className="w-8 h-8 dark:bg-white dark:rounded-md" />
                    </button>
                  </div>
                  {/* Navigation Links */}
                  <ul className="hidden md:flex justify-center items-center space-x-4 text-lg font-bold ">
                    <li>
                      <Link to="/cms" className="no-underline font-bold hover:bg-slate-100 hover:p-2 hover:rounded-md hover:text-blue-800 hover:underline dark:text-white dark:hover:text-slate-600">
                        CMS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="no-underline font-bold hover:bg-slate-100 hover:p-2 hover:rounded-md hover:text-blue-800 hover:underline dark:text-white dark:hover:text-slate-600">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" className="no-underline font-bold hover:bg-slate-100 hover:p-2 hover:rounded-md hover:text-blue-800 hover:underline dark:text-white dark:hover:text-slate-600">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="no-underline font-bold hover:bg-slate-100 hover:p-2 hover:rounded-md hover:text-blue-800 hover:underline dark:text-white dark:hover:text-slate-600">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy" className="no-underline font-bold hover:bg-slate-100 hover:p-2 hover:rounded-md hover:text-blue-800 hover:underline dark:text-white dark:hover:text-slate-600">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms" className="no-underline font-bold hover:bg-slate-100 hover:p-2 hover:rounded-md hover:text-blue-800 hover:underline dark:text-white dark:hover:text-slate-600">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/payment" className="no-underline font-bold hover:bg-slate-100 hover:p-2 hover:rounded-md hover:text-blue-800 hover:underline dark:text-white dark:hover:text-slate-600">
                        PayPal
                      </Link>
                    </li>
                    <li>
                      <Link to="/booking" className="no-underline font-bold hover:bg-slate-100 hover:p-2 hover:rounded-md hover:text-blue-800 hover:underline dark:text-white dark:hover:text-slate-600">
                        Booking
                      </Link>
                    </li>
                    <button
                      onClick={toggleDarkMode}
                      className="p-2 rounded focus:outline-none"
                    >
                      <img
                        src={darkMode ? SunLight : SunDark}
                        alt={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        className="w-6 md:w-8 h-6 md:h-8 bg-red-200 p-1 rounded-full text-center dark:bg-white"
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
                    <li>
                      <Link to="/payment" className="hover:underline font-bold">
                        PayPal
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
              <div className="mt-44">
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
                  <Route path="/help" element={<Help />} />
                  <Route path="/UserManual" element={<UserManual />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/booking" element={<BookingForm />} />
                  {/* <Route path="/payment" element={<Payment />} />  */}
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