import React, { useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import img from '../../assets/image copy 6.png'
import { CiLocationOn } from 'react-icons/ci';
import { useTranslation, Trans } from 'react-i18next';

export default function ProjectsSection() {
  const { t } = useTranslation();

  const initialVillages = [
    {
      id: 1,
      title: 'Изумрудный Village',
      location: t('home.projects.location'),
      status: t('home.projects.oneRoom'),
      rooms: 1,
      image: {img} 
    },
    {
      id: 2,
      title: 'Изумрудный Village',
      location: t('home.projects.location'),
      status: t('home.projects.oneRoom'),
      rooms: 1,
      image: {img}
    },
    {
      id: 3,
      title: 'Изумрудный Village',
      location: t('home.projects.location'),
      status: t('home.projects.twoRoom'),
      rooms: 2,
      image: {img}
    },
    {
      id: 4,
      title: 'Изумрудный Village',
      location: t('home.projects.location'),
      status: t('home.projects.twoRoom'),
      rooms: 2,
      image: {img}
    },
    {
      id: 5,
      title: 'Изумрудный Village',
      location: t('home.projects.location'),
      status: t('home.projects.townhouse'),
      rooms: 3,
      image: {img}
    },
    {
      id: 6,
      title: 'Изумрудный Village',
      location: t('home.projects.location'),
      status: t('home.projects.townhouse'),
      rooms: 3,
      image: {img}
    },
  ];

  const [filterRooms, setFilterRooms] = useState(null);

  const filteredVillages = filterRooms 
    ? initialVillages.filter(village => village.rooms === filterRooms)
    : initialVillages;

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '80%', 
        margin: '0 auto',
        fontFamily: 'sans-serif',
        py: 6,
        backgroundColor: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 2,
          mb: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <Trans i18nKey="home.projects.title">
            Наши <span style={{ color: '#E29E65', fontWeight: 'normal' }}>проекты</span>
          </Trans>
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          <Button
            onClick={() => setFilterRooms(1)}
            variant="outlined"
            sx={{
              borderColor: filterRooms === 1 ? '#E29E65' : '#D9D9D9',
              color: filterRooms === 1 ? '#FFF' : '#333',
              backgroundColor: filterRooms === 1 ? '#E29E65' : 'transparent',
              textTransform: 'none',
              borderRadius: '0px',
              px: 3,
              '&:hover': { borderColor: '#E29E65', backgroundColor: filterRooms === 1 ? '#d48d53' : 'transparent' }
            }}
          >
            {t('home.projects.oneFloor')}
          </Button>
          <Button
            onClick={() => setFilterRooms(2)}
            variant="outlined"
            sx={{
              borderColor: filterRooms === 2 ? '#E29E65' : '#D9D9D9',
              color: filterRooms === 2 ? '#FFF' : '#333',
              backgroundColor: filterRooms === 2 ? '#E29E65' : 'transparent',
              textTransform: 'none',
              borderRadius: '0px',
              px: 3,
              '&:hover': { borderColor: '#E29E65', backgroundColor: filterRooms === 2 ? '#d48d53' : 'transparent' }
            }}
          >
            {t('home.projects.twoFloor')}
          </Button>
          <Button
            onClick={() => setFilterRooms(3)}
            variant="outlined"
            sx={{
              borderColor: filterRooms === 3 ? '#E29E65' : '#D9D9D9',
              color: filterRooms === 3 ? '#FFF' : '#333',
              backgroundColor: filterRooms === 3 ? '#E29E65' : 'transparent',
              textTransform: 'none',
              borderRadius: '0px',
              px: 3,
              '&:hover': { borderColor: '#E29E65', backgroundColor: filterRooms === 3 ? '#d48d53' : 'transparent' }
            }}
          >
            {t('home.projects.townhouses')}
          </Button>
          <Button
            onClick={() => setFilterRooms(null)}
            variant="contained"
            sx={{
              backgroundColor: filterRooms === null ? '#E29E65' : '#D9D9D9',
              color: filterRooms === null ? '#FFF' : '#666',
              textTransform: 'none',
              borderRadius: '0px',
              boxShadow: 'none',
              px: 3,
              '&:hover': { backgroundColor: filterRooms === null ? '#d48d53' : '#c8c8c8', boxShadow: 'none' }
            }}
          >
            {t('home.projects.allHouses')}
          </Button>
        </Box>
      </Box>
      <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 4, display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {t('home.projects.cottageVillages')} <span style={{ color: '#666', fontWeight: 'normal' }}>{t('home.projects.inKazan')}</span>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', 
          gap: 4, 
          width: '100%',
        }}
      >
        {filteredVillages.map((village) => (
          <Box
            key={village.id}
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' }, 
              maxWidth: { xs: '100%', md: 'calc(50% - 16px)' },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              {village.title}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
              <Typography variant="caption" sx={{ color: '#666', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CiLocationOn color='#EFA35A' /> {village.location}
              </Typography>
              <Typography variant="caption" sx={{ color: '#E29E65', fontWeight: '600' }}>
                • {village.status}
              </Typography>
            </Box>

            <Box
              sx={{
                width: '100%',
                height: { xs: '220px', sm: '320px', md: '380px' },
                backgroundColor: '#F5F5F5', 
                overflow: 'hidden',
              }}
            >
              <img
                src={img}
                alt={village.title}
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
