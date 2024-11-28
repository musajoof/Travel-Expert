import React, { useState } from "react";

const Card = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="w-96 h-[600px]">
      {/* Image Section */}
      <div className="w-full h-1/2">
        <img className="w-full h-full" src={data.image} alt={data.title} />
      </div>

      {/* Content Section */}
      <div className="text-center mt-3 px-10">
        <button
          className="text-red-500 text-2xl font-semibold"
          onClick={handleToggleDetails}
        >
          {data.title}
        </button>

        {/* Detailed View */}
        {showDetails && (
          <div className="w-[80rem] border relative -ml-[460px] mt-5">
            <div className="w-full h-2/5">
              <img
                className="w-full h-full"
                src={data.image}
                alt={data.title}
              />
            </div>
            <div className="bg-slate-100 text-center px-64 h-screen">
              <h1 className="pt-5 text-6xl font-serif">{data.company}</h1>
              <h2 className="mt-3 text-4xl font-semibold">{data.location}</h2>
              <div className="m-auto w-32 mt-8">
                <p>Address</p>
                <p>{data.address}</p>
              </div>
              <p className="mt-5 leading-8 tracking-wide">{data.description}</p>
            </div>
          </div>
        )}

        {/* Summary Info */}
        <p>{data.category}</p>
        <h1 className="text-xl">{data.company}</h1>
        <span className="mt-5">Details</span>
        <h1>{data.details}</h1>
        <h1 className="mt-8 text-xl mb-4">{data.itinerary || data.address}</h1>
        <h2>{data.dates || ""}</h2>
        <p>Promotion(s)</p>
      </div>
    </div>
  );
};

export default Card;
