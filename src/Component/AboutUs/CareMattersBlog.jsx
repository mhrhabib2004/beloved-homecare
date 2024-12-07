

const CareMattersBlog = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Care Matters Blog</h1>
          <p className="text-lg mt-2">Stay Updated with Beloved Homecare  News and Announcements</p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 py-8">
        {/* Blog Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">June 13, 2024 - Beloved Homecare Becomes Approved Training Centre</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Beloved Homecare has become approved to deliver professional care qualifications in partnership with NCFE Awarding Organisation.
            </p>
            <p className="text-gray-600 text-sm">Level 2, Level 3, and Level 5 OfQual Regulated qualifications are being awarded.</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Read More</button>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">May 31, 2024 - Oliver McGowan Training Offered by Beloved Homecare</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Beloved Homecare will soon offer Oliver McGowan Tier One and Tier Two training for its care staff in autism and learning disabilities.
            </p>
            <p className="text-gray-600 text-sm">A legal requirement for care providers under the Care Act 2022.</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Read More</button>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">May 28, 2024 - Beloved Homecare Joins Homecare.Co.UK</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Beloved Homecare is now live on Homecare.co.uk, providing verified customer reviews and quality assurance.
            </p>
            <p className="text-gray-600 text-sm">All reviews are checked independently to ensure quality care services.</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Read More</button>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">May 24, 2024 - Awarded Second Contract in Wirral</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Beloved Homecare has secured a new framework contract to support vulnerable people in the Wirral Borough Council area.
            </p>
            <p className="text-gray-600 text-sm">Specialised training and community care improvements expected.</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Read More</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareMattersBlog;
