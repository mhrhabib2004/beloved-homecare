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
      src="https://media.istockphoto.com/id/1988752628/photo/home-care-appointment.webp?a=1&b=1&s=612x612&w=0&k=20&c=okSiSWQPX4vx55FoRYBgli9ZFkdIA39DkvB3ANHg63E="
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://plus.unsplash.com/premium_photo-1664475811964-75af7d90ee4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZSUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsZjbe-9YCkFWNrGlhdYMxtmgos_FMxdCdg&s"
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://media.istockphoto.com/id/1988752628/photo/home-care-appointment.webp?a=1&b=1&s=612x612&w=0&k=20&c=okSiSWQPX4vx55FoRYBgli9ZFkdIA39DkvB3ANHg63E="
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://media.istockphoto.com/id/1988752628/photo/home-care-appointment.webp?a=1&b=1&s=612x612&w=0&k=20&c=okSiSWQPX4vx55FoRYBgli9ZFkdIA39DkvB3ANHg63E="
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://media.istockphoto.com/id/1988752628/photo/home-care-appointment.webp?a=1&b=1&s=612x612&w=0&k=20&c=okSiSWQPX4vx55FoRYBgli9ZFkdIA39DkvB3ANHg63E="
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://media.istockphoto.com/id/1988752628/photo/home-care-appointment.webp?a=1&b=1&s=612x612&w=0&k=20&c=okSiSWQPX4vx55FoRYBgli9ZFkdIA39DkvB3ANHg63E="
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
       <SwiperSlide>
  <div className="relative w-full h-64 lg:h-96">
    <img
      className="w-full h-full object-cover rounded-lg shadow-lg"
      src="https://media.istockphoto.com/id/1988752628/photo/home-care-appointment.webp?a=1&b=1&s=612x612&w=0&k=20&c=okSiSWQPX4vx55FoRYBgli9ZFkdIA39DkvB3ANHg63E="
      alt="Home Care Appointment"
    />
  </div>
</SwiperSlide>
        
      </Swiper>

        </div>
    );
};

export default Slider;