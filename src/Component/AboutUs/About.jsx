
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6">
        <h1 className="text-3xl font-bold">Beloved Homecare</h1>
        <p className="mt-2 text-lg">Personal Care Services Tailored to You</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-white">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">About Us</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Beloved Homecare is a family-run business that provides exceptional
            personal home care services. We pride ourselves on delivering
            personalized care that meets your individual needs in the comfort of
            your own home. Our services are designed to help individuals with a
            wide range of needs, from personal care to companionship and
            activities, ensuring that you or your loved ones can live
            independently with dignity and support.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">Personal Care</h3>
              <ul className="text-lg text-gray-700 mt-4">
                <li>Washing & Dressing</li>
                <li>Medication Assistance</li>
              </ul>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">Companionship</h3>
              <ul className="text-lg text-gray-700 mt-4">
                <li>Long sits with clients</li>
                <li>Ensuring safety and happiness</li>
              </ul>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">Activities</h3>
              <ul className="text-lg text-gray-700 mt-4">
                <li>Shopping Assistance</li>
                <li>Visiting Friends and Family</li>
                <li>Dog Walking</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our mission is to provide compassionate, person-centered care that
            allows our clients to live independently in their homes. We are
            committed to delivering the highest standards of care and supporting
            each person in a way that suits their unique needs and preferences.
          </p>
        </section>

        {/* Contact and Other Links */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <Link
              to="/contact"
              className="inline-block text-lg text-blue-700 hover:text-blue-500 transition"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="inline-block text-lg text-blue-700 hover:text-blue-500 transition"
            >
              Learn More About Our Services
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white p-4 text-center">
        <p className="text-sm">
          © 2024 Beloved Homecare | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default About;
