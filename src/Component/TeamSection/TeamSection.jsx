import { FaFacebook, FaTwitter } from 'react-icons/fa';

const TeamSection = () => {
  return (
    <div className="bg-gray-100  py-6">
      <div className="py-10 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        {/* <div className="text-center mb-10">
          <p className="mt-2 text-sm leading-7 text-gray-500 font-normal">THE TEAM</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Our <span className="text-indigo-600">Team</span>
          </h3>
        </div> */}

        {/* Responsive Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Team Member Card 1 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <img
              className="w-full h-64 object-cover rounded-md"
              src="https://images.squarespace-cdn.com/content/v1/5ead91ea510c452399fa85b6/5c2982c3-12a3-4855-bbab-99ddd7ec69df/Headshot+1.jpeg?format=750w"
              alt="Carl Mannion"
            />
            <div className="mt-4">
              <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-300">
                Carl Mannion
              </a>
              <p className="text-gray-500 uppercase text-sm mt-2 leading-snug">
                Registered Manager & Director for Beloved Group. <br />
                Managed over £3.2Bn in assets and 32,000 people across 4 continents. He focuses on operational excellence.
              </p>
            </div>
            <div className="my-4 flex justify-center gap-2">
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member Card 2 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <img
              className="w-full h-64 object-cover rounded-md"
              src="https://images.squarespace-cdn.com/content/v1/5ead91ea510c452399fa85b6/0668ba67-bfc2-4626-ab6b-d3e273a66e43/Rachael+Stokes.jpg?format=750w"
              alt="Rachael Stokes"
            />
            <div className="mt-4">
              <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-300">
                Rachael Stokes
              </a>
              <p className="text-gray-500 uppercase text-sm mt-2 leading-snug">
                Director of Beloved Homecare in Wales. Responsible for ensuring quality service delivery and regulatory compliance.
              </p>
            </div>
            <div className="my-4 flex justify-center gap-2">
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Team Member Card 3 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <img
              className="w-full h-64 object-cover rounded-md"
              src="https://images.squarespace-cdn.com/content/v1/5ead91ea510c452399fa85b6/5e975347-4e44-49de-9629-09a25830b5f6/charmaine+picture.jpeg"
              alt="Charmaine"
            />
            <div className="mt-4">
              <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-300">
                Charmaine Smith
              </a>
              <p className="text-gray-500 uppercase text-sm mt-2 leading-snug">
                Client Services Manager ensuring compliance with care plans and supporting families across Merseyside.
              </p>
            </div>
            <div className="my-4 flex justify-center gap-2">
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
