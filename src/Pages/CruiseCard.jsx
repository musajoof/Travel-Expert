import React from 'react';

const CruiseCard = ({ cruiseTitle, imageSrc, detailsVisible, handleDetailsToggle, details }) => {
  return (
    <div className="w-full max-w-xs mx-auto h-auto bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-800 dark:text-gray-100">
      {/* Cruise Image */}
      <div className="w-full h-48">
        <img className="w-full h-full object-cover" src={imageSrc} alt={cruiseTitle} />
      </div>

      {/* Cruise Details */}
      <div className="text-center mt-3 px-4">
        <button
          className="text-red-500 text-lg sm:text-xl md:text-2xl font-semibold"
          onClick={handleDetailsToggle}
        >
          {cruiseTitle}
        </button>

        {/* Toggleable Cruise Details */}
        {detailsVisible && (
          <div className="w-full max-w-5xl mx-auto border mt-5">
            <div className="w-full h-60 sm:h-80 md:h-96">
              <img className="w-full h-full object-cover" src={imageSrc} alt={cruiseTitle} />
            </div>
            <div className="bg-slate-100 text-center p-6 sm:p-12 md:p-20 dark:bg-gray-900 dark:text-gray-100">
              <h1 className="pt-5 text-2xl sm:text-3xl md:text-4xl font-serif">
                {details.title}
              </h1>
              <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold">
                {details.location}
              </h2>
              <div className="m-auto mt-5">
                <p className="text-sm sm:text-base md:text-lg">Address</p>
                <p className="text-sm sm:text-base md:text-lg">{details.address}</p>
              </div>
              <p className="mt-5 text-sm sm:text-base md:text-lg leading-8 tracking-wide">
                {details.description}
              </p>
            </div>
          </div>
        )}

        {/* Summary Information */}
        <p className="mt-4 text-sm sm:text-base md:text-lg">Cruise Line</p>
        <h1 className="text-lg sm:text-xl md:text-2xl">{details.cruiseLine}</h1>
        <span className="mt-5">Ship</span>
        <h1 className="text-lg sm:text-xl md:text-2xl">{details.ship}</h1>
        <h1 className="mt-4 text-lg sm:text-xl md:text-2xl mb-4">{details.itinerary}</h1>
        <h2 className="text-sm sm:text-base md:text-lg">{details.dates}</h2>
        <p className="text-sm sm:text-base md:text-lg">Promotion(s)</p>
      </div>
    </div>
  );
};

export default CruiseCard;
