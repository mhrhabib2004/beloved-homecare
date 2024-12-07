import { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {/* Question 1 */}
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              onClick={() => toggleAnswer(1)}
            >
              <span className="flex text-lg font-semibold text-black">How can I get started?</span>
              <svg
                className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                  activeIndex === 1 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeIndex === 1 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Getting started is easy! Sign up for an account, and you'll have access to our platform's
                  features. No credit card required for the initial signup.
                </p>
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              onClick={() => toggleAnswer(2)}
            >
              <span className="flex text-lg font-semibold text-black">What is the pricing structure?</span>
              <svg
                className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                  activeIndex === 2 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeIndex === 2 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Our pricing structure is flexible. We offer both free and paid plans. You can choose the one
                  that suits your needs and budget.
                </p>
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              onClick={() => toggleAnswer(3)}
            >
              <span className="flex text-lg font-semibold text-black">What kind of support do you provide?</span>
              <svg
                className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                  activeIndex === 3 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeIndex === 3 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  We offer comprehensive customer support. You can reach out to our support team through
                  various channels, including email, chat, and a knowledge base.
                </p>
              </div>
            )}
          </div>

          {/* Question 4 */}
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              onClick={() => toggleAnswer(4)}
            >
              <span className="flex text-lg font-semibold text-black">Can I cancel my subscription anytime?</span>
              <svg
                className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                  activeIndex === 4 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeIndex === 4 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Yes, you can cancel your subscription at any time without any hidden fees. We believe in
                  providing a hassle-free experience for our users.
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?
          <span className="cursor-pointer font-medium text-blue-500 hover:underline transition-all duration-200">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
};

export default FAQs;
