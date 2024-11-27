
const Recruitment = () => {
    return (
        <div className="bg-gray-100 py-10 px-5 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Article Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700 uppercase">
            Join Beloved Homecare
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Start your rewarding career in care services with us. Your
            compassion, reliability, and professionalism are the keys to
            transforming lives.
          </p>
        </header>

        {/* About Working at Beloved */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Working in the Home Care Sector
          </h2>
          <p className="text-gray-700 mb-6">
            At Beloved Homecare, we believe everyone deserves excellent care.
            To deliver this, we provide our care team with the respect, tools,
            and support they need to thrive. Our team benefits from:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Regular clients and consistent work schedules.</li>
            <li>Guaranteed hours and safe working environments.</li>
            <li>Ongoing training, feedback, and professional development.</li>
            <li>A voice in business decisions through team meetings.</li>
            <li>Flexible working arrangements and career progression.</li>
          </ul>
        </section>

        {/* What We Look for */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About You
          </h2>
          <p className="text-gray-700 mb-6">
            Are you compassionate, reliable, and professional? Would your
            friends or family describe you as:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {["Professional", "Respectful", "Reliable", "Compassionate", "Friendly"].map(
              (quality, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-lg text-center"
                >
                  {quality}
                </span>
              )
            )}
          </div>
          <p className="text-gray-700 mt-6">
            If you checked all the boxes, we’d love to hear from you!
          </p>
        </section>

        {/* Recruitment Form */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Apply Now
          </h2>
          <form className="space-y-6">
            {/* Location */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Location (required)
              </label>
              <select
                className="w-full border-gray-300 rounded-lg p-2"
                required
              >
                <option value="">Select your location</option>
                <option value="uk">I am based in the UK</option>
                <option value="overseas">I am based overseas</option>
              </select>
            </div>

            {/* Areas */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Areas I would like to apply (required)
              </label>
              <select
                className="w-full border-gray-300 rounded-lg p-2"
                required
              >
                <option value="">Select an area</option>
                <option value="flintshire">Flintshire</option>
                <option value="surrey">Surrey</option>
                <option value="wirral">Wirral</option>
              </select>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name (required)"
                className="border-gray-300 rounded-lg p-2 w-full"
                required
              />
              <input
                type="text"
                placeholder="Last Name (required)"
                className="border-gray-300 rounded-lg p-2 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email (required)"
                className="border-gray-300 rounded-lg p-2 w-full"
                required
              />
              <input
                type="tel"
                placeholder="Telephone Number (required)"
                className="border-gray-300 rounded-lg p-2 w-full"
                required
              />
            </div>

            {/* National Insurance Number */}
            <div>
              <input
                type="text"
                placeholder="National Insurance Number (required)"
                className="border-gray-300 rounded-lg p-2 w-full"
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Date of Birth (required)
              </label>
              <input
                type="date"
                className="w-full border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            {/* References */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                References (required)
              </label>
              <textarea
                placeholder="Provide details of your references..."
                className="w-full border-gray-300 rounded-lg p-2"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Criminal Convictions */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Criminal Convictions (required)
              </label>
              <textarea
                placeholder="List any convictions if applicable..."
                className="w-full border-gray-300 rounded-lg p-2"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Working Patterns */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Working Patterns (required)
              </label>
              <textarea
                placeholder="Specify your preferred shifts..."
                className="w-full border-gray-300 rounded-lg p-2"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </section>
      </div>
    </div>
    );
};

export default Recruitment;