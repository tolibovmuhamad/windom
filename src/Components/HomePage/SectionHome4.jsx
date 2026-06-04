import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img from '../../assets/image copy 6.png'

export default function ProjectsSwiper() {
  const slides = [
    { id: 1, img: {img}, alt: 'Проект 1' },
    { id: 2, img: {img}, alt: 'Проект 2' },
    { id: 3, img: {img}, alt: 'Проект 3' },
    { id: 4, img: {img}, alt: 'Проект 4' },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '80%',
        margin: '0 auto',
        py: 6,
        fontFamily: 'sans-serif',
        overflow: 'hidden',
        '& .swiper': {
          paddingBottom: '40px', 
          overflow: 'clip', 
          overflow: 'visible', 
        },
        '& .swiper-slide': {
          opacity: 0.4,       
          transition: 'opacity 0.3s ease',
        },
        '& .swiper-slide-active': {
          opacity: 1,           
        },
        '& .swiper-pagination': {
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          bottom: '0px !important',
        },
        '& .swiper-pagination-bullet': {
          width: '40px',
          height: '4px',
          borderRadius: '0px',
          backgroundColor: '#D9D9D9',
          opacity: 1,
          margin: '0 !important',
          transition: 'all 0.3s ease',
        },
        '& .swiper-pagination-bullet-active': {
          backgroundColor: '#E29E65', 
        },
      }}
    >
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}        
        slidesPerView={1.2}      
        centeredSlides={true}     
        loop={true}             
        pagination={{ clickable: true }} 
        breakpoints={{
          600: { slidesPerView: 1.5 }, 
          960: { slidesPerView: 1.3 }, 
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                width: '100%',
                height: { xs: '250px', sm: '400px', md: '500px' }, 
                backgroundColor: '#E0E0E0', 
                boxShadow: '0px 8px 24px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={img}
                alt={slide.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}