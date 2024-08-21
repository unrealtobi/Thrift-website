import React from 'react';
import cart from '../assets/cart.svg'
import icons from '../assets/icons.svg'
import shop from '../assets/shop.svg'
import phone2 from '../assets/phone2.svg'

const AboutMyThrift = () => {
  return (
     <div className=" ">
        <section className="w-full max-w-[1440px] h-[600px] gap-6  mx-auto py-14 flex justify-center ">
            <div className='w-10/12 ml-16'>
                <img src={phone2} alt="" />
            </div>
      <div className="ml-6 mt-32">
        <h2 className="text-4xl font-bold">
          <span className="text-black">What is </span>
          <span className="text-customOrange">My Thrift?</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-full mr-16 ">
          MyThrift is an app that lets you discover and buy a wide range of
          unique thrifted and new clothes. You can explore items from local
          sellers and online stores all in one place. It’s designed to make
          shopping for fashion simple and convenient, so you can find great
          clothes from the comfort of your home. Whether you're looking for
          something special from a nearby market or an exclusive piece from an
          online store, MyThrift makes it easy to shop and enjoy.
        </p>
      </div>
    </section>

        {/* Cards Section */}
        <section className='bg-[#F7F7F7] py-14'>
  <h2 className="text-4xl font-bold text-center mb-7">
    <span className="text-black">What Can I do With </span>
    <span className="text-customOrange">My Thrift?</span>
  </h2>
  <div className="p-7 flex flex-col lg:flex-row justify-around items-center space-y-2 lg:space-y-0 lg:space-x-0">
    {/* Card 1 */}
     {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center mb-8  lg:mb-0 lg:w-80">
            <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
             <img src={cart} alt="" />

            </div>
            <h3 className="text-xl font-semibold text-gray-800">Shop Thrifted & New Clothes</h3>
            <p className="mt-4 text-gray-600">
              Shop a diverse selection of thrifted and new clothing from local markets and online vendors, all in one place.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center mb-8 lg:mb-0 lg:w-80">
            <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
            <img src={shop} alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Showcase your Business</h3>
            <p className="mt-4 text-gray-600">
              Register your business with us and display your thrifted or new clothing on our app. Reach a wide audience and sell to people with ease.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center mb-8  lg:mb-0 lg:w-80">
            <div className="bg-yellow-100 rounded-full p-4 inline-block mb-4">
            <img src={icons} alt="" />

            </div>
            <h3 className="text-xl font-semibold text-gray-800">Seamless Shopping</h3>
            <p className="mt-4 text-gray-600">
              Shop from the comfort of your home with secure payments, real-time order tracking, and a smooth, user-friendly experience.
            </p>
          </div>
        </div>
        </section>

       
       {/* Cards Section End */}

 {/* {cooming soon section} */}
 <section>

 </section>

      </div>
  
  );
};

export default AboutMyThrift;
