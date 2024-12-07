

const UsefulInformation = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Useful Information</h1>
          <p className="text-lg mt-2">Support Services and Contact Information</p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 py-8">
        {/* Information Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Community Fire Service Info */}
          <div className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Community Fire Service</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can call Merseyside Fire Brigade for free advice on fire safety in your home.
            </p>
            <p className="text-blue-600 font-medium">0800 731 5958</p>
          </div>
          
          {/* Age UK Info */}
          <div className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Age UK</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Can help with lots of common problems such as Power of Attorney, Energy Advice, and Calculating Benefits.
            </p>
            <p className="text-blue-600 font-medium">
              <a href="https://www.ageuk.org.uk" target="_blank" rel="noopener noreferrer">www.ageuk.org.uk</a>
            </p>
          </div>

          {/* Dementia Together Wirral Info */}
          <div className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Dementia Together Wirral</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Activities for people living with dementia and their family or people who care for them.
            </p>
            <p className="text-blue-600 font-medium">07935 797 445</p>
            <p className="text-blue-600 font-medium">help.dtw@gmail.com</p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default UsefulInformation;
