import React from 'react';
import appStore from '../assets/Group.png'; // Add the correct path to your app store image
import googlePlay from '../assets/Group 3.png'; // Add the correct path to your Google Play image
import phoneImage from '../assets/phone.svg'; // Add the correct path to your phone image
import manSoon from '../assets/mansoon.svg'

const ComingSoonSection = () => {
  return (
    <div>
    <section className="w-full max-w-[1440px] mx-auto px-6 py-16 flex items-center justify-between">
      {/* Left Side: Text */}
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold mb-4">
          Coming soon to the app store
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Get ready to take your thrifting experience to the next level with the
          MyThrift app. Soon, you'll be able to explore, shop, and snag the best
          thrifted finds right from your phone. Stay tuned and be the first to
          know when we launch!
        </p>
        <div className="flex gap-4">
          <img src={googlePlay} alt="Google Play Store" className="h-12 cursor-pointer" />
          <img src={appStore} alt="App Store" className="h-12 cursor-pointer" />
        </div>
      </div>

      {/* Right Side: Phone Image */}
      <div className="relative">
        <img src={phoneImage} alt="MyThrift App" className="h-auto w-auto" />
        {/* Spotlight Background */}
      
      </div>
    </section>


    <section className="w-full max-w-[1440px] mx-auto px-6  flex items-center justify-between  bg-[url('/src/assets/curveline.png')] bg-no-repeat  bg-center">
      {/* Left Side: image*/}
      <div className="relative">
        <img src={manSoon} alt="MyThrift App" className="h-auto w-auto" />
      </div>
      
      {/* Right Side: text */}
     <div id="coming-soon" className="max-w-lg">
        <h2 className="text-4xl font-bold mb-4">
        <span className="text-black">Be the First to Experience</span>
    <span className="text-customOrange">My Thrift?</span>
        </h2>

        <p className="text-lg text-gray-700 mb-6">
        Join our waitlist now and get early access to a world of unique thrifted and new fashion. Don’t miss out—secure your spot today!
        </p>


        {/* Waitlist */}

        {/* select who you are */}
        <div className="relative text-gray-700">
        <select 
          className="block appearance-none w-full mb-5 max-w-md bg-[#F7F7F7] border  text-gray-700 placeholder-gray-500 px-4 py-3 pr-8 rounded-full  focus:outline-none  focus:border-gray-500"
          aria-label="Who are you registering as"
        >
          <option >Who are you registering as...</option>
          <option > Vendor </option>
          <option> Cgitustomer </option>
        </select>
        <div className="pointer-events-none absolute mr-20 inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.516 7.548l4.486 4.486 4.485-4.486a.75.75 0 1 1 1.06 1.06l-5.015 5.015a.75.75 0 0 1-1.06 0l-5.015-5.015a.75.75 0 1 1 1.06-1.06z"/>
          </svg>
        </div>
      </div>
    
        {/* Email Input */}
        <div className="flex w-full max-w-md">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Email Address"
          className="flex-grow py-3 px-4 bg-[#F7F7F7] text-gray-700 placeholder-gray-500 rounded-l-full focus:outline-none  focus:border-gray-500"
        />
        {/* Button */}
        <button className="bg-gradient-to-r from-customOrange to-red-500 text-white font-semibold py-3 px-6 rounded-r-full hover:bg-orange-600">
          Join the Waitlist
        </button>
      </div>
      </div>

    </section>

    

    </div>
    
    
  );
};

export default ComingSoonSection;
