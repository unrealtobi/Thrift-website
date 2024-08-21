import React, { useEffect } from 'react';
import ladyImage from '../assets/lady.svg';
import peopleImg from '../assets/people.svg';

const Hero = () => {
  useEffect(() => {
    // Add the countdown script to the document
    const script = document.createElement('script');
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleScroll = () => {
    document.getElementById('coming-soon').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-customOrange relative overflow-hidden bg-[url('/src/assets/frame43.png')] bg-no-repeat bg-cover bg-no-repeat bg-center">
      <nav className="sticky top-0 z-50 ">
        <div className="container mt-6 mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src="../src/assets/logo.png" alt="My Thrift Logo" />
          </div>
         
          {/* Links */} 
          <div className="flex items-center space-x-6">
            <div className="mt-w-64">
              <a 
                href="https://logwork.com/countdown-gpma" 
                className="countdown-timer"
                data-style="columns" 
                data-timezone="Africa/Lagos" 
                data-textcolor="#ffffff" 
                data-date="2024-09-14 20:32" 
                data-background="#F9531E" 
                data-digitscolor="#ffffff" 
                data-unitscolor="#F9531E"
              >
                Launch Date
              </a>
            </div>
         
            {/* Join the Waitlist Button */}
            <button 
              onClick={handleScroll}
              className="bg-white text-customOrange font-semibold py-2 px-4 rounded-full hover:bg-gray-100"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py- text-center lg:text-left">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <h1 className="text-white text-4xl font-bold lg:text-5xl">
              Browse 
              <span className="bg-[url('/src/assets/line.png')] bg-no-repeat bg-bottom"> Local Markets </span>
              <br />
              from the Comfort of Your Home
            </h1>
            <p className="mt-6 text-xs text-white lg:text-">
              Step into a world of affordable thrifted (secondhand) finds with MyThrift – your online gateway to the best local markets and vendors. Explore, shop, and discover rare gems, all from the comfort of your home.
            </p>

            {/* Countdown Timer */}
            <div className="mt-8 gap-7 flex justify-center lg:justify-start">
              <img src={peopleImg} alt="People icons" />
              <button 
                onClick={handleScroll}
                className="bg-white text-customOrange font-semibold py-2 px-4 rounded-full hover:bg-gray-100"
              >
                Join the Waitlist
              </button>
            </div>
          </div>

          <div className="lg:w-6/12 mt-28 lg:mt-0 pt-32 pl-10 pb-0 flex lg:justify-end">
            <img  
              src={ladyImage}
              alt="Happy shopper with bags"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
