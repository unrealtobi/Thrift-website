import React, { useEffect } from 'react';

const Countdown = () => {
  useEffect(() => {
    // Dynamically load the external countdown script
    const script = document.createElement('script');
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script to avoid memory leaks
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-customOrange min-h-96 flex flex-col justify-center items-center relative bg-[url('/src/assets/frame43.png')] bg-no-repeat bg-cover bg-center">
      <h1 className="text-white text-3xl font-bold mb-2 mt-7">We are still cooking this project</h1>
      {/* <p className="text-white text-xs mb-">While you wait, join the waitlist. My Thrift will launch in:</p> */}
      
      {/* Countdown Timer */}
      <div className="flex w-8/12 justify-center ">
        <a href="https://logwork.com/countdown-gpmd" 
           className="countdown-timer"
           data-timezone="Africa/Lagos" 
           data-textcolor="#ffffff"
           data-date="2024-09-14 20:32" 
           data-background="#f99575"
           data-digitscolor="#ffffff"
           data-unitscolor="#fafafa" >
          While you wait, join the waitlist. My Thrift will launch in:
        </a>
      </div>
    </div>
  );
};

export default Countdown;
