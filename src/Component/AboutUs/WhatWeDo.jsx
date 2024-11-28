

const WhatWeDo = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 lg:px-16">
      {/* Page Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-blue-700 text-center mb-10">
        What We Do
      </h1>

      <div className="space-y-10">
        {/* Services Section */}
        <section className="bg-white shadow-md rounded-lg p-6 lg:p-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Adult Support Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Home care services we provide:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <strong>Personal Care:</strong> Washing, Dressing, Medication
            </li>
            <li>
              <strong>Companionship:</strong> Long sits with clients to keep
              them safe and happy
            </li>
            <li>
              <strong>Activities:</strong> Shopping, Visiting friends and
              family, Dog walking
            </li>
            <li>
              <strong>Live-In Care:</strong> 24/7 Packages
            </li>
          </ul>
          <p className="text-gray-700 mt-6">
            All of our services are centred on the person receiving the service
            and what works best for them.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-blue-50 shadow-md rounded-lg p-6 lg:p-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To provide personal home care services, tailored to you.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WhatWeDo;
