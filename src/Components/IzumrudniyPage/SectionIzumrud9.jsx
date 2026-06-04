import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import img from '../../assets/image copy 30.png'


export default function BookingBannerSection() {
  return (
    <Box 
      sx={{ 
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#1A202C',
        minHeight: { xs: 'auto', md: '400px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '60px 20px', md: '80px 0' }
      }}
    >
      <img 
        src={img} 
        alt="" 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }} 
      />

      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          zIndex: 2
        }}
      />

      <Box 
        sx={{ 
          maxWidth: '80%', 
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFFFFF'
        }}
      >
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 'bold', 
            textTransform: 'uppercase',
            fontSize: { xs: '22px', sm: '32px', md: '42px' },
            lineHeight: 1.3,
            letterSpacing: '1px',
            maxWidth: '950px',
            mb: 3
          }}
        >
          Спешите забронировать дом <br />
          в коттеджном поселке <span style={{ color: '#E89F56' }}>ИЗУМРУДНЫЙ VILLAGE</span>
        </Typography>

        <Box 
          sx={{ 
            width: '100%', 
            maxWidth: '850px', 
            borderTop: '1px solid rgba(255, 255, 255, 0.3)', 
            pt: 3,
            mb: 5 
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'normal',
              fontSize: { xs: '16px', md: '20px' },
              letterSpacing: '0.5px'
            }}
          >
            Количество свободных участков: <span style={{ color: '#E89F56', fontWeight: 'bold' }}>12</span>
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            gap: '25px',
            width: { xs: '100%', sm: 'auto' },
            justifyContent: 'center'
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#E89F56',
              color: '#FFFFFF',
              borderRadius: '0px',
              textTransform: 'none',
              padding: '14px 40px',
              fontWeight: 'bold',
              fontSize: '15px',
              boxShadow: 'none',
              whiteSpace: 'nowrap',
              '&:hover': { 
                backgroundColor: '#d48f45', 
                boxShadow: 'none' 
              }
            }}
          >
            Связаться с менеджером
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              color: '#000000',
              borderRadius: '0px',
              textTransform: 'none',
              padding: '14px 50px',
              fontWeight: 'bold',
              fontSize: '15px',
              boxShadow: 'none',
              whiteSpace: 'nowrap',
              '&:hover': { 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                boxShadow: 'none' 
              }
            }}
          >
            Оставить заявку
          </Button>
        </Box>
      </Box>
    </Box>
  );
}