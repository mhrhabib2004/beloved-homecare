
const LiveInCareServices = () => {
    return (
        <section className="bg-gray-100 py-10 px-5 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold text-blue-700 uppercase mb-4">
              Live-In Care Services Wirral
            </h1>
            <p className="text-lg text-gray-600">
              Beloved Homecare offers professional live-in care services across
              Wirral, England. Our dedicated caregivers provide 24/7 support to
              ensure your loved ones receive the best care in the comfort of their
              own home.
            </p>
          </header>
  
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Live-In Care?
            </h2>
            <p className="text-gray-700 mb-4">
              Live-in care provides a unique solution for those who require
              constant support but wish to stay in the comfort of their own home.
              This service ensures that your loved ones receive personalized care
              tailored to their specific needs, 24 hours a day, 7 days a week.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Personalized Attention:</strong> One-on-one care tailored
                to individual needs and preferences.
              </li>
              <li>
                <strong>Comfort of Home:</strong> Allows you to stay in familiar
                surroundings, reducing stress and anxiety.
              </li>
              <li>
                <strong>Consistent Care:</strong> Continuity of care with the same
                caregiver team, fostering trust and understanding.
              </li>
              <li>
                <strong>Enhanced Safety:</strong> Constant supervision to prevent
                accidents and ensure safety.
              </li>
            </ul>
          </section>
  
          {/* Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Live-In Care Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  Personal Care
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Assistance with daily activities such as bathing, dressing, and grooming.</li>
                  <li>Support with mobility and transferring.</li>
                </ul>
              </div>
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  Companionship
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Providing emotional support and companionship.</li>
                  <li>Engaging in activities and hobbies to promote mental well-being.</li>
                </ul>
              </div>
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  Household Support
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Light housekeeping, meal preparation, and laundry.</li>
                  <li>Managing household tasks to ensure a clean and safe environment.</li>
                </ul>
              </div>
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  Medical Support
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Medication management and administration.</li>
                  <li>
                    Coordination with healthcare providers and monitoring health
                    conditions.
                  </li>
                </ul>
              </div>
            </div>
          </section>
  
          {/* Case Study */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Case Study
            </h2>
            <p className="text-gray-700">
              One of our clients has properties in the UK and Spain. We split our
              time between the two locations every year and provide 24-hour care
              for them throughout both UK and Spanish living. Our electronic
              software ensures all care notes, medication checks, and welfare
              checks are completed remotely. We also attend care reviews in Spain
              as needed.
            </p>
          </section>
  
          {/* Why Choose Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Beloved Homecare?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Experienced Caregivers:</strong> Compassionate, trained,
                and matched to clients needs.
              </li>
              <li>
                <strong>Customized Care Planning:</strong> Tailored plans to meet
                individual preferences.
              </li>
              <li>
                <strong>Commitment to Excellence:</strong> High standards and
                continuous service improvement.
              </li>
              <li>
                <strong>Local Expertise:</strong> Familiarity with the Wirral
                community and reliable support.
              </li>
            </ul>
          </section>
  
          {/* Call to Action */}
          <footer className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              You can choose between 8 hours, 12 hours, or 24 hours of care per
              day.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
              Contact Us for Live-In Care Services
            </button>
          </footer>
        </div>
      </section>
    );
};

export default LiveInCareServices;