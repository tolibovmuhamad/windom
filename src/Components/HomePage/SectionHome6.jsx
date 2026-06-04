import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import img from '../../assets/image copy 7.png'
import { useTranslation, Trans } from 'react-i18next';

export default function MortgageSection() {
  const { t } = useTranslation();

  const mortgageCards = [
    {
      id: 1,
      title: t('home.mortgage.mortgageLoans'),
      description: t('home.mortgage.mortgageLoansDesc'),
      rate: 'от 13,7%',
      deposit: 'от 10%',
      image: 'path_to_mortgage_1.jpg', 
    },
    {
      id: 2,
      title: t('home.mortgage.familyMortgage'),
      description: t('home.mortgage.familyMortgageDesc'),
      rate: 'от 4%',
      deposit: 'от 15%',
      image: 'path_to_mortgage_2.jpg', 
    },
    {
      id: 3,
      title: t('home.mortgage.itSpecialists'),
      description: t('home.mortgage.itSpecialistsDesc'),
      rate: 'от 4%',
      deposit: 'от 15%',
      image: 'path_to_mortgage_3.jpg', 
    },
    {
      id: 4,
      title: t('home.mortgage.govSupport'),
      description: t('home.mortgage.govSupportDesc'),
      rate: 'от 6%',
      deposit: 'от 15%',
      image: 'path_to_mortgage_4.jpg',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '80%', 
        margin: '0 auto',
        fontFamily: 'sans-serif',
        py: 6,
        backgroundColor: '#FFFFFF',
        color: '#333333',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          mb: 1,
          fontSize: { xs: '24px', md: '32px' },
        }}
      >
        <Trans i18nKey="home.mortgage.title">
          ПОДБЕРЁМ РЕШЕНИЯ <span style={{ color: '#E29E65' }}>ПО ИПОТЕКЕ</span> УЖЕ СЕГОДНЯ
        </Trans>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#2A2A2A',
          mb: 5,
          fontSize: { xs: '14px', md: '16px' },
        }}
      >
        {t('home.mortgage.subtitle')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          width: '100%',
        }}
      >
        {mortgageCards.map((card) => (
          <Box
            key={card.id}
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
              maxWidth: { xs: '100%', md: '45%' },
              border: '1px solid #E29E65', 
              display: 'flex',
              flexDirection: 'row',
              minHeight: '260px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Box
              sx={{
                flex: 1,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', 
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '16px', color: '#000000' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666666', fontSize: '12px', lineHeight: 1.4, mb: 2 }}>
                  {card.description}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', fontSize: '18px' }}>
                    {card.rate}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#888888', display: 'block', fontSize: '10px' }}>
                    {t('home.mortgage.rate')}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', fontSize: '18px' }}>
                    {card.deposit}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#888888', display: 'block', fontSize: '10px' }}>
                    {t('home.mortgage.deposit')}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#E29E65',
                  color: '#FFFFFF',
                  textTransform: 'none',
                  borderRadius: '0px',
                  boxShadow: 'none',
                  py: 1,
                  fontSize: '13px',
                  width: 'fit-content',
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#d48d53',
                    boxShadow: 'none',
                  },
                }}
              >
                {t('home.mortgage.getCalculation')}
              </Button>
            </Box>
            <Box
              sx={{
                flex: 1,
                backgroundColor: '#F5F5F5',
                overflow: 'hidden',
                display: { xs: 'none', sm: 'block' }, 
              }}
            >
              <img
                src={img}
                alt={card.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}