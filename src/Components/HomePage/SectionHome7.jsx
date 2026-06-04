import React from 'react';
import { Box, Typography } from '@mui/material';
import img from '../../assets/image copy 8.png'
import { useTranslation, Trans } from 'react-i18next';

export default function TeamSection() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: 'Игорь Захаров',
      role: t('home.team.projectManager'),
      image: 'path_to_photo_1.jpg', 
    },
    {
      id: 2,
      name: 'Луиза Назипова',
      role: t('home.team.chiefArchitect'),
      image: 'path_to_photo_2.jpg', 
    },
    {
      id: 3,
      name: 'Мухарямов Расул',
      role: t('home.team.deputyManager'),
      image: 'path_to_photo_3.jpg',
    },
    {
      id: 4,
      name: 'Ваганов Дмитрий',
      role: t('home.team.deputyManager'),
      image: 'path_to_photo_4.jpg', 
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          <Trans i18nKey="home.team.title">
            Наша <span style={{ color: '#E29E65', fontWeight: 'normal' }}>команда</span>
          </Trans>
        </Typography>
        <Box
          sx={{
            fontSize: '28px',
            color: '#E29E65',
            fontWeight: '300',
            userSelect: 'none',
            display: { xs: 'none', sm: 'block' }, 
          }}
        >
          ⟶
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 2, md: 6 },
          mb: 6,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            flex: 1,
            lineHeight: 1.6,
            fontSize: '15px',
            color: '#2A2A2A',
          }}
        >
          {t('home.team.desc1')}
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            flex: 1,
            lineHeight: 1.6,
            fontSize: '15px',
            color: '#2A2A2A',
          }}
        >
          {t('home.team.desc2')}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3, 
          width: '100%',
        }}
      >
        {teamMembers.map((member) => (
          <Box
            key={member.id}
            sx={{
              flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)', md: '1 1 calc(25% - 18px)' },
              maxWidth: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: { xs: '320px', sm: '300px', md: '340px' }, 
                backgroundColor: '#F5F5F5', 
                mb: 2,
                overflow: 'hidden',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
              }}
            >
              <img
                src={img}
                alt={member.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', 
                  display: 'block',
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#000000',
                fontSize: '15px',
                mb: 0.5,
              }}
            >
              {member.name}
            </Typography>
            
            <Typography
              variant="caption"
              sx={{
                textAlign: 'center',
                color: '#666666',
                fontSize: '12px',
                lineHeight: 1.3,
                px: 1,
              }}
            >
              {member.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}