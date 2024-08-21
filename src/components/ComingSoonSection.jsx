import React from 'react';
import appStore from '../assets/Group.png'; // Add the correct path to your app store image
import googlePlay from '../assets/Group 3.png'; // Add the correct path to your Google Play image
import phoneImage from '../assets/phone.svg'; // Add the correct path to your phone image

const ComingSoonSection = () => {
  return (
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
        <img src={phoneImage} alt="MyThrift App" className="h-80 w-auto" />
        {/* Spotlight Background */}
      
      </div>
    </section>
  );
};

export default ComingSoonSection;
