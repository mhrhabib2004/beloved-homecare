import  { useState } from "react";

const BelovedHomecareBranches = () => {
  const [activeTab, setActiveTab] = useState("Flintshire");

  const branches = {
    Flintshire: {
      description: `Beloved Homecare offers compassionate private care services in Flintshire. Our services are tailored to ensure your comfort, safety, and happiness at home.`,
      services: [
        "24/7 Care",
        "Washing and Bathing",
        "Showering",
        "Dental Hygiene",
        "Meal Preparation",
        "Feeding",
        "Drink Preparation",
        "Medication Administration",
        "Sit-in Service",
        "Live-in Service",
        "Taking to Appointments",
        "Dressing and Undressing",
        "Securing your Home",
        "Social Visits",
        "Pet Sitting",
      ],
    },
    Wirral: {
      description: `Beloved Homecare provides private home care services across Wirral. We operate in multiple postcode areas to ensure personalized and reliable care for residents.`,
      postcodes: [
        "CH60 (Gayton, Heswall)",
        "CH61 (Heswall, Irby, Pensby, Thingwall, Thurstaston)",
        "CH49 (Greasby, Saughall Massie, Prenton)",
        "CH48 (Caldy, Frankby, Greasby, Newton, West Kirby)",
        "CH47 (Saughall Massie, West Kirby)",
        "CH46 (Moreton, Saughall Massie)",
        "CH45 (Wallasey, Wallasey Village)",
      ],
    },
  };

  return (
    <div className="bg-gray-100 py-10 px-5 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700 uppercase">
            Our Branches
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Explore the private care services we provide in Flintshire and
            Wirral. Let us support you with our trusted and family-centred
            approach.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          {Object.keys(branches).map((branch) => (
            <button
              key={branch}
              onClick={() => setActiveTab(branch)}
              className={`px-6 py-2 text-lg font-medium rounded-t-lg ${
                activeTab === branch
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-600"
              } transition`}
            >
              {branch}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {activeTab} Services
          </h2>
          <p className="text-gray-700 mb-6">
            {branches[activeTab].description}
          </p>

          {activeTab === "Flintshire" && (
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {branches.Flintshire.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          )}

          {activeTab === "Wirral" && (
            <div>
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Postcodes We Cover:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {branches.Wirral.postcodes.map((postcode, index) => (
                  <li key={index}>{postcode}</li>
                ))}
              </ul>
              <p className="text-gray-600 mt-6">
                If you don’t see your area listed, contact us. We’ll do our best
                to assist or direct you to appropriate services.
              </p>
            </div>
          )}
        </div>

        {/* Meet the Team Section */}
        <section className="mt-10 bg-blue-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
            Meet the Beloved Homecare Team in Wirral
          </h2>
          <p className="text-gray-700 text-center">
            Beloved Homecare is a family-run business, and our family-centred
            values shape how we support you and your loved ones. From
            professional care to personalized assistance, our team is dedicated
            to making a positive difference in your life.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BelovedHomecareBranches;
