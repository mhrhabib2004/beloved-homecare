import { useState } from "react";
import PrivateCare from "./PrivateCare";
import LiveInCareServices from "./LiveInCareServices";
import HomeHelpService from "./HomeHelpService";

const Tab = () => {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses =
    "border-l border-t border-r rounded-t text-blue-700 border-b-4 border-purple-500"; // Purple underline for active
  const inactiveClasses = "text-blue-500 hover:text-blue-700";

  return (
    <div className="p-6">
      {/* Tab navigation */}
      <ul className="flex border-b justify-center">
        <li
          onClick={() => setOpenTab(1)}
          className={`mr-1 ${openTab === 1 ? "-mb-px" : ""}`}
        >
          <button
            className={`bg-white inline-block py-2 uppercase px-4 font-semibold ${
              openTab === 1 ? activeClasses : inactiveClasses
            }`}
          >
            Private Care
          </button>
        </li>
        <li
          onClick={() => setOpenTab(2)}
          className={`mr-1 ${openTab === 2 ? "-mb-px" : ""}`}
        >
          <button
            className={`bg-white inline-block py-2 uppercase px-4 font-semibold ${
              openTab === 2 ? activeClasses : inactiveClasses
            }`}
          >
            Live In Care
          </button>
        </li>
        <li
          onClick={() => setOpenTab(3)}
          className={`mr-1 ${openTab === 3 ? "-mb-px" : ""}`}
        >
          <button
            className={`bg-white inline-block uppercase py-2 px-4 font-semibold ${
              openTab === 3 ? activeClasses : inactiveClasses
            }`}
          >
            Home Help
          </button>
        </li>
      </ul>
      {/* Tab content */}
      <div className="w-full mt-4">
        {openTab === 1 && (
          <div>
            <PrivateCare />
          </div>
        )}
        {openTab === 2 && <div><LiveInCareServices/></div>}
        {openTab === 3 && <div><HomeHelpService/></div>}
      </div>
    </div>
  );
};

export default Tab;
