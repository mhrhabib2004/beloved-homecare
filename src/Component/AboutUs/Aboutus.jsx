import { useState } from "react";
import { Link } from "react-router-dom";
import WhatWeDo from "./WhatWeDo";
import About from "./About";
import OurTeam from "./OurTeam";
import OurValues from "./OurValues";
import PayingForHomeCare from "./PayingForHomeCare";
import CareMattersBlog from "./CareMattersBlog";
import UsefulInformation from "./UsefulInformation";

const Aboutus = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Our Team", path: "/our-team" },
    { name: "Our Values", path: "/our-values" },
    { name: "Paying for Home Care", path: "/paying-for-home-care" },
    { name: "Care Matters Blog", path: "/care-matters-blog" },
    { name: "Useful Information", path: "/useful-information" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar for large screens */}
      <aside className="hidden lg:flex flex-col bg-blue-700 text-white w-64 p-6 space-y-4">
        <h2 className="text-2xl font-bold">Navigation</h2>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path} // Route path
            className="bg-blue-600 hover:bg-blue-500 text-white text-lg py-3 px-4 rounded-lg transition"
          >
            {item.name}
          </Link>
        ))}
      </aside>

      {/* Collapsible Menu for small screens */}
      <div className="lg:hidden w-full">
        <button
          className="bg-blue-700 text-white py-2 px-4 m-4 rounded-lg flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-lg">{isMenuOpen ? "-" : "+"}</span>
          <span className="ml-2 text-sm">Menu</span>
        </button>

        {isMenuOpen && (
          <div className="bg-gray-200 text-gray-800 p-4 space-y-2 rounded-lg">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path} // Route path
                className="w-full text-left text-sm py-2 px-3 hover:bg-gray-300 rounded-lg transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <main className="flex-grow p-6">
        <WhatWeDo />
      </main>
    </div>
  );
};

export default Aboutus;
