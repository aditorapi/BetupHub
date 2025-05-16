import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: "Semester Examinations 2025",
      subtitle: "Important notification for all diploma students",
      description: "Registrations for the upcoming 2025 semester examinations are now open. Last date to apply is December 15, 2024.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonText: "Apply Now",
      buttonLink: "/examinations/apply"
    },
    {
      id: 2,
      title: "New Courses Available",
      subtitle: "Expand your technical expertise",
      description: "BTEUP introduces new diploma courses in Artificial Intelligence, Blockchain Technology, and Robotics starting 2025.",
      image: "https://images.pexels.com/photos/5905521/pexels-photo-5905521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonText: "Explore Courses",
      buttonLink: "/courses"
    },
    {
      id: 3,
      title: "Scholarship Program 2025",
      subtitle: "Financial assistance for deserving students",
      description: "Applications open for merit-based and economically disadvantaged student scholarships for the academic year 2025.",
      image: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonText: "Check Eligibility",
      buttonLink: "/scholarships"
    }
  ];

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="aspect-[21/9] max-h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 text-white">
                <div className="container mx-auto">
                  <h3 className="text-sm md:text-lg text-[#80cbc4] font-medium mb-2">{slide.subtitle}</h3>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-sm md:text-base lg:text-lg max-w-xl mb-6">{slide.description}</p>
                  <a 
                    href={slide.buttonLink} 
                    className="bg-[#00796b] hover:bg-[#00695c] text-white py-2 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;