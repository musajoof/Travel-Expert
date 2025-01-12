import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <p className="mt-4">
        Get in touch with us for more information about our tours and services.
      </p>
      <p>Email: <a href="mailto:">musajoof447@gmail.com</a></p>
      <p>Phone: +220 7145920</p>
      <p>Facebook: {" "}
        <a
          href="https://www.facebook.com/travelexpertsnc/?ref=ts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Facebook
        </a>
      </p>
      <p>Instagram: {" "}
        <a
          href="https://www.instagram.com/travelexpertsnc/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Instagram
        </a>
      </p>
    </div>
  );
};

export default Contact;
