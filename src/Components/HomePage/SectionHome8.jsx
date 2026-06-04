import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from '../../assets/image copy 9.png'
import { useTranslation, Trans } from 'react-i18next';

export default function SectionHome8() {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 1,
      name: 'Максим Иванов',
      meta: t('home.reviews.boughtHouse'),
      text: 'Заказывал в этой компании постройку загородного дома, но у же по готовой планировке. Могу сказать что в этой компании очень опытные инженеры и профессиональные строители...',
      avatar: 'path_to_avatar_1.jpg'
    },
    {
      id: 2,
      name: 'Семья Петровых',
      meta: t('home.reviews.boughtTwoFloor'),
      text: 'Мы в восторге от нашего нового дома! Мы долго выбирали квартиру в городе, но когда решили завести второго ребенка поняли, что в квартире нам всем будет тесно...',
      avatar: 'path_to_avatar_2.jpg'
    },
    {
      id: 3,
      name: 'Семья Муратовых',
      meta: t('home.reviews.boughtTwoFloor2'),
      text: 'Поскольку семья у нас из 4-х человек, то дом мы себе смотрели сразу просторный и под ключ. В этом плане мне понравилось, что в данном проекте просторные комнаты...',
      avatar: 'path_to_avatar_3.jpg'
    }
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: '80%', margin: '0 auto', py: 6, fontFamily: 'sans-serif', position: 'relative' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 4 }}>
        <Trans i18nKey="home.reviews.title">
          <span style={{ color: '#E29E65' }}>Отзывы</span> клиентов
        </Trans>
      </Typography>
      <Box sx={{ 
        position: 'relative', 
        px: { xs: 0, sm: 6 }, 
        '& .swiper-pagination': { bottom: '-30px' },
        '& .swiper-pagination-bullet-active': { backgroundColor: '#E29E65' },
        '& .swiper-button-next, & .swiper-button-prev': {
          color: '#333',
          '&::after': { fontSize: '20px', fontWeight: 'bold' }
        }
      }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <Box sx={{
                border: '1px solid #E29E65',
                p: 3,
                minHeight: '250px',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFF'
              }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                  <Avatar src={img} alt={item.name} sx={{ width: 56, height: 56 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }}>{item.name}</Typography>
                    <Typography sx={{ color: '#888', fontSize: '12px' }}>{item.meta}</Typography>
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '13px', color: '#444', lineHeight: 1.5 }}>
                  {item.text}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}