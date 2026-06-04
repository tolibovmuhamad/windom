import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { IoTimeOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const newsData = [
  {
    id: 1,
    year: 2023,
    title: "10 причин, почему вам нужно поменять квартиру на таунхаус",
    date: "01.06.2023",
    text: "По данным Всероссийского центра изучения общественного мнения — 68% горожан хотели бы переехать в частный дом.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    year: 2023,
    title: "10 причин, почему вам нужно поменять квартиру на таунхаус",
    date: "01.06.2023",
    text: "По данным Всероссийского центра изучения общественного мнения — 68% горожан хотели бы переехать в частный дом.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    year: 2022,
    title: "Новый строящийся квартал в черте города",
    date: "12.04.2022",
    text: "Полноценная инфраструктура, современные детские площадки и зоны отдыха для всей семьи в шаговой доступности.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    year: 2017,
    title: "Новый строящийся квартал в черте города",
    date: "12.04.2022",
    text: "Полноценная инфраструктура, современные детские площадки и зоны отдыха для всей семьи в шаговой доступности.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    year: 2018,
    title: "Новый строящийся квартал в черте города",
    date: "12.04.2022",
    text: "Полноценная инфраструктура, современные детские площадки и зоны отдыха для всей семьи в шаговой доступности.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    year: 2019,
    title: "Новый строящийся квартал в черте города",
    date: "12.04.2022",
    text: "Полноценная инфраструктура, современные детские площадки и зоны отдыха для всей семьи в шаговой доступности.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
  },
];

const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

export default function NewsSection() {
  const { t } = useTranslation();
  const [selectedYear, setSelectedYear] = useState(2023);
  const filteredNews = newsData.filter((item) => item.year === selectedYear);

  return (
    <Box 
      sx={{ 
        maxWidth: '80%', 
        margin: '0 auto', 
        padding: { xs: '40px 0', md: '104px' },
        backgroundColor: '#FFFFFF'
      }}
    >
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 'bold', 
          color: '#000000', 
          textTransform: 'uppercase', 
          fontSize: { xs: '32px', md: '48px' },
          mb: 4 
        }}
      >
        {t('newsPage.title')}
      </Typography>
      <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap', mb: 5 }}>
        {years.map((year) => {
          const isActive = selectedYear === year;
          return (
            <Button
              key={year}
              onClick={() => setSelectedYear(year)}
              sx={{
                padding: '8px 24px',
                border: '1px solid #E2E8F0',
                borderRadius: '0px', 
                color: isActive ? '#FFFFFF' : '#4A5568',
                backgroundColor: isActive ? '#E89F56' : '#F8FAFC',
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: '500',
                '&:hover': {
                  backgroundColor: isActive ? '#d48f45' : '#EDF2F7',
                  borderColor: '#E2E8F0',
                }
              }}
            >
              {year}
            </Button>
          );
        })}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <Box 
              key={item.id}
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                border: '1px solid #F3A756',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF'
              }}
            >
              <Box 
                sx={{ 
                  flex: { xs: '1 1 auto', md: '0 0 380px' },
                  height: { xs: '240px', md: 'auto' }
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
              </Box>
              <Box 
                sx={{ 
                  flex: '1 1 auto', 
                  padding: { xs: '20px', md: '40px' }, 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center' 
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#000000', 
                    lineHeight: 1.3,
                    mb: 2,
                    fontSize: { xs: '20px', md: '24px' }
                  }}
                >
                  {item.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#E89F56', mb: 2 }}>
                  <IoTimeOutline style={{ fontSize: '16px' }} />
                  <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
                    {item.date}
                  </Typography>
                </Box>
                <Typography sx={{ color: '#4A5568', fontSize: '15px', lineHeight: 1.6, mb: 3 }}>
                  {item.text}
                </Typography>
                <Link to={`/novosti/${item.id}`}><Box 
                  component="a" 
                  sx={{ 
                    color: '#E89F56', 
                    textDecoration: 'none', 
                    fontWeight: '500',
                    fontSize: '15px',
                    width: 'fit-content',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  {t('newsPage.readMore')}
                </Box></Link>
              </Box>
            </Box>
          ))
        ) : (
          <Typography sx={{ color: '#A0AEC0', textAlign: 'center', py: 4 }}>
            {t('newsPage.noNews')}
          </Typography>
        )}
      </Box>
    </Box>
  );
}