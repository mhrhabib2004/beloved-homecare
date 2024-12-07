import { useState } from "react";
import About from "./About";

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 w-full text-center text-white p-12 rounded-b-3xl shadow-xl">
        <h1 className="text-5xl font-bold">Beloved Homecare</h1>
        <p className="mt-2 text-xl">Personal Care Services Tailored to You</p>
      </header>

      <div className="flex lg:p-5  flex-col lg:flex-row">

        {/* Mobile Menu Button */}
        <div className="sm:hidden w-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-3 px-8 m-4 rounded-full flex items-center justify-center hover:from-purple-800 hover:to-indigo-800 transition duration-300 shadow-lg"
          >
            <span className="text-xl font-semibold">{isMenuOpen ? "-" : "+"}</span>
            <span className="ml-2 text-sm">Menu</span>
          </button>
        </div>
       

        {/* Sidebar for small screens */}
        {isMenuOpen && (
          <div className="sm:hidden  w-full bg-purple-50 text-gray-800 p-6 space-y-4 rounded-lg shadow-md">
            <ul className="list-none">
              <li className="mb-4">
                <a href="/about" className="text-purple-700 hover:text-purple-900 text-xl font-semibold">About</a>
              </li>
              <li className="mb-4">
                <a href="/whatwedo" className="text-purple-700 hover:text-purple-900 text-xl font-semibold">What We Do</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-purple-700 hover:text-purple-900 text-xl font-semibold">Our Team</a>
              </li>
              <li className="mb-4">
                <a href="/PayingforHomeCare" className="text-purple-700 hover:text-purple-900 text-xl font-semibold">Paying for Home Care</a>
              </li>
              <li className="mb-4">
                <a href="/CareMattersBlog" className="text-purple-700 hover:text-purple-900 text-xl font-semibold">Care Matters Blog</a>
              </li>
              <li className="mb-4">
                <a href="/UsefulInformation" className="text-purple-700 hover:text-purple-900 text-xl font-semibold">Useful Information</a>
              </li>
            </ul>
          </div>
        )}

        {/* Sidebar for large screens */}
        <div className="hidden lg:block lg:w-1/5 bg-gradient-to-r from-purple-700 to-indigo-700 sticky top-0 p-6 space-y-6 rounded-lg shadow-md">
          <ul className="list-none">
            <li className="mb-4">
              <a href="/about" className="text-white hover:text-gray-300 text-xl font-semibold">About</a>
            </li>
            <li className="mb-4">
              <a href="/whatwedo" className="text-white hover:text-gray-300 text-xl font-semibold">What We Do</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:text-gray-300 text-xl font-semibold">Our Team</a>
            </li>
            <li className="mb-4">
              <a href="/PayingforHomeCare" className="text-white hover:text-gray-300 text-xl font-semibold">Paying for Home Care</a>
            </li>
            <li className="mb-4">
              <a href="/CareMattersBlog" className="text-white hover:text-gray-300 text-xl font-semibold">Care Matters Blog</a>
            </li>
            <li className="mb-4">
              <a href="/UsefulInformation" className="text-white hover:text-gray-300 text-xl font-semibold">Useful Information</a>
            </li>
            
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-8 bg-white rounded-lg shadow-lg">
          <About />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
