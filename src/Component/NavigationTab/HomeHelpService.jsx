
const HomeHelpService = () => {
    return (
        <section className="bg-gray-100 py-10 px-5 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold text-blue-700 uppercase mb-4">
              Home Help Service
            </h1>
            <p className="text-lg text-gray-600">
              Helping you stay active, happy, and safe in your own home.
            </p>
          </header>
  
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What is Home Help?
            </h2>
            <p className="text-gray-700 mb-4">
              Our Home Help service supports clients with everyday tasks such as
              shopping, visiting friends and family, attending appointments, and
              even walking the dog! We strive to help you stay active within your
              community while ensuring you remain comfortable and safe at home.
            </p>
            <p className="text-gray-700">
              In addition to these services, we are proud to be rated “Good” by
              both the Care Quality Commission (CQC) and Care Inspectorate Wales
              (CIW), providing professional and trusted care tailored to your
              needs.
            </p>
          </section>
  
          {/* Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Services Include:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  Community Support
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Shopping and errands.</li>
                  <li>Visiting friends and family.</li>
                  <li>Attending community events or activities.</li>
                  <li>Dog walking and pet care assistance.</li>
                </ul>
              </div>
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  Professional Care Services
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Comprehensive care provided by experienced professionals.
                  </li>
                  <li>All staff have enhanced criminal background checks.</li>
                  <li>Fully insured employees (no agency staff).</li>
                </ul>
              </div>
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  Transport Assistance
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Transportation to appointments throughout the North West and
                    Flintshire.
                  </li>
                  <li>Specialized vehicles for wheelchair users.</li>
                  <li>
                    Access to our very own London Taxi for comfortable and secure
                    mobility support.
                  </li>
                </ul>
              </div>
            </div>
          </section>
  
          {/* Enhanced Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Our Home Help Service?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Trusted Team:</strong> All caregivers are professional and
                thoroughly vetted.
              </li>
              <li>
                <strong>Personalized Support:</strong> Services are tailored to
                meet your specific needs.
              </li>
              <li>
                <strong>Community Integration:</strong> Assistance in staying
                active and connected with loved ones and local activities.
              </li>
              <li>
                <strong>Accessibility:</strong> Safe and reliable transport for
                appointments and errands.
              </li>
            </ul>
          </section>
  
          {/* Call to Action */}
          <footer className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Discover how our Home Help service can make a difference in your
              life.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
              Contact Us for More Information
            </button>
          </footer>
        </div>
      </section>
    );
};

export default HomeHelpService;