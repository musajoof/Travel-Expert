import Logo from './assets/world.svg'
// import Sea from './assets/sea.jpg'
import hotell from './assets/hotel-1.jpeg'
import hotel2 from './assets/hotel-2.jpeg'
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
import Cruise1 from './assets/cruise1.jpeg'
import Cruise2 from './assets/cruise2.jpeg'
import Cruise3 from './assets/cruise3.jpeg'
import Cruise4 from './assets/cruise4.jpeg'
import Cruise5 from './assets/cruise5.jpeg'
import Cruise6 from './assets/cruise6.jpeg'
import Tour1 from './assets/Tour1.jpg'
import Tour2 from './assets/Tour2.jpg'
import Tour3 from './assets/Tour3.jpg'
import Tour4 from './assets/Tour4.jpg'
import Tour5 from './assets/Tour5.jpg'
import Tour6 from './assets/Tour6.jpg'
import Tour7 from './assets/Tour7.jpg'
import Tour8 from './assets/Tour8.jpg'
import Tour9 from './assets/Tour9.jpg'
import { useState } from 'react'
import LoginForm from './Components/LoginForm';
import SearchBar from './Components/SearchBar';
import { searchItems } from './Components/SearchService';

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });
});

function App() {
  const [showHotel1, setShowHotel1] = useState(false);
  const [showHotel2, setShowHotel2] = useState(false);
  const [showHotel3, setShowHotel3] = useState(false);
  const [showHotel4, setShowHotel4] = useState(false);
  const [showHotel5, setShowHotel5] = useState(false);
  const [showHotel6, setShowHotel6] = useState(false);
  const [showHotel7, setShowHotel7] = useState(false);
  const [showHotel8, setShowHotel8] = useState(false);
  const [showHotel9, setShowHotel9] = useState(false);
  const [showHotel10, setShowHotel10] = useState(false);
  const [showHotel11, setShowHotel11] = useState(false);
  const [showHotel12, setShowHotel12] = useState(false);
  const [showCruise1, setShowCruise1] = useState(false);
  const [showCruise2, setShowCruise2] = useState(false);
  const [showCruise3, setShowCruise3] = useState(false);
  const [showCruise4, setShowCruise4] = useState(false);
  const [showCruise5, setShowCruise5] = useState(false);
  const [showCruise6, setShowCruise6] = useState(false);
  const [showTour1, setShowTou1] = useState(false);
  const [showTour2, setShowTou2] = useState(false);
  const [showTour3, setShowTou3] = useState(false);
  const [showTour4, setShowTou4] = useState(false);
  const [showTour5, setShowTou5] = useState(false);
  const [showTour6, setShowTou6] = useState(false);
  const [showTour7, setShowTou7] = useState(false);
  const [showTour8, setShowTou8] = useState(false);
  const [showTour9, setShowTou9] = useState(false);


  const handleMoreDetails1 = () => {
    setShowHotel1(!showHotel1);
    setShowHotel2(false); // Hide other hotel details
  };

  const handleMoreDetails2 = () => {
    setShowHotel2(!showHotel2);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleMoreDetails3 = () => {
    setShowHotel3(!showHotel3);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleMoreDetails4 = () => {
    setShowHotel4(!showHotel4);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleMoreDetails5 = () => {
    setShowHotel5(!showHotel5);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleMoreDetails6 = () => {
    setShowHotel6(!showHotel6);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleMoreDetails7 = () => {
    setShowHotel7(!showHotel7);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleMoreDetails8 = () => {
    setShowHotel8(!showHotel8);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleMoreDetails9 = () => {
    setShowHotel9(!showHotel9);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleMoreDetails10 = () => {
    setShowHotel10(!showHotel10);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleMoreDetails11 = () => {
    setShowHotel11(!showHotel11);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleMoreDetails12 = () => {
    setShowHotel12(!showHotel12);
    setShowHotel1(false); // Hide other hotel details
  };

  const handleCruiseDetails1 = () => {
    setShowCruise1(!showCruise1); // Toggle the showCruise1 state
  };
  const handleCruiseDetails2 = () => {
    setShowCruise2(!showCruise2); // Toggle the showCruise2 state
  };
  const handleCruiseDetails3 = () => {
    setShowCruise3(!showCruise3); // Toggle the showCruise3 state
  };
  const handleCruiseDetails4 = () => {
    setShowCruise4(!showCruise4); // Toggle the showCruise14 state
  };
  const handleCruiseDetails5 = () => {
    setShowCruise5(!showCruise5); // Toggle the showCruise5 state
  };
  const handleCruiseDetails6 = () => {
    setShowCruise6(!showCruise6); // Toggle the showCruise6 state
  };


  const handleTourDetails1 = () => {
    setShowTou1(!showTour1); // Toggle the showTour1 state
  };
  const handleTourDetails2 = () => {
    setShowTou2(!showTour2); // Toggle the showTour2 state
  };
  const handleTourDetails3 = () => {
    setShowTou3(!showTour3); // Toggle the showTour3 state
  };
  const handleTourDetails4 = () => {
    setShowTou4(!showTour4); // Toggle the showTour4 state
  };
  const handleTourDetails5 = () => {
    setShowTou5(!showTour5); // Toggle the showTour5 state
  };
  const handleTourDetails6 = () => {
    setShowTou6(!showTour6); // Toggle the showTour6 state
  };
  const handleTourDetails7 = () => {
    setShowTou7(!showTour7); // Toggle the showTour7 state
  };
  const handleTourDetails8 = () => {
    setShowTou8(!showTour8); // Toggle the showTour8 state
  };
  const handleTourDetails9 = () => {
    setShowTou9(!showTour9); // Toggle the showTour9 state
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleLoginSuccess = () => {
    setLoggedIn(true);  // Set to true once login is successful
  };

  const handleSearch = (query, category) => {
    console.log(`Searching for ${query} in ${category}`);
    const results = searchItems(query, category);
    setSearchResults(results);
  };
 
  return (
    <>
      {loggedIn ? (
      <div className="text-slate-800 max-w-7xl max-h-full p-4 mx-auto ">
        <header className="bg-white text-red-500 mb-3">
          <div className="w-3/4 h-36 m-auto flex justify-center items-center gap-2 text-7xl font-tin font-serif">
            <img className='w-36' src={Logo} alt="" />
            <h1>Travel Expert</h1>
          </div>
          <nav className='w-3/4 h-7 m-auto mt-3  bg-white'>
            <ul className='flex justify-between items-center m-auto text-3xl font-bold'>
              <li className='cursor-pointer hover:text-slate-600 hover:translate-y-1'> 
                <a href="#hotel">Hotel</a>
              </li>
              <li className='cursor-pointer hover:text-slate-600 hover:translate-y-1'> 
                <a href="#cruise">Cruise</a>
              </li>
              <li className='cursor-pointer hover:text-slate-600 hover:translate-y-1'> 
                <a href="#tour">Tour</a>
              </li>
              <li className='cursor-pointer hover:text-slate-600 hover:translate-y-1'> 
                <a href="#abou-us">About Us</a>
              </li>
            </ul>
          </nav>
        </header>

        <SearchBar onSearch={handleSearch} />

        {/* Display search results */}
        <div className="mt-6">
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

        <main className="w-full h-screen  mt-8 bg-[url('./assets/sea.jpg')] bg-no-repeat bg bg-cover ">
          <div className='text-center px-14 '>
            <h1 className='text-white text-7xl font-bold mt-10 pt-44'>Independent travel advisors, working for you</h1>
            <p className='text-white text-4xl font-bold p-10'>Worry-Free, Expert Planning Unforgettable Luxury Experiences
            VIP access to the World’s Best Hotels, Tours, and Cruises
            </p>
            <button className='p-2 bg-white text-red-500 text-2xl font-serif font-bold rounded-md'>
              <a href="#hotel">Find A Hotel</a>
            </button>
          </div>
        </main>

          {/* { The start of hotel} */}
          <div className=' mt-5' id='hotel'>
            <div className='mt-4 text-4xl font-bold font-serif w-80 text-center m-auto mb-6'>
              <h1 className='uppercase'>Hotel</h1>
              <p className='capitalize'>Find your hotel</p>
            </div>
            <div className='grid grid-cols-3 gap-3'>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotell} alt=""/>
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails1}>Hotel South Beach</button>
                  <p className='text-xl capitalize mt-5'>miami beach, FL United States</p>
                </div>

                {/* {The starting of this Hotel details} */}
                {showHotel1 && <div className='w-[80rem] border relative'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotell} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Hotel Brooklyn Bridge</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Brooklyn, NY United States</h2>
                    <p>Address</p>
                    <p>60 Furman St</p>
                    <p>Brooklyn, New York 11201-1325</p>

                    <p>With expansive outlooks over the Manhattan skyline and East River, 1 Hotel Brooklyn Bridge is the ideal setting for visitors to the Big Apple. Designed by local artists using native greenery and reclaimed materials, each of the 195 rooms and suites features floor-to-ceiling windows and industrial-chic touches. After a day of sightseeing, tuck into farm-to-table cuisine at The Osprey, or take in city views from the rooftop plunge pool and bar.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    <p>
                      <ul className=' pl-3'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>
                    </p>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Concierge Desk, Laundry/Dry Cleaning/Pressing, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>
                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 1 details end here} */}

              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel2} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails2}>Pines Resort Ibiza</button>
                  <p className='text-xl capitalize mt-5'>Ibiza, Spain</p>
                </div>

                {/* {The starting of this Hotel 2 details} */}
                {showHotel2 && <div className='w-[80rem] border relative -ml-[420px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotell} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Pines Resort Ibiza</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>San José, Spain</h2>
                    <p>Address</p>
                    <p>Calle Puig Delfin</p>
                    <p>s/n</p>
                    <p>Ibiza</p>
                    <p>San José, 07830</p>
                    <p>Spain</p>

                    <p>A CULINARY DESTINATION Set within the vibrant culinary landscape of the island, 7Pines Resort Ibiza, a part of Destination by Hyatt, stands out as a culinary haven showcasing some of Ibiza's most acclaimed restaurants. Guests can enjoy a seat overlooking the dramatic cliff facing Es Vedrà and indulge in delightful creations throughout the day. Whether it's a hearty breakfast, a leisurely late lunch by our infinity or lagoon pool, tapas and drinks at sunset at Cone Club, sushi served Izakaya style at Pershing Yacht Terrace, or fine dining at The View, there's something to tantalize every palates.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    <p>
                      <ul className=' pl-3'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>
                    </p>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Babysitting Services, Car Rental Desk, Concierge Desk, Currency Exchange, House Safe, Housekeeping -- Twice Daily, Laundry/Dry Cleaning/Pressing, Limousine Service, Room Service, Room Service 24-hours, Salon, Turndown Service, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>
                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 2 details end here} */}
              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel3} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails3}>Abadia Retuerta LeDomaine</button>
                  <p className='text-xl capitalize mt-5'>Valladolid, Spain</p>
                </div>

                {/* {The starting of this Hotel 3 details} */}
                {showHotel3 && <div className='w-[80rem] border relative -ml-[850px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotel3} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>LeDomaine</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Valladolid, Spain</h2>
                    <p>Address</p>
                    <p>N-122 km 332.5</p>
                    <p>Sardon de Duero</p>
                    <p>Valladolid, 47340</p>
                    <p>Spain</p>

                    <p>Located less than a 2-hour drive from Madrid, this restored abbey is majestically set on 500 acres of vineyards. The heart of the estate is its award-winning winery; its soul, the ancient 12th century Romanesque abbey, a Spanish cultural heritage site. The intimate resort with just 30 guestrooms offers full butler service. Refectorio, the abbey’s original dining hall, is now a Michelin-starred restaurant. Guests enjoy well-being at the Santuario Wellness & Spa, Spain’s first spa sommelier. An array of curated experiences around wine, gastronomy, nature, art and wellness immerse guests inmmerse in the spirit and style of LeDomaine</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    <p>
                      <ul className=' pl-3'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>
                      <p className='italic'>**If the Spa facilities are closed during the guest stay, then they will instead receive a personalized gift case including one bottle of our exclusive Pagos and two of our Crafted Spanish Foods: Miltflores Honey and Wine Salt</p>
                    </p>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Concierge Desk, Laundry/Dry Cleaning/Pressing, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>
                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 3 details end here} */}
              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel4} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails4}>Abaton Island Resort & Spa</button>
                  <p className='text-xl capitalize mt-5'>Hersonissos, Crete, Greece</p>
                  <p className='mt-4'>Neighborhood</p>
                  <p className='text-xl'>Coastal resort city</p>
                </div>

                {/* {The starting of this Hotel 4 details} */}
                {showHotel4 && <div className='w-[80rem] border relative '>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotel4} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Abaton Island Resort & Spa</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Hersonissos, Crete, Greece</h2>
                    <p>Address</p>
                    <p>Themistokleous Avenue, Hersonissos</p>
                    <p>Hersonissos, Crete, 70014</p>
                    <p>Greece</p>

                    <p>Let loose at Abaton Island Resort & Spa, a labyrinth of gleaming white cubes located along Crete’s north coast just steps from gleaming beaches. The mod structures house 152 Zen-chic rooms, suites, and villas (many with private pools), plus an Elemis spa and five restaurants – including the island’s first Buddha-Bar Beach, which serves Asian fusion fare, DJ-spun music, and creative mixology all summer long. Parasol-covered sunbeds line 1,200 feet of shoreline, while the infinity-edge pool absolutely dazzles.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    
                      <ul className=' pl-3'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 4 details end here} */}
              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel5} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails5}>Abercrombie & Kent Villas</button>
                  <p className='text-xl capitalize mt-5'>Cheltenham, United Kingdom</p>
                </div>

                {/* {The starting of this Hotel 5 details} */}
                {showHotel5 && <div className='w-[80rem] border relative -ml-[450px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotel5} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Abercrombie & Kent Villas</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Cheltenham, United Kingdom</h2>
                    <p>Address</p>
                    <p>St. George's House</p>
                    <p>Ambrose Street</p>
                    <p>Cheltenham, GL50 3LG</p>
                    <p>United Kingdom</p>

                    <p>From chic beach retreats to countryside manors, Abercrombie & Kent has handpicked the best stays in idyllic locations. You can choose from a waterfront break away or a celebrity-worthy hideaway. Reserve a Scottish golf retreat for 10 near historic St Andrews or host next year’s family reunion at a magnificent 12-bedroom estate in the Caribbean. The best part is that every villa comes with its own concierge to orchestrate sightseeing tours to yacht rentals and booking the best table in your local Michelin-starred restaurant.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    
                      <ul className=' pl-3 text-start'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Concierge Desk, Laundry/Dry Cleaning/Pressing, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>

                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 5 details end here} */}
              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel7} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails6}>Acqualina Resort & Residences on the Beach</button>
                  <p className='text-xl capitalize mt-5'>Miami Beach, FL United States</p>
                </div>

                {/* {The starting of this Hotel 6 details} */}
                {showHotel6 && <div className='w-[80rem] border relative -ml-[850px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotel7} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Acqualina Resort & Residences on the Beach</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Miami Beach, FL United States</h2>
                    <p>Address</p>
                    <p>17875 Collins Ave</p>
                    <p>Miami Beach, Florida 33160</p>
                    <p>United States</p>

                    <p>Acqualina Resort & Residences is an award-winning Forbes Five Star, AAA Five Diamond property situated on 400 feet of pristine white sands. The resort’s unobstructed views create a unique, sea-level experience as the lush green gardens effortlessly succumb to the sand. Here, guests enjoy expansive amenities, including three oceanfront swimming pools; four restaurants, including the new Avra Miami and Il Mulino New York; a tranquil spa; and a marine-biology-inspired kids’ program.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    
                      <ul className=' pl-3 text-start'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Concierge Desk, Laundry/Dry Cleaning/Pressing, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>

                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 6 details end here} */}
              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel8} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails7}>Adare Manor</button>
                  <p className='text-xl capitalize mt-5'>Limerick, Ireland</p>
                </div>

                {/* {The starting of this Hotel 7 details} */}
                {showHotel7 && <div className='w-[80rem] border relative '>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotel8} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Adare Manor</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Limerick, Ireland</h2>
                    <p>Address</p>
                    <p>Adare Village</p>
                    <p>Limerick, V94 W8WR</p>
                    <p>Ireland</p>

                    <p>Adare Manor is a five-star luxury resort defined by its spectacular setting, authentic historic character and the impeccable service and welcome of its world-class team. The 103 guest rooms are air-conditioned and lavishly appointed with original art, Georgian-style furnishings and marble bathrooms. For fine dining, visit The Carriage House for cocktails and classic Irish cuisine or Michelin-star Oak Room restaurant with renowned chef Michael Tweedie. Get out on the greens at the pristine golf course, redesigned by Tom Fazio and the forthcoming host venue for the 2027 Ryder Cup, or experience our new resort wellness facility, the Padel Club.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    
                      <ul className=' pl-3 text-start'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Concierge Desk, Laundry/Dry Cleaning/Pressing, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>

                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 7 details end here} */}
              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel9} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails8}>Address Downtown</button>
                  <p className='text-xl capitalize mt-5'>Dubai, United Arab Emirates</p>
                </div>

                {/* {The starting of this Hotel 8 details} */}
                {showHotel8 && <div className='w-[80rem] border relative -ml-[450px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotel9} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Address Downtown</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Dubai, United Arab Emirates</h2>
                    <p>Address</p>
                    <p>Emaar Boulevard, Downtown Dubai</p>
                    <p>P. O. Box 123234</p>
                    <p>Dubai</p>
                    <p>United Arab Emirates</p>

                    <p>Discover Dubai from the award-winning Address Downtown – set, as you might expect, at the city’s epicenter, before the magnificent Burj Khalifa and next to the Dubai Mall. This flagship hotel offers a bevy of refined amenities: innovative restaurants, a full-service spa, in-the-know concierge service, limousine transportation within the city, and a five-tier swimming pool. Check out The Restaurant, known for its signature home-away-from-home dining experience, and the famous Zeta restaurant, offering Asian-Californian fusion cuisine. NEOS Bar and Lounge on the 63rd floor has the city’s best Dubai Fountain and Burj Khalifa views.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    
                      <ul className=' pl-3 text-start'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Concierge Desk, Laundry/Dry Cleaning/Pressing, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>

                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 8 details end here} */}
              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel10} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails9}>Aghadoe Heights Hotel and Spa</button>
                  <p className='text-xl capitalize mt-5'>Killarney, Ireland</p>
                  <p className='mt-4'>Neighborhood</p>
                  <p className='text-xl'>Coastal resort city</p>
                </div>

                {/* {The starting of this Hotel 9 details} */}
                {showHotel9 && <div className='w-[80rem] border relative -ml-[850px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotel9} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Aghadoe Heights Hotel and Spa</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Killarney, Ireland</h2>
                    <p className='mt-5'>Neighborhood</p>
                    <p>Lakes of Killarney</p>

                    <p className='mt-4'>Address</p>
                    <p>Aghadoe,</p>
                    <p>Lakes of Killarney</p>
                    <p>Killarney, V93 DH59</p>
                    <p>Ireland</p>

                    <p>Spa lovers descend in droves upon its renowned spa, yet the Aghadoe Heights Hotel & Spa maintains a discreet and exclusive atmosphere. With the warmth of a country house and the creature comforts of a five-star resort, the estate exudes the hospitality and magic of the Killarney countryside. Opt for a luscious Lake View Studio Suite or Deluxe Lake View for views of the famous Lakes of Killarney, as well as the most comfortable six-and-a-half-foot, custom-made beds. Of course, you'll want to visit the spa. Try the exclusive precious stone therapy – this total relaxation experience will rebalance your body, mind, and spirit.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    
                      <ul className=' pl-3 text-start'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Concierge Desk, Laundry/Dry Cleaning/Pressing, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>

                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 9 details end here} */}
              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel11} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails10}>Airelles Chateau de Versailles, Le Grand Controle</button>
                  <p className='text-xl capitalize mt-5'>Versailles, France</p>
                </div>

                {/* {The starting of this Hotel 10 details} */}
                {showHotel10 && <div className='w-[80rem] border relative'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotel10} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Airelles Chateau de Versailles, Le Grand Controle</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Versailles, France</h2>
                    <p className='mt-5'>Neighborhood</p>
                    <p>Lakes of Killarney</p>

                    <p className='mt-4'>Address</p>
                    <p>Le Grand Contrôle,</p>
                    <p>12 rue de l’Indépendance Américaine</p>
                    <p>Versailles, 78000</p>
                    <p>France</p>

                    <p>With its famous address, late eighteenth-century Marie Antoinette vibes, and personal butler service, Airelles Château de Versailles gives you a taste of French royalty life. In addition to 13 period-appropriate suites (think chevron parquet flooring and clawfoot tubs), the hotel features a restaurant where you can indulge in feasts fit for a king, plus a spa – complete with pool, sauna, and hammam – adorned with statues and hand-painted frescoes.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    
                      <ul className=' pl-3 text-start'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Concierge Desk, Laundry/Dry Cleaning/Pressing, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>

                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 10 details end here} */}
              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel12} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails11}>Airelles Courchevel, Les Airelles</button>
                  <p className='text-xl capitalize mt-5'>Courchevel, France</p>
                </div>

                {/* {The starting of this Hotel 11 details} */}
                {showHotel11 && <div className='w-[80rem] border relative -ml-[450px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotel12} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Airelles Courchevel, Les Airelles</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Courchevel, France</h2>

                    <p className='mt-4'>Address</p>
                    <p>rue du Jardin Alpin</p>
                    <p>Courchevel, 73120</p>
                    <p>France</p>

                    <p>In the heart of Jardin Alpin, the most elegant district of Courchevel 1850, Airelles Courchevel, Les Airelles offers a timeless experience. On the slopes, the ski experience is enhanced by the attention and care provided by Les Airelles’ dedicated team. An Austro-Hungarian castle spirit meets the chalet style, promising mountain lovers an unbeatable alpine experience. The beauty of the hotel’s pastel-hued frescoes, the diversity of stained-glass windows, and the refinement of its materials give the property an inimitable style that the elite crave. Les Airelles is the icon of French alpine luxury, where every single wish comes true.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    
                      <ul className=' pl-3 text-start'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Concierge Desk, Laundry/Dry Cleaning/Pressing, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>

                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 11 details end here} */}
              </div>
              <div className='w-96 h-[400px]'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={hotel13} alt="" />
                </div>
                <div className='w-full text-center mt-5'>
                  <button className='text-red-500 text-2xl font-semibold font-serif hover:text-slate-600 hover:translate-y-1' onClick={handleMoreDetails12}>Airelles Gordes, La Bastide</button>
                  <p className='text-xl capitalize mt-5'>Gordes, France</p>
                </div>

                {/* {The starting of this Hotel 12 details} */}
                {showHotel12 && <div className='w-[80rem] border relative -ml-[850px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={hotel13} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Airelles Gordes, La Bastide</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Gordes, France</h2>

                    <p className='mt-4'>Address</p>
                    <p>61 Rue de la combe</p>
                    <p>Gordes, 84220</p>
                    <p>France</p>

                    <p>In the very heart of Gordes, in a village suspended between the sky and the lavender fields, set atop a rocky outcrop, the stately and elegant Airelles Gordes, La Bastide offers panoramic views over the unique Luberon valley. With its sumptuous decor and its 2,000 artworks in the 34 rooms and six suites, this ancestral residence reflects the 18th century in all its glory and invites guests to travel in time. Carved into the rock, Le Spa Airelles is an invitation to focus on inner well-being. Away from the heat, the spa enables guests to savor an organic form of happiness. La Bastide de Gordes is a destination in and of itself.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    
                      <ul className=' pl-3 text-start'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>24-hour Security, Air Conditioning, Banquet Facilities, Conference Facilities, Connecting Rooms, Internet Access, Multi-lingual Staff, Parking, Pet Friendly, Restaurant, Wheelchair Accessible</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Services</h2>
                      <p>Concierge Desk, Laundry/Dry Cleaning/Pressing, Valet Parking, Wakeup Calls, Wedding Services</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>

                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>

                    </div>
                  </div>  
                </div>}
                {/* {The Hotel 12 details end here} */}
              </div>
            </div>
          </div>

           {/* { The start of CRUISE} */}
           <div className='mt-5' id='cruise'>
            <div className='mt-4 text-4xl font-bold font-serif w-80 text-center m-auto mb-6'>
              <h1 className='uppercase'>Cruise</h1>
              <p className='capitalize'>Find your cruise</p>
            </div>

            <div className='grid grid-cols-3 gap-3'>
              {/* The cruise 1 details start here  */}
              <div className='w-96 h-[600px]  '>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Cruise1} alt="" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleCruiseDetails1}>Western Caribbean</button>

                {/* {The starting of this Cruise 1 details} */}
                {showCruise1 && <div className='w-[80rem] border relative -ml-10 mt-5'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Cruise1} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64 h-screen'>
                    <h1 className='pt-5 text-6xl font-serif'>Royal Caribbean International</h1>
                    <h2 className='mt-3 text-4xl font-semibold'>Miami, FL United States</h2>
                    <div className='m-auto w-32 mt-8'>
                      <p>Address</p>
                      <p>1080 Caribbean Way Miami, Florida 33132 United States</p>
                    </div>

                    <p className='mt-5 leading-8 tracking-wide'> Royal Caribbean International has been delivering innovation at sea for more than 50 years. Each successive class of ships presents a new architectural marvel, enhanced with the latest technology and ever more exciting guest experiences for today’s adventurous traveler. The cruise line sails 26 ships to more than 270 destinations in 72 countries on six continents, including the Royal Caribbean private island in The Bahamas, Perfect Day at CocoCay. Royal Caribbean has also been voted “Best Cruise Line Overall” for 18 consecutive years in the Travel Weekly Readers’ Choice Awards. </p>

                  </div>  
                </div>}
                
                  <p>cruise Line</p>
                  <h1 className='text-xl'>Royal Caribbean International</h1>

                  <span className='mt-5'>Ship</span>
                  <h1>Explorer of the Seas</h1>
                  <h1 className='mt-8 text-xl mb-4'>Miami, FL United States to Miami, FL United States</h1>

                  <h2>14 Apr 2024 to 19 Apr 2024</h2>
                  <p>Promotion(s)</p>
                </div>
              </div>
               {/* {The Cruise 1 details end here} */}

                {/* The cruise 2 details start here */}
              <div className='w-96 h-[600px] '>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Cruise2} alt="" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleCruiseDetails2}>Eastern Caribbean With Bahamas</button>
                {showCruise2 && <div className='w-[80rem] border relative -ml-[460px] mt-5'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Cruise2} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64 h-screen'>
                    <h1 className='pt-5 text-6xl font-serif'>Royal Caribbean International</h1>
                    <h2 className='mt-3 text-4xl font-semibold'>Miami, FL United States</h2>
                    <div className='m-auto w-32 mt-8'>
                      <p>Address</p>
                      <p>1080 Caribbean Way Miami, Florida 33132 United States</p>
                    </div>

                    <p className='mt-5 leading-8 tracking-wide'> Royal Caribbean International has been delivering innovation at sea for more than 50 years. Each successive class of ships presents a new architectural marvel, enhanced with the latest technology and ever more exciting guest experiences for today’s adventurous traveler. The cruise line sails 26 ships to more than 270 destinations in 72 countries on six continents, including the Royal Caribbean private island in The Bahamas, Perfect Day at CocoCay. Royal Caribbean has also been voted “Best Cruise Line Overall” for 18 consecutive years in the Travel Weekly Readers’ Choice Awards. </p>

                  </div>  
                </div>}
                  <p>cruise Line</p>
                  <h1 className='text-xl'>Royal Caribbean International</h1>

                  <span className='mt-5'>Ship</span>
                  <h1>Explorer of the Seas</h1>
                  <h1 className='mt-8 text-xl mb-4'>Miami, FL United States to Miami, FL United States</h1>

                  <h2>14 Apr 2024 to 19 Apr 2024</h2>
                  <p>Promotion(s)</p>
                </div>
              </div>
              {/* The cruise 2 details end here */}


              {/* The cruise 3 details start here */}
              <div className='w-96 h-[600px] '>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Cruise3} alt="" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleCruiseDetails3}>Western Caribbean Charm</button>
                {showCruise3 && <div className='w-[80rem] border relative -ml-[880px] mt-5'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Cruise3} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64 h-screen'>
                    <h1 className='pt-5 text-6xl font-serif'>Royal Caribbean International</h1>
                    <h2 className='mt-3 text-4xl font-semibold'>Miami, FL United States</h2>
                    <div className='m-auto w-32 mt-8'>
                      <p>Address</p>
                      <p>1080 Caribbean Way Miami, Florida 33132 United States</p>
                    </div>

                    <p className='mt-5 leading-8 tracking-wide'> Royal Caribbean International has been delivering innovation at sea for more than 50 years. Each successive class of ships presents a new architectural marvel, enhanced with the latest technology and ever more exciting guest experiences for today’s adventurous traveler. The cruise line sails 26 ships to more than 270 destinations in 72 countries on six continents, including the Royal Caribbean private island in The Bahamas, Perfect Day at CocoCay. Royal Caribbean has also been voted “Best Cruise Line Overall” for 18 consecutive years in the Travel Weekly Readers’ Choice Awards. </p>

                  </div>  
                </div>}
                  <p>cruise Line</p>
                  <h1 className='text-xl'>Royal Caribbean International</h1>

                  <span className='mt-5'>Ship</span>
                  <h1>Explorer of the Seas</h1>
                  <h1 className='mt-8 text-xl mb-4'>Miami, FL United States to Miami, FL United States</h1>

                  <h2>14 Apr 2024 to 19 Apr 2024</h2>
                  <p>Promotion(s)</p>
                </div>
              </div>
              {/* The cruise 3 details end here  */}

              {/* The cruise 4 details start here  */}
              <div className='w-96 h-[600px] '>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Cruise4} alt="" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleCruiseDetails4}>Western Caribbean</button>
                {showCruise4 && <div className='w-[80rem] border relative -ml-[60px] mt-5'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Cruise4} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64 h-screen'>
                    <h1 className='pt-5 text-6xl font-serif'>Royal Caribbean International</h1>
                    <h2 className='mt-3 text-4xl font-semibold'>Miami, FL United States</h2>
                    <div className='m-auto w-32 mt-8'>
                      <p>Address</p>
                      <p>1080 Caribbean Way Miami, Florida 33132 United States</p>
                    </div>

                    <p className='mt-5 leading-8 tracking-wide'> Royal Caribbean International has been delivering innovation at sea for more than 50 years. Each successive class of ships presents a new architectural marvel, enhanced with the latest technology and ever more exciting guest experiences for today’s adventurous traveler. The cruise line sails 26 ships to more than 270 destinations in 72 countries on six continents, including the Royal Caribbean private island in The Bahamas, Perfect Day at CocoCay. Royal Caribbean has also been voted “Best Cruise Line Overall” for 18 consecutive years in the Travel Weekly Readers’ Choice Awards. </p>

                  </div>  
                </div>}
                  <p>cruise Line</p>
                  <h1 className='text-xl'>Royal Caribbean International</h1>

                  <span className='mt-5'>Ship</span>
                  <h1>Explorer of the Seas</h1>
                  <h1 className='mt-8 text-xl mb-4'>Miami, FL United States to Miami, FL United States</h1>

                  <h2>14 Apr 2024 to 19 Apr 2024</h2>
                  <p>Promotion(s)</p>
                </div>
              </div>
              {/* The cruise 4 details end here  */}

              {/* The cruise 5 details stat here  */}         
              <div className='w-96 h-[600px] '>
              <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Cruise5} alt="" />
                </div>
                  <div className='text-center mt-3 px-10'>
                  <button className='text-red-500 text-2xl font-semibold' onClick={handleCruiseDetails5}>Sète to Avignon</button>
                  {showCruise5 && <div className='w-[80rem] border relative -ml-[460px] mt-5'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Cruise5} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64 h-screen'>
                    <h1 className='pt-5 text-6xl font-serif'>Royal Caribbean International</h1>
                    <h2 className='mt-3 text-4xl font-semibold'>Miami, FL United States</h2>
                    <div className='m-auto w-32 mt-8'>
                      <p>Address</p>
                      <p>1080 Caribbean Way Miami, Florida 33132 United States</p>
                    </div>

                    <p className='mt-5 leading-8 tracking-wide'> Royal Caribbean International has been delivering innovation at sea for more than 50 years. Each successive class of ships presents a new architectural marvel, enhanced with the latest technology and ever more exciting guest experiences for today’s adventurous traveler. The cruise line sails 26 ships to more than 270 destinations in 72 countries on six continents, including the Royal Caribbean private island in The Bahamas, Perfect Day at CocoCay. Royal Caribbean has also been voted “Best Cruise Line Overall” for 18 consecutive years in the Travel Weekly Readers’ Choice Awards. </p>

                  </div>  
                </div>}
                  <p className='block'>cruise Line</p>
                  <h1 className='text-xl'>Royal Caribbean International</h1>

                  <span className='mt-5'>Ship</span>
                  <h1>Explorer of the Seas</h1>
                  <h1 className='mt-8 text-xl mb-4'>Miami, FL United States to Miami, FL United States</h1>

                  <h2>14 Apr 2024 to 19 Apr 2024</h2>
                  <p>Promotion(s)</p>
                </div>
              </div>
              {/* The cruise 6 details stat here  */}
              <div className='w-96 h-[600px] '>
              <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Cruise6} alt="" />
                </div>
                  <div className='text-center mt-3 px-10'>
                    <button className='text-red-500 text-2xl font-semibold' onClick={handleCruiseDetails6}>Dijon to Saint-Léger-Sur-Dheune</button>
                    {showCruise6 && <div className='w-[80rem] border relative -ml-[880px] mt-5'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Cruise6} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64 h-screen'>
                    <h1 className='pt-5 text-6xl font-serif'>Royal Caribbean International</h1>
                    <h2 className='mt-3 text-4xl font-semibold'>Miami, FL United States</h2>
                    <div className='m-auto w-32 mt-8'>
                      <p>Address</p>
                      <p>1080 Caribbean Way Miami, Florida 33132 United States</p>
                    </div>

                    <p className='mt-5 leading-8 tracking-wide'> Royal Caribbean International has been delivering innovation at sea for more than 50 years. Each successive class of ships presents a new architectural marvel, enhanced with the latest technology and ever more exciting guest experiences for today’s adventurous traveler. The cruise line sails 26 ships to more than 270 destinations in 72 countries on six continents, including the Royal Caribbean private island in The Bahamas, Perfect Day at CocoCay. Royal Caribbean has also been voted “Best Cruise Line Overall” for 18 consecutive years in the Travel Weekly Readers’ Choice Awards. </p>

                  </div>  
                </div>}
                  <p>cruise Line</p>
                  <h1 className='text-xl'>Royal Caribbean International</h1>

                  <span className='mt-5'>Ship</span>
                  <h1>Explorer of the Seas</h1>
                  <h1 className='mt-8 text-xl mb-4'>Miami, FL United States to Miami, FL United States</h1>

                  <h2>14 Apr 2024 to 19 Apr 2024</h2>
                  <p>Promotion(s)</p>
                </div>
              </div>
              {/* The cruise 6 details end here  */}
            </div>
          </div>

           {/* { The start of TOUR} */}
           <div className='mt-20' id='tour'>
            <div className='mt-4 text-4xl font-bold font-serif w-80 text-center m-auto mb-6'>
              <h1 className='uppercase'>Tour</h1>
              <p className='capitalize'>Find your tour</p>
            </div>

            <div className='grid grid-cols-3 gap-3'>
              <div className='w-96 h-[600px] bg-slate-50 '>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Tour1} alt="tour image" />
                </div>
                <div className='text-center mt-3 px-10 items-start'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleTourDetails1}>Licensed to Thrill - Family</button>

                  {/* {The starting of this Tour1 details} */}
                {showTour1 && <div className='w-[80rem] border relative -ml-10'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Tour1} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>The Kinloch Manor & Villas</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Taupo, New Zealand</h2>
                    <p>Address</p>
                    <p>261 Kinloch Road</p>
                    <p>New Zealand</p>

                    <p>When you stay at The Kinloch Manor & Villas, one thing’s for sure: You’re in for a wild time. It’s all about nature at this 18-room uberluxe lodge, set within the grounds of The Kinloch Club golf course on Lake Taupo (New Zealand’s largest lake). You can go sailing and white-water rafting, cast a line for some of the world’s best trout fishing, tramp to geothermal pools in UNESCO-designated Tongariro National Park, and tackle Jack Nicklaus’ only signature golf course in the country. Return for a manuka honey spa treatment and estate-to-plate cuisine prepared with delicious artistry.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    <p>
                      <ul className=' pl-3'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>
                    </p>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>Banquet Facilities, Conference Facilities, Culinary Program, Internet Access, Lounge/Bar, Restaurant, Villas</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Golf, Water Sports</p>
                    </div>
                  </div>  
                </div>}
                {/* End of Tour1 detaials */}

                  <div className='w-3/4 m-auto'>
                    <p className='mt-4 text-2xl space-x-2'>Taupo, New Zealand</p>
                    <p className='mt-4 text-lg'>Offered By The Kinloch Manor & Villas</p>
                    <p className='mt-4 text-xl'>Valid for Travel Now Through: 08 Jul 2024</p>
                  </div>
                </div>
              </div>

              <div className='w-96 h-[600px]  bg-slate-50 '>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Tour2} alt="tour image" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleTourDetails2}>Rekindle Your Senses </button>

                {/* {The starting of this Tour2 details} */}
                {showTour2 && <div className='w-[80rem] border relative -ml-[476px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Tour2} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Six Senses Samui</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Koh Samui, Thailand</h2>
                    <p>Address</p>
                    <p>9/10 Moo 5, Baan Plai Laem Bophut</p>
                    <p>Koh Samui, 84320 Thailand</p>

                    <p>Utterly and unabashedly romantic, Six Senses Samui is the most delightful daydream come true. Be it yoga at sunrise, deeply relaxing spa treatments (often designed for two), soaking in the sun, the azure view from your pool villa, or day trips discovering the many delights of the island, it’s all magical. And as for the nights, enjoy sunset cocktails, dinner under a velvet sky studded with twinkling stars, world-class food and wine... it’s moments like these that you will treasure forever.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    <p>
                      <ul className=' pl-3'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>
                    </p>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>Air Conditioning, Children's Programs, Complimentary Parking, Culinary Program, Internet Access, Meal Plans Available, Multi-lingual Staff, Restaurant, Villas</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Service</h2>
                      <p>Babysitting Services, Laundry/Dry Cleaning/Pressing, Limousine Service, Room Service 24-hours, Turndown Service, Wakeup Calls, Wedding Services</p>
                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Golf, Water Sports</p>
                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Butler Service, Complimentary Coffee/Tea, Iron/Ironing Board, Mini Bar</p>
                    </div>
                  </div>  
                </div>}
                {/* End of Tour2 detaials */}

                  <div className='w-3/4 m-auto'>
                    <p className='mt-4 text-2xl space-x-2'>Koh Samui, Thailand</p>
                    <p className='mt-4 text-lg'>Offered By Six Senses Samui</p>
                    <p className='mt-4 text-xl'>Valid for Travel Now Through: 12 Jul 2024</p>
                  </div>
                </div>
              </div>

              <div className='w-96 h-[600px]  bg-slate-50 '>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Tour3} alt="tour image" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleTourDetails3}>FANtastic EURO 2024 (2 nights)</button>

                {/* {The starting of this Tour3 details} */}
                {showTour3 && <div className='w-[80rem] border relative -ml-[880px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Tour3} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Mandarin Oriental, Munich</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Munich, Germany</h2>
                    <p className='mt-5'>Neighborhood</p>
                    <p className='mb-5'>Munich city center.</p>
                    <p>Address</p>
                    <p>Neuturmstrasse 1 Munich, 80331 </p>
                    <p>Germany</p>

                    <p>Set on a quiet street off the renowned Maximilianstrasse, Mandarin Oriental, Munich is praised for its historic setting and proximity to popular sights. This award-winning hotel redefines luxury as the only hotel in Germany with a Forbes Five Star award, voted among the top ten in Travel + Leisure's 100 World's Best Hotels. Beyond the exclusive location, one of the hotel's highlights is the roof terrace with a unique view over Munich toward the Alps. A culinary highlight at the hotel is Matsuhisa Munich, the first restaurant by Nobu Matsuhisa in Germany.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    <p>
                      <ul className=' pl-3'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>
                    </p>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>Banquet Facilities, Conference Facilities, Culinary Program, Internet Access, Lounge/Bar, Restaurant, Villas</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Service</h2>
                      <p>Babysitting Services, Concierge Desk, House Safe, Housekeeping -- Twice Daily, Laundry/Dry Cleaning/Pressing, Limousine Service, Room Service, Room Service 24-hours, Salon, Shoeshine Service, Turndown Service, Valet Parking, Wakeup Calls, Wedding Services</p>
                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Bicycle Rental, Fitness Center, Pool, Sauna</p>
                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Butler Service, Complimentary Coffee/Tea, Complimentary Newspaper, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>
                    </div>
                  </div>  
                </div>}
                {/* End of Tour3 detaials */}

                  <div className='w-3/4 m-auto'>
                    <p className='mt-4 text-2xl space-x-2'>Munich, Germany</p>
                    <p className='mt-4 text-lg'>Offered By Mandarin Oriental, Munich</p>
                    <p className='mt-4 text-xl'>Valid for Travel Now Through:13 Jul 2024</p>
                  </div>
                </div>
              </div>

              <div className='w-96 h-[600px]  bg-slate-50 '>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Tour4} alt="tour image" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleTourDetails4}>VIP NYC Shopping Tour and Pampering Experience</button>

                {/* {The starting of this Tour4 details} */}
                {showTour4 && <div className='w-[80rem] border relative -ml-16'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Tour4} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Beyond Times Square</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>New York City, NY United States</h2>
                    <p>Address</p>
                    <p>300 Park Avenue 2nd Floor</p>
                    <p>New York City, New York 10022 United States</p>

                    <p>Beyond Times Square is a New York City-based destination management company with a 19-year history of delivering tailormade, luxury travel programs with authentic local experiences. With its exceptional expertise and extensive network of specialists, local experts, and high-quality vendors in the travel industry, Beyond Times Square offers supreme hospitality to both individual and group travelers in New York City, Washington D.C., Boston, Philadelphia, Niagara Falls, and surrounding areas. For further information, please visit www.btsq.com.</p>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>Banquet Facilities, Conference Facilities, Culinary Program, Internet Access, Lounge/Bar, Restaurant, Villas</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Golf, Water Sports</p>
                    </div>
                  </div>  
                </div>}
                {/* End of Tour4 detaials */}

                  <div className='w-3/4 m-auto'>
                    <p className='mt-4 text-2xl space-x-2'>New York City, NY United States</p>
                    <p className='mt-4 text-lg'>Offered By Beyond Times Square</p>
                    <p className='mt-4 text-xl'>Valid for Travel Now Through: 15 Jul 2024</p>
                  </div>
                </div>
              </div>

              <div className='w-96 h-[600px]  bg-slate-50 '>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Tour5} alt="tour image" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleTourDetails5}>THAI WELLNESS JOURNEY</button>

                {/* {The starting of this Tour5 details} */}
                {showTour5 && <div className='w-[80rem] border relative -ml-[476px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Tour5} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Anantara Lawana Koh Samui Resort</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Koh Samui, Thailand</h2>
                    <p>Address</p>
                    <p>92/1 Moo 2 Bophut Koh Samui, 84320</p>
                    <p>Thailand</p>

                    <p>Designed to reflect the island’s history and culture, Anantara Lawana Koh Samui Resort features shop-house-style pool suites and lagoon villas artfully arranged like a peaceful fishing village, local specialties served in the secluded canopy of a 120-year-old jungle, and spa treatments that integrate ancient healing techniques. You’ll also find immersive activities ranging from hands-on culinary programs and SCUBA certification classes to Muay Thai boxing lessons in the resort’s rooftop gym.</p>

                    <p className='pt-5 text-4xl font-semibold'>Virtuoso Amenities for your stay:</p>

                    <h2 className='mt-3 text-2xl font-semibold text-start'>For 2024:</h2>
                    <p>
                      <ul className=' pl-3'>
                        <li>Upgrade on arrival, subject to availability</li>
                        <li>Daily breakfast credit of $25 per person, for up to two guests per bedroom, applicable in Neighbors Café (credit is non-cumulative)</li>
                        <li>$100 USD Food & Beverage credit, once during stay, applicable in The Osprey Restaurant and in Harriet’s Lounge on the 10th floor (not combinable, not valid on room rate, no cash value if not redeemed in full)</li>
                        <li>Early Check-In / Late Check-Out, subject to availability</li>
                        <li>Complimentary Wi-Fi</li>
                      </ul>
                    </p>

                    <div className='px-40'>
                      <h1 className='pt-5 text-4xl font-semibold'>At the Hotel</h1>
                      <h2 className='mt-3 text-2xl font-semibold '>Features</h2>
                      <p>Banquet Facilities, Conference Facilities, Culinary Program, Internet Access, Lounge/Bar, Restaurant, Villas</p>

                      <h2 className='mt-3 text-2xl font-semibold '>Service</h2>
                      <p>Babysitting Services, Concierge Desk, Currency Exchange, Laundry/Dry Cleaning/Pressing, Room Service, Room Service 24-hours, Turndown Service, Wedding Services</p>
                      <h2 className='mt-3 text-2xl font-semibold '>Recreation</h2>
                      <p>Golf, Water Sports</p>
                      <h2 className='mt-3 text-2xl font-semibold '>In Your Room</h2>
                      <p>Bathrobes, Complimentary Coffee/Tea, Hair Dryer, Iron/Ironing Board, Mini Bar, Safe, Slippers</p>
                    </div>
                  </div>  
                </div>}
                {/* End of Tour5 detaials */}

                  <div className='w-3/4 m-auto'>
                    <p className='mt-4 text-2xl space-x-2'>Koh Samui, Thailand</p>
                    <p className='mt-4 text-lg'>Offered By Anantara Lawana Koh Samui Resort</p>
                    <p className='mt-4 text-xl'>Valid for Travel Now Through: 15 Jul 2024</p>
                  </div>
                </div>
              </div>

              <div className='w-96 h-[600px]   bg-slate-50'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Tour6} alt="tour image" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleTourDetails6}>Luxurious Dubai & Maldives 10 night escape </button>

                {/* {The starting of this Tour6 details} */}
                {showTour6 && <div className='w-[80rem] border relative -ml-[880px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Tour6} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Arabian Adventures</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Dubai, United Arab Emirates</h2>
                    <p>Address</p>
                    <p>Emirates Holidays Building, 4th Floor Sheikh Zayed Road</p>
                    <p>New Zealand P.O. Box. 7631 Dubai,</p>
                    <p>United Arab Emirates</p>

                    <p>Arabian Adventures, headquartered in Dubai, is part of the Destination and Leisure Management division of the Emirates Group. With offices in Dubai, as well as associates across the world, we are the region’s leading destination management company providing services of an exceptional standard, and are perfectly placed to meet all of your requirements. With over 300 professional, multilingual staff, we're equipped to provide a wide range of exclusive tailor-made services - from planning, contracting hotel space, transfers, arrivals and in-resort assistance, to organising excursions and safaris and managing sports trips and events. Our outstanding reputation, both for our creative approach and attention to detail, has made us the first choice for some of the world's most reputed tour operators and travel advisors. Our services operate in the United Arab Emirates (UAE), Oman, Qatar and the Maldives.</p>
                  </div>  
                </div>}
                {/* End of Tour6 detaials */}

                  <div className='w-3/4 m-auto'>
                    <p className='mt-4 text-2xl space-x-2'>Dubai, United Arab Emirates</p>
                    <p className='mt-4 text-lg'>Offered By Arabian Adventures</p>
                    <p className='mt-4 text-xl'>Valid for Travel Now Through: 19 Jul 2024</p>
                  </div>
                </div>
              </div>

              <div className='w-96 h-[600px]   bg-slate-50'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Tour7} alt="tour image" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleTourDetails7}>Unveil the Perfect Paradise -Dubai and the Maldives</button>

                {/* {The starting of this Tour7 details} */}
                {showTour7 && <div className='w-[80rem] border relative -ml-10'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Tour7} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Arabian Adventures</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Dubai, United Arab Emirates</h2>
                    <p>Address</p>
                    <p>Emirates Holidays Building, 4th Floor Sheikh Zayed Road P.O. Box. 7631 Dubai,</p>
                    <p>United Arab Emirates</p>

                    <p>Arabian Adventures, headquartered in Dubai, is part of the Destination and Leisure Management division of the Emirates Group. With offices in Dubai, as well as associates across the world, we are the region’s leading destination management company providing services of an exceptional standard, and are perfectly placed to meet all of your requirements. With over 300 professional, multilingual staff, we're equipped to provide a wide range of exclusive tailor-made services - from planning, contracting hotel space, transfers, arrivals and in-resort assistance, to organising excursions and safaris and managing sports trips and events. Our outstanding reputation, both for our creative approach and attention to detail, has made us the first choice for some of the world's most reputed tour operators and travel advisors. Our services operate in the United Arab Emirates (UAE), Oman, Qatar and the Maldives.</p>

                  </div>  
                </div>}
                {/* End of Tour7 detaials */}

                  <div className='w-3/4 m-auto'>
                    <p className='mt-4 text-2xl space-x-2'>Male, Maldives</p>
                    <p className='mt-4 text-lg'>Offered By Arabian Adventures</p>
                    <p className='mt-4 text-xl'>Valid for Travel Now Through: 19 Jul 2024</p>
                  </div>
                </div>
              </div>

              <div className='w-96 h-[600px]   bg-slate-50'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Tour8} alt="tour image" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleTourDetails8}>Discover the wonders of Oman - 7 days 6 nights</button>

                {/* {The starting of this Tour8 details} */}
                {showTour8 && <div className='w-[80rem] border relative -ml-[490px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Tour8} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Arabian Adventures</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>Dubai, United Arab Emirates</h2>
                    <p>Address</p>
                    <p>Emirates Holidays Building, 4th Floor Sheikh Zayed Road P.O. Box. 7631 Dubai,</p>
                    <p>United Arab Emirates</p>

                    <p>Destination and Leisure Management division of the Emirates Group. With offices in Dubai, as well as associates across the world, we are the region’s leading destination management company providing services of an exceptional standard, and are perfectly placed to meet all of your requirements. With over 300 professional, multilingual staff, we're equipped to provide a wide range of exclusive tailor-made services - from planning, contracting hotel space, transfers, arrivals and in-resort assistance, to organising excursions and safaris and managing sports trips and events. Our outstanding reputation, both for our creative approach and attention to detail, has made us the first choice for some of the world's most reputed tour operators and travel advisors. Our services operate in the United Arab Emirates (UAE), Oman, Qatar and the Maldives.</p>

                  </div>  
                </div>}
                {/* End of Tour8 detaials */}

                  <div className='w-3/4 m-auto'>
                    <p className='mt-4 text-2xl space-x-2'>Muscat, Oman</p>
                    <p className='mt-4 text-lg'>Offered By Arabian Adventures</p>
                    <p className='mt-4 text-xl'>Valid for Travel Now Through: 19 Jul 2024</p>
                  </div>
                </div>
              </div>

              <div className='w-96 h-[600px]  bg-slate-50'>
                <div className='w-full h-1/2'>
                  <img className='w-full h-full' src={Tour9} alt="tour image" />
                </div>
                <div className='text-center mt-3 px-10'>
                <button className='text-red-500 text-2xl font-semibold' onClick={handleTourDetails9}>Charleston History Multiday Experience</button>

                {/* {The starting of this Tour9 details} */}
                {showTour9 && <div className='w-[80rem] border relative -ml-[880px]'>
                  <div className='w-full h-2/5'>
                    <img className='w-full h-full' src={Tour9} alt=""/>
                  </div>
                  <div className='bg-slate-100 text-center px-64'>
                    <h1 className='pt-5 text-4xl font-semibold'>Beyond Times Square</h1>
                    <h2 className='mt-3 text-2xl font-semibold'>New York City, NY United States</h2>
                    <p>Address</p>
                    <p>300 Park Avenue 2nd Floor New York City, New York 10022</p>
                    <p>United States</p>

                    <p>Beyond Times Square is a New York City-based destination management company with a 19-year history of delivering tailormade, luxury travel programs with authentic local experiences. With its exceptional expertise and extensive network of specialists, local experts, and high-quality vendors in the travel industry, Beyond Times Square offers supreme hospitality to both individual and group travelers in New York City, Washington D.C., Boston, Philadelphia, Niagara Falls, and surrounding areas. For further information, please visit www.btsq.com.</p>

                  </div>  
                </div>}
                {/* End of Tour9 detaials */}

                  <div className='w-3/4 m-auto'>
                    <p className='mt-4 text-2xl space-x-2'>Charleston, SC United States</p>
                    <p className='mt-4 text-lg'>Offered By Beyond Times Square</p>
                    <p className='mt-4 text-xl'>Valid for Travel Now Through: 24 Jul 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

           {/* { The start of ABOUT US} */}
           <div className='mt-10' id='abou-us'>
            <div className='mt-4 text-4xl font-bold font-serif w-200 text-center m-auto mb-6'>
              <h1 className='capitalize'>About Travel Experts</h1>
            </div>
            <p className='mt-5 text-lg'> 
              Travel Experts has been a premier travel design firm since 1989, made up of only the industry’s premium travel counselors. Travel Experts members are experienced professionals who operate as independent contractors, fully embracing the entrepreneurial spirit of their individual businesses. They have the travel expertise and business acumen needed to enable them to work independently while at the same time enjoying the advantages of associating with a nationally recognized premier agency.
              What this means to you, the traveler is the best possible service and attention because it is in their best interest to orchestrate an amazing trip for you. Through our membership in Virtuoso, an invitation only network of the world's best travel agencies, we can offer you our personal relationships with the top hotels, resorts, spas, lodges, airline, cruise lines and tour companies to provide you with incredible values and rare experiences - from complimentary upgrades and amenities to special recognition and privileged access.
              As you browse through our travel consultants, you will note an extensive variety of specialists who can satisfy all types of travel needs including vacation planning, family adventure, group and incentive travel, religious travel and corporate travel management. We invite you to search out the specialist that will create the perfect trip.
            </p>
          </div>

          <div className='w-3/4 mx-auto mt-5 text-center'>
            <h1 className='mt-5 capitalize text-4xl font-semibold'>Our Management Team</h1>
            <h2 className='mt-5 text-2xl'>TravelExpert Team</h2>
            <div className='grid grid-cols-4 gap-3 items-center p-3 mt-5'>
              <div className=' w-48 h-48 p-2'>
                <h1 className='text-xl font-bold mt-3'>Susan Ferrell</h1>
                <p className='mt-4 '>President & Owner</p>
                <a href="/" className='text-red-400 mt-5'>Email Susan</a>
              </div>
              <div className=' w-48 h-48 p-2'>
                <h1 className='text-xl font-bold mt-3'>Sharon Fake</h1>
                <p className='mt-4 '>Executive Director</p>
                <a href="/" className='text-red-400 mt-5'>Email Sharon</a>
              </div>
              <div className=' w-48 h-48 p-2'>
                <h1 className='text-xl font-bold mt-3'>Claire Canady</h1>
                <p className='mt-4 '>Director, NC Operations</p>
                <a href="/" className='text-red-400 mt-5'>Email Claire</a>
              </div>
              <div className=' w-48 h-48 p-2'>
               <h1 className='text-xl font-bold t-3'>Heather McIntyre</h1>
                <p className='mt-4 '>Director, Technology & Finance</p>
                <a href="/" className='text-red-400 mt-5'>Email Heather</a>
              </div>
            </div>
          </div>
          
        <footer className='mt-5 w-full  text-center bg-black rounded-t-3xl'>
          <div className='flex justify-start items-start pl-4 text-white'>
            <div className='mt-5 border-2 rounded-lg p-2 '>
              <p className='text-lg font-semibold font-serif'>Contact Information</p>
              <div className='space-x-3'>
                <label className=' ' htmlFor="address">ADDRESS:</label>
                <strong>Busura, Kombo Central</strong>
              </div>
              <div className='space-x-3 mt-3'>
                <label className='' htmlFor="tell">TELL:</label>
                <strong>+2207145920 / +2205847203</strong>
              </div>
              <div className='space-x-3 mt-3'>
                <label className='' htmlFor="email">EMAIL:</label>
                <strong>musajoof447@gmail.com</strong>
              </div>
            </div>
            <p className='text-white text-lg p-4 '> &copy; Develop By <strong>Musa Joof</strong>, All Right Reserved 2024</p>
          </div>

          <nav className='w-3/4 m-auto mt-3 mb-8 text-white'>
            <ul className='flex justify-between items-center m-auto text-2xl font-bold'>
              <li className='cursor-pointer hover:text-slate-600 hover:translate-y-1'> 
                <a href="#hotel">Hotel</a>
              </li>
              <li className='cursor-pointer hover:text-slate-600 hover:translate-y-1'> 
                <a href="#cruise">Cruise</a>
              </li>
              <li className='cursor-pointer hover:text-slate-600 hover:translate-y-1'> 
                <a href="#tour">Tour</a>
              </li>
              <li className='cursor-pointer hover:text-slate-600 hover:translate-y-1'> 
                <a href="#abou-us">About Us</a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
       ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}

    </>
  )
}

export default App
