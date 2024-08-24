import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FiX, FiMenu } from "react-icons/fi"; // Import the X and Menu icons
import ladyImage from "./images/lady.svg";
import peopleImg from "./images/people.svg";
import toast, { Toaster } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner"; // Import the RotatingLines loader
import logo from "./images/mogo.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the hamburger menu
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add a state for loading
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const sideMenuRef = useRef(null); // Ref for the side menu
  const animationPlayed = useRef(false); // To ensure the animation plays only once

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationPlayed.current) {
        const scrollPosition = window.scrollY;
        const elementPosition =
          textRef.current.offsetTop - window.innerHeight * 0.75;

        if (scrollPosition > elementPosition) {
          // Animate text
          gsap.to(textRef.current, { opacity: 1, y: 0, duration: 1 });
          // Animate image
          gsap.to(imageRef.current, { opacity: 1, y: 0, duration: 1 });
          // Animate button
          gsap.to(buttonRef.current, { opacity: 1, y: 0, duration: 1 });

          animationPlayed.current = true; // Mark the animation as played
          window.removeEventListener("scroll", handleScroll); // Remove the scroll listener
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      gsap.fromTo(
        modalRef.current,
        { scale: 0, opacity: 0 }, // Start small and transparent
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" } // Pop out effect
      );
    }, 0); // Run animation immediately after modal is opened
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.in(1.7)",
      onComplete: () => setIsModalOpen(false),
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      gsap.to(sideMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(sideMenuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  };

  const handleSendMessage = () => {
    if (!isAnonymous && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!message.trim()) {
      toast.error("Please enter a message.");
      return;
    }

    setIsLoading(true); // Start loading

    // Simulate API call for message sending
    setTimeout(() => {
      toast.success("Message sent successfully!");
      closeModal(); // Close modal after sending message
      setEmail(""); // Reset email input
      setMessage(""); // Reset message input
      setIsAnonymous(false); // Reset anonymous checkbox
      setIsLoading(false); // Stop loading
    }, 2000);
  };

  const handleScrollToWaitlist = () => {
    const waitlistSection = document.getElementById("coming-soon");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="bg-customOrange relative overflow-hidden bg-[url('/src/assets/frame43.png')] bg-no-repeat bg-cover bg-center">
      <nav className="sticky top-0 z-50">
        <div className="container mt-6 md:mx-auto justify-between md:px-6 flex md:justify-between md:items-center">
          <div>
            <img src={logo} alt="My Thrift Logo" className="h-6 ml-4" />
          </div>
          <div className="flex items-center md:hidden">
            {" "}
            {/* Hide this on desktop */}
            <button
              aria-expanded={isMenuOpen}
              aria-controls="side-menu"
              onClick={toggleMenu}
              className="text-white text-3xl mr-4"
            >
              <FiMenu />
            </button>
          </div>
          <div className="hidden md:flex items-center md:space-x-6">
            {" "}
            {/* Show on desktop */}
            <button
              onClick={openModal}
              className="bg-white text-xs px-2 py-2 mr-4 text-customOrange font-semibold md:py-2 md:px-4 rounded-full hover:bg-gray-100"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Side Menu */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 left-0 h-full w-64 bg-black opacity-95 text-white z-50 transform -translate-x-full"
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white"
        >
          <FiX size={24} />
        </button>
        <ul className="mt-20 ml-6 space-y-4">
          <li>
            <button
              onClick={() => {
                toggleMenu();
                openModal();
              }}
              className="text-white text-xl"
            >
              Contact Us
            </button>
          </li>
          {/* Add more menu items here if needed */}
        </ul>
      </div>

      <div className="container mx-auto md:px-6 px-6 text-center lg:text-left">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-full h-full md:pb-20 lg:pb-20 pb-7 mt-20 md:px-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white text-6xl font-bold lg:text-6xl"
            >
              <motion.span variants={textVariants}>Browse</motion.span>
              <motion.span variants={textVariants}>
                <span className="bg-[url('/src/assets/line.png')] bg-no-repeat bg-bottom">
                  {" "}
                  Local Markets{" "}
                </span>
              </motion.span>
              <motion.span variants={textVariants}>
                from the Comfort of Your Home
              </motion.span>
            </motion.div>

            <p
              ref={textRef}
              className="mt-6 text-white font-light lg:text-xl opacity-0 transform translate-y-12"
            >
              Step into a world of affordable thrifted (okrika) finds with My
              Thrift – your online gateway to the best local markets and
              vendors. Explore, shop, and discover rare gems, all from the
              comfort of your home.
            </p>

            <div
              className="md:mt-8 mt-12 md:gap-7 lg:gap-7 gap-5 flex justify-center lg:justify-start opacity-0 transform translate-y-12"
              ref={buttonRef}
            >
              <img
                src="https://res.cloudinary.com/dtaqusjav/image/upload/v1724414014/people_aenuc1.svg"
                alt="People icons"
                className="h-9 translate-y-2"
              />
              <button
                onClick={handleScrollToWaitlist}
                className="bg-white text-customOrange h-12 px-4 font-semibold md:py-2 md:h-12 md:px-8 rounded-full hover:bg-gray-100"
              >
                Join the Waitlist
              </button>
            </div>
          </div>

          <div
            className="md:w-full w-full md:mt-28 flex justify-center items-center md:h-full opacity-0 transform"
            ref={imageRef}
          >
            <img
              src="https://res.cloudinary.com/dtaqusjav/image/upload/v1724414267/lady_ik5jfl.svg"
              alt="Happy shopper with bags"
              className="md:w-auto md:h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-60"
            onClick={closeModal}
          ></div>
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-lg z-10 w-11/12 md:w-1/3"
          >
            {/* Header Section with Full Width Orange Background */}
            <div className="relative bg-customOrange py-2 text-white rounded-t-lg">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white hover:text-gray-200"
              >
                <FiX size={24} />
              </button>
              <h2 className="md:text-2xl  text-lg font-semibold text-center py-4">
                Have a Question or Suggestion?
              </h2>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <p className="text-center text-gray-500 md:px-14 -translate-y-3 text-xs mb-4">
                Leave us a message and we'll get back to you as soon as
                possible!
              </p>

              {/* Email Input */}
              {!isAnonymous && (
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 p-3 border border-gray-300 rounded-full h-10  focus:outline-none focus:border-customOrange"
                />
              )}

              {/* Message Input */}
              <textarea
                placeholder="Write a message.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mb-4 p-3 border border-gray-300  resize-none rounded-md focus:outline-none bg-gray-100 h-44 focus:border-customOrange placeholder:text-top placeholder:pl-1 placeholder:pt-2"
              />

              {/* Anonymous Checkbox */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                  className="mr-2"
                />
                <label htmlFor="anonymous" className="text-gray-500 text-sm">
                  Submit Anonymously
                </label>
              </div>

              {/* Send Message Button */}
              <button
                onClick={handleSendMessage}
                className="w-full bg-customOrange text-white p-3 rounded-full hover:bg-orange-600 flex justify-center items-center"
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? (
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  />
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <Toaster position="top-center" />
    </div>
  );
};

export default Hero;
