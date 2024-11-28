// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://i.ibb.co.com/NxL28LC/Whats-App-Image-2024-11-28-at-03-23-44-a23a7569.jpg" 
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://i.ibb.co.com/NxL28LC/Whats-App-Image-2024-11-28-at-03-23-44-a23a7569.jpg" 
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://i.ibb.co.com/NxL28LC/Whats-App-Image-2024-11-28-at-03-23-44-a23a7569.jpg" 
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://i.ibb.co.com/NxL28LC/Whats-App-Image-2024-11-28-at-03-23-44-a23a7569.jpg"
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://i.ibb.co.com/NxL28LC/Whats-App-Image-2024-11-28-at-03-23-44-a23a7569.jpg"
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://i.ibb.co.com/NxL28LC/Whats-App-Image-2024-11-28-at-03-23-44-a23a7569.jpg"
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://i.ibb.co.com/NxL28LC/Whats-App-Image-2024-11-28-at-03-23-44-a23a7569.jpg"
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://i.ibb.co.com/NxL28LC/Whats-App-Image-2024-11-28-at-03-23-44-a23a7569.jpg"
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
        
      </Swiper>

        </div>
    );
};

export default Slider;