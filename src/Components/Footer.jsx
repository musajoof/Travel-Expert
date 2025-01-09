import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Travel Expert. All rights reserved.
        </p>
        <p className="text-sm md:text-base">
          <Link to="/about-us" className="text-blue-500 hover:underline">
            About Us
          </Link>{" "}
          |{" "}
          <Link to="/contact" className="text-blue-500 hover:underline">
            Contact Us
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-blue-500 hover:underline">
            Terms & Conditions
          </Link>
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
          <Link to="/help" className="text-blue-500 hover:underline">
            Online Help
          </Link>
          <a 
          target="_blank"
          href="https://docs.google.com/document/d/1tabqD0qrtPTUHGkHCJEDqASXmcQbJyYfZZnwmq7Z2_M/edit?addon_store&tab=t.0" download>
            Download User Manual
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
