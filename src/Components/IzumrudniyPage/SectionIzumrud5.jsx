import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function BuiltHousesGallery(props) {
  const { img } = props;

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
      <Box 
        sx={{ 
          maxWidth: '80%', 
          margin: '0 auto', 
          padding: { xs: '40px 0', md: '80px 0' },
          '& .swiper-pagination': {
            position: 'relative',
            marginTop: '25px',
            display: 'flex',
            justifyContent: 'center',
            gap: '8px'
          },
          '& .swiper-pagination-bullet': {
            width: '40px',
            height: '6px',
            borderRadius: '0px',
            backgroundColor: '#E2E8F0',
            opacity: 1,
            margin: '0 !important',
            transition: 'background-color 0.3s'
          },
          '& .swiper-pagination-bullet-active': {
            backgroundColor: '#E89F56' 
          }
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            color: '#000000',
            fontSize: { xs: '24px', md: '36px' },
            letterSpacing: '1px',
            mb: 5
          }}
        >
          Галерея <span style={{ color: '#E89F56' }}>построенных домов</span>
        </Typography>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2} 
          centeredSlides={true}
          initialSlide={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 1.6,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 1.8, 
              spaceBetween: 40,
            },
          }}
          style={{ width: '100%', overflow: 'visible' }}
        >
          <SwiperSlide style={{ height: 'auto' }}>
            {({ isActive }) => (
              <Box sx={{ width: '100%', height: { xs: '280px', sm: '400px', md: '500px' }, position: 'relative' }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {!isActive && (
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.4)', zIndex: 2 }} />
                )}
              </Box>
            )}
          </SwiperSlide>
          <SwiperSlide style={{ height: 'auto' }}>
            {({ isActive }) => (
              <Box sx={{ width: '100%', height: { xs: '280px', sm: '400px', md: '500px' }, position: 'relative' }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {!isActive && (
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.4)', zIndex: 2 }} />
                )}
              </Box>
            )}
          </SwiperSlide>

          <SwiperSlide style={{ height: 'auto' }}>
            {({ isActive }) => (
              <Box sx={{ width: '100%', height: { xs: '280px', sm: '400px', md: '500px' }, position: 'relative' }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {!isActive && (
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.4)', zIndex: 2 }} />
                )}
              </Box>
            )}
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}