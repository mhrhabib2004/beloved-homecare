import { FaFacebook, FaTwitter } from 'react-icons/fa';

const TeamSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-indigo-600 text-sm font-semibold uppercase">Meet the Team</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Our Dedicated <span className="text-indigo-600">Professionals</span>
          </h2>
        </div>

        {/* Responsive Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Card */}
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-64 object-cover rounded-md"
                src={member.image}
                alt={member.name}
              />
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  {member.description}
                </p>
              </div>
              <div className="mt-4 flex justify-center gap-4">
                {member.socials.map((social, socialIndex) => (
                  <a
                    key={socialIndex}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-500 transition duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Team members data
const teamMembers = [
  {
    name: 'Carl Mannion',
    description:
      'Registered Manager & Director for Beloved Group. Managed over £3.2Bn in assets and 32,000 people across 4 continents.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5ead91ea510c452399fa85b6/5c2982c3-12a3-4855-bbab-99ddd7ec69df/Headshot+1.jpeg?format=750w',
    socials: [
      { icon: <FaFacebook className="w-5 h-5" />, link: '#' },
      { icon: <FaTwitter className="w-5 h-5" />, link: '#' },
    ],
  },
  {
    name: 'Rachael Stokes',
    description:
      'Director of Beloved Homecare in Wales. Ensuring quality service delivery and regulatory compliance.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5ead91ea510c452399fa85b6/0668ba67-bfc2-4626-ab6b-d3e273a66e43/Rachael+Stokes.jpg?format=750w',
    socials: [
      { icon: <FaFacebook className="w-5 h-5" />, link: '#' },
      { icon: <FaTwitter className="w-5 h-5" />, link: '#' },
    ],
  },
  {
    name: 'Charmaine Smith',
    description:
      'Client Services Manager ensuring compliance with care plans and supporting families across Merseyside.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5ead91ea510c452399fa85b6/5e975347-4e44-49de-9629-09a25830b5f6/charmaine+picture.jpeg',
    socials: [
      { icon: <FaFacebook className="w-5 h-5" />, link: '#' },
      { icon: <FaTwitter className="w-5 h-5" />, link: '#' },
    ],
  },
];

export default TeamSection;