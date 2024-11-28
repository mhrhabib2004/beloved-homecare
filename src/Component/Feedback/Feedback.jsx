import { useState } from "react";

const Feedback= () => {
  const [feedback, setFeedback] = useState({
    firstName: "",
    lastName: "",
    email: "",
    survey: "",
    subject: "",
    carerName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email)
    console.log("Feedback Submitted:", feedback);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-purple-700">
          Leave Us Feedback
        </h2>
        <p className="text-center text-lg text-gray-600">
          Please complete the form below
        </p>

        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={feedback.firstName}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={feedback.lastName}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Email / Telephone */}
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email / Telephone
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            required
            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Survey */}
        <div>
          <label className="block text-gray-700">Survey</label>
          <div className="space-y-2 mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="survey"
                value="Strongly Disagree"
                onChange={handleChange}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Strongly Disagree</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="survey"
                value="Disagree"
                onChange={handleChange}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Disagree</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="survey"
                value="Neutral"
                onChange={handleChange}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Neutral</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="survey"
                value="Agree"
                onChange={handleChange}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Agree</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="survey"
                value="Strongly Agree"
                onChange={handleChange}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Strongly Agree</span>
            </label>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-gray-700">
            Subject
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={feedback.subject}
            onChange={handleChange}
            required
            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Carer Name */}
        <div>
          <label htmlFor="carerName" className="block text-gray-700">
            Tell us the name of the carer if you know it
          </label>
          <input
            type="text"
            id="carerName"
            name="carerName"
            value={feedback.carerName}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Message
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={feedback.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};



export default Feedback;