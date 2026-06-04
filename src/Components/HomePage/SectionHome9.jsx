import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import img from '../../assets/image copy 10.png'
import { useTranslation, Trans } from 'react-i18next';

export default function SectionHome9() {
  const { t } = useTranslation();

  const topNews = [
    { id: 1, title: 'Интерьерные решения от наших дизайнеров', date: '01.06.2023', image: 'news_1.jpg', flex: 2 },
    { id: 2, title: 'Последние несколько предложений в коттеджном посёлке Изумрудный Village', date: '26.05.2023', image: 'news_2.jpg', flex: 1.2 }
  ];

  const bottomNews = [
    { id: 3, title: 'Таун 150 м2 по цене двушки - это реально!', date: '21.05.2023', image: 'news_3.jpg' },
    { id: 4, title: 'Карта поселка Изумрудный Village', date: '12.05.2023', image: 'news_4.jpg' },
    { id: 5, title: 'Открытие тенисного корта в коттеджном посёлке Измурудный Village', date: '02.05.2023', image: 'news_5.jpg' }
  ];

  const NewsCard = ({ item, height }) => (
    <Box sx={{
      height: height,
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      backgroundColor: '#333',
      '&:hover img': { transform: 'scale(1.05)' }
    }}>
      <img src={img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} />
      <Box sx={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: 3, color: '#FFF'
      }}>
        <Typography sx={{ fontWeight: '600', fontSize: '14px', mb: 1, lineHeight: 1.4 }}>{item.title}</Typography>
        <Typography sx={{ fontSize: '11px', color: '#CCC' }}>{item.date}</Typography>
      </Box>
    </Box>
  );
  return (
    <Box sx={{ width: '100%', maxWidth: '80%', margin: '0 auto', py: 6, fontFamily: 'sans-serif' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          <Trans i18nKey="home.news.title">
            Новости <span style={{ fontWeight: 'normal' }}>компании</span>
          </Trans>
        </Typography>
        <Button variant="outlined" sx={{ borderColor: '#D9D9D9', color: '#333', borderRadius: '0px', textTransform: 'none', px: 3, '&:hover': { borderColor: '#E29E65' } }}>
          {t('home.news.allNews')}
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {topNews.map((item) => (
            <Box key={item.id} sx={{ flex: { xs: '1 1 auto', md: item.flex } }}>
              <NewsCard item={item} height="360px" />
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {bottomNews.map((item) => (
            <Box key={item.id} sx={{ flex: 1 }}>
              <NewsCard item={item} height="260px" />
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
}