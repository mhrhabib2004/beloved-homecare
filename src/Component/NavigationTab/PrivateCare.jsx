
const PrivateCare = () => {
    return (
        <section className="bg-gray-100 py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Private Care Packages in Less than 24 Hours</h1>
        <p className="text-lg text-gray-600 mb-8">
          Private care packages available in <span className="text-gray-800 font-semibold">Wirral</span>, <span className="text-gray-800 font-semibold">Flintshire</span>, and <span className="text-gray-800 font-semibold">Surrey</span>.  
          Beloved Homecare offers tailored solutions for clients who cannot wait for local authorities to arrange care or those not eligible for funding.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 lg:p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-700 mb-6">
          We provide comprehensive care services, available in less than 24 hours, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Permanent live-in care</strong>
          </li>
          <li>
            <strong>24-hour care</strong>
          </li>
          <li>
            <strong>Overnight care</strong>
          </li>
          <li>
            Respite care for short breaks for family members <span className="text-sm">(minimum 48 hours)</span>
          </li>
          <li>
            Holiday care for clients traveling abroad or within the UK
          </li>
          <li>
            Assistance with appointments <span className="text-sm">(e.g., dentist, GP, and non-medical)</span>
          </li>
          <li>
            Shopping and care calls <span className="text-sm">(minimum 1 hour)</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
          Contact Us for Care
        </button>
      </div>
    </section>
    );
};

export default PrivateCare;