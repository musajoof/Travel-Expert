import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-center mb-8">
          Welcome to Travel Expert! Your trusted partner for exploring the world. 
          We specialize in creating unforgettable travel experiences tailored just 
          for you. Whether you're dreaming of a luxurious hotel stay, a serene 
          cruise, or an adventurous tour, we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              At Travel Expert, our mission is to inspire and facilitate seamless 
              travel experiences for our clients. We believe in personalized 
              travel planning and aim to exceed your expectations with every journey.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p>
              With years of expertise, a dedicated team, and partnerships with 
              top travel service providers, we ensure that every detail of your 
              trip is taken care of. Choose us for a hassle-free, memorable travel 
              experience.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Email: <a href="mailto:">musajoof447@gmail.com</a></p>
          <p>Phone: +220 7145920</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
