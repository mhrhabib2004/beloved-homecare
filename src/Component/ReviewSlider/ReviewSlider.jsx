import React from 'react';

const reviews = [
  {
    name: "John Smith",
    role: "Son of a Patient",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    platform: "Facebook",
    platform_link: "https://www.facebook.com/johnsmith/posts/1234567890",
    review: "The care provided to my father was incredible. The staff was very attentive and made him feel at home."
  },
  {
    name: "Emily Brown",
    role: "Daughter of a Patient",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    platform: "Twitter",
    platform_link: "https://twitter.com/emilybrown/status/1234567890",
    review: "We’re so grateful for the professionalism and compassion of the carers. Highly recommended service!"
  },
  {
    name: "William Johnson",
    role: "Care Receiver",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    platform: "LinkedIn",
    platform_link: "https://www.linkedin.com/in/williamjohnson/",
    review: "I’ve had an excellent experience with this home care team. They’re always punctual and helpful."
  },
  {
    name: "Olivia Taylor",
    role: "Family Member",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    platform: "Instagram",
    platform_link: "https://www.instagram.com/oliviataylor/posts/1234567890",
    review: "My mother received top-notch care from a dedicated team. It has brought so much peace of mind to our family."
  },
  {
    name: "James Wilson",
    role: "Son of a Patient",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    platform: "Twitter",
    platform_link: "https://twitter.com/jameswilson/status/1234567890",
    review: "I cannot thank the team enough for their amazing service. They are truly a blessing for families in need."
  },
  {
    name: "Sophia Davis",
    role: "Care Receiver",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    platform: "Facebook",
    platform_link: "https://www.facebook.com/sophiadavis/posts/1234567890",
    review: "The carers have been so kind and supportive. It feels like I’m being taken care of by family."
  },
];

const ReviewsSection = () => {
  return (
    <section className="pb-12 mx-auto md:pb-20 max-w-7xl">
      <div className="py-4 text-center md:py-8">
        <h4 className="text-base font-bold tracking-wide text-center uppercase text-teal-600">Reviews</h4>
        <p className="mt-2 tracking-tight text-gray-900 text-xl md:text-2xl">We have some fans.</p>
      </div>

      <div className="gap-8 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
          >
            <div className="flex gap-4 items-start">
              <img className="w-12 h-12 rounded-full" src={review.avatar} alt="user avatar" width="400" height="400" loading="lazy" />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">{review.name}</h6>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
                <a href={review.platform_link} className="text-blue-500 hover:text-blue-600 ml-4">
                  <i className={`fab fa-${review.platform.toLowerCase()}`}></i>
                </a>
              </div>
            </div>
            <p className="mt-8">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
