import React from 'react';
import { Box, Typography } from '@mui/material';
import { IoLocationOutline } from 'react-icons/io5';

const otherProjects = [
  {
    id: 1,
    title: "IQ CLUB",
    textLeft: "Начало строительства",
    textRight: "I квартал 2024 года"
  },
  {
    id: 2,
    title: "ДОМА В ЗИМНЕЙ ГОРКЕ",
    textLeft: "10 минут от Казанского аэропорта.",
    textRight: "Все дома сданы"
  }
];

export default function OtherProjectsSection(props) {
    const {img} = props
  return (
    <Box 
      sx={{ 
        maxWidth: '80%', 
        margin: '0 auto', 
        padding: { xs: '40px 0', md: '80px 0' },
        backgroundColor: '#FFFFFF'
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
        Другие <span style={{ color: '#E89F56' }}>проекты</span>
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: '40px',
          justifyContent: 'space-between'
        }}
      >
        {otherProjects.map((project) => (
          <Box 
            key={project.id}
            sx={{ 
              flex: '0 1 48%',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100%'
            }}
          >
            <Box sx={{ width: '100%', height: { xs: '240px', sm: '320px', md: '380px' } }}>
              <img 
                src={img} 
                alt="" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: '#000000',
                  fontSize: '20px'
                }}
              >
                {project.title}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888888' }}>
                <IoLocationOutline size={16} style={{ color: '#E89F56', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '14px', color: '#000000' }}>
                  {project.textLeft}
                  <span style={{ color: '#E89F56', marginLeft: '4px' }}>
                    — {project.textRight}
                  </span>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}