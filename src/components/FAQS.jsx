import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    "Lorem ipsum dolor sit amet,",
    "Lorem ipsum dolor sit amet,",
    "Lorem ipsum dolor sit amet,",
    "Lorem ipsum dolor sit amet,"
  ];

  return (
    <section className="bg-[#F7F7F7] w-full max-w-[1440px] mx-auto px-6 py-16">
      <h2 className="text-center text-3xl font-bold mb-8">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'shadow-lg' : ''}`}
          >
            <button 
              onClick={() => toggleAccordion(index)} 
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg text-gray-800"
            >
              {faq}
              <span className="text-orange-600">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">
                  This is the answer to the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
