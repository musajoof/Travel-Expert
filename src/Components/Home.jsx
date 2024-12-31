import React from "react";
import Card from "./Card";

import { useEffect, useState } from "react";
// import axios from "axios";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching Properties:", error);
      }
    };

    fetchProperties();
  }, []);
console.log(properties)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Explore Your Travel Options
        </h1>
        <div id="hotel" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <Card key={`property-${index}`} data={property} />
            ))}
          </div>
        </div>
        {/* <div id="cruise" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Cruises</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cruises.map((cruise, index) => (
              <Card key={`cruise-${index}`} data={cruise} />
            ))}
          </div>
        </div>
        <div id="tour" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tours.map((tour, index) => (
              <Card key={`tour-${index}`} data={tour} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
