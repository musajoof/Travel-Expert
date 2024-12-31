import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Travel Expert. All rights reserved.
        </p>
        <p className="text-sm md:text-base">
          <a
            href="#about-us"
            className="text-blue-500 hover:underline"
          >
            About Us
          </a>{" "}
          |{" "}
          <a
            href="#contact"
            className="text-blue-500 hover:underline"
          >
            Contact Us
          </a>{" "}
          |{" "}
          <a
            href="#terms"
            className="text-blue-500 hover:underline"
          >
            Terms & Conditions
          </a>
        </p>
        <div className="mt-3 flex justify-center gap-4">
          <a
            href="https://www.facebook.com/travelexpertsnc/?ref=ts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/travelexpertsnc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
