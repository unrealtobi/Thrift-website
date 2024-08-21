import React from 'react';
import ladyImage from '../assets/lady.svg';
import peopleImg from '../assets/people.svg'

const Hero = () => {
  return (
    <div className="bg-customOrange relative overflow-hidden bg-[url('/src/assets/frame43.png')] bg-no-repeat  bg-cover bg-no-repeat bg-center">
       <nav className="sticky top-0 z-50 ">
       
      <div className="container mt-6 mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="">
        <img 
        src="../src/assets/logo.png" 
        alt="" />
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6">

         
          
          {/* Join the Waitlist Button */}
         
          <button className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-100">
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
              <span className="bg-[url('/src/assets/line.png')] bg-no-repeat bg-bottom  "> Local Markets </span>
              
              <br />
              <span className="">
                 <img src="../src/asset/frame43.png" alt="" />
              </span>
               from the Comfort of Your Home
            </h1>
            <p className="mt-6 text-xs text-white lg:text-">
              Step into a world of affordable thrifted (secondhand) finds with MyThrift – your online gateway to the best local markets and vendors. Explore, shop, and discover rare gems, all from the comfort of your home.
            </p>
            <div className="mt-8 gap-7 flex  justify-center lg:justify-start">
              <img src={peopleImg} alt="" />
              <button className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-100">
                Join the Waitlist
              </button>
            </div>
          </div>
          <div>
            
          </div>
     
         
          <div className="lg:w-6/12 mt-28 lg:mt-0 pt-32 pl-10 pb-0 flex  lg:justify-end ">
            <img  
              src={ladyImage}
              alt="Happy shopper with bags"
              className="w- h-2/6 rounded-lg"
            />
            </div>
       
        </div>
      </div>
    </div>
  );
}

export default Hero;
