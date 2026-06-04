import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const projectsData = [
  {
    id: 1,
    title: "Таунхаус 130 кв.м.",
    subtitle: "Визуализация"
  },
  {
    id: 2,
    title: "Проект WIN10",
    subtitle: "Визуализация"
  },
  {
    id: 3,
    title: "Проект WIN16",
    subtitle: "Визуализация"
  }
];

export default function PopularProjectsSection(props) {
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
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 5 
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            color: '#000000',
            fontSize: { xs: '24px', md: '36px' },
            letterSpacing: '1px'
          }}
        >
          Популярные <span style={{ color: '#E89F56' }}>проекты</span>
        </Typography>

        <Box sx={{ display: 'flex', gap: '15px' }}>
          <IconButton 
            sx={{ 
              border: '1px solid #E2E8F0', 
              borderRadius: '50%', 
              width: '45px', 
              height: '45px',
              color: '#000000',
              '&:hover': { borderColor: '#E89F56', backgroundColor: '#FFF8F2' }
            }}
          >
            <IoChevronBack size={20} />
          </IconButton>
          <IconButton 
            sx={{ 
              border: '1px solid #E2E8F0', 
              borderRadius: '50%', 
              width: '45px', 
              height: '45px',
              color: '#000000',
              '&:hover': { borderColor: '#E89F56', backgroundColor: '#FFF8F2' }
            }}
          >
            <IoChevronForward size={20} />
          </IconButton>
        </Box>
      </Box>

      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: '30px',
          justifyContent: 'space-between'
        }}
      >
        {projectsData.map((project) => (
          <Box 
            key={project.id}
            sx={{ 
              flex: '1 1 31.33%',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100%'
            }}
          >
            <Box sx={{ width: '100%', height: { xs: '280px', sm: '350px', md: '420px' } }}>
              <img 
                src={img}
                alt="" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: '#000000',
                  fontSize: '18px'
                }}
              >
                {project.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#718096',
                  fontSize: '14px'
                }}
              >
                {project.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}