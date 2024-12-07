
const HomecareServices = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Homecare Services in Wirral and Flintshire</h1>
          <p className="text-lg mt-2">Adult Home care services for you or your loved one</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Introduction Section */}
        <section className="text-gray-700 mb-8">
          <h2 className="text-xl font-bold mb-4">Elderly care, live in care</h2>
          <p className="mb-4 leading-relaxed">
            24 Hour Live-in care? No problem! Night sits? No problem! Respite care? No problem! Companionship care? No problem!
            Holiday care? No problem!
          </p>
          <p className="mb-6 leading-relaxed">
            As a private care service, we are able to offer a more flexible service to your needs or the needs of the person you care about.
          </p>
        </section>

        {/* Mission Statement Section */}
        <section className="text-gray-700 bg-gray-100 p-6 rounded-lg mb-8 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
          <p className="leading-relaxed">
            Beloved Homecare was created to support people to live as full a life as possible at home, even though they may need a little extra support with some parts of their daily lives.
          </p>
        </section>

        {/* Services Offered Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-700">PRIVATE Care PACKAGES Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Services List */}
            <div className="bg-white shadow-md rounded-md p-4 leading-relaxed">
              <ul className="space-y-3">
                <li>Help washing, bathing and showering</li>
                <li>Preparing meals and help feeding if needed</li>
                <li>Preparing drinks and help to drink if needed</li>
                <li>Shopping for groceries</li>
                <li>Dog walking</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-md p-4 leading-relaxed">
              <ul className="space-y-3">
                <li>Social calls</li>
                <li>Live in Care 12/7 or 24/7</li>
                <li>Taking to appointments</li>
                <li>Holidays abroad or staycation in the UK</li>
              </ul>
            </div>
          </div>
        </section>

       
      </main>
    </div>
  );
};

export default HomecareServices;
