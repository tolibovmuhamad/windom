import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { IoCheckmark } from 'react-icons/io5';
import img from '../../assets/image copy 29.png'

const featuresList = [
  "Гостиная",
  "2 спальных комнаты",
  "3 ванные комнаты",
  "1 комната свободной планировки",
  "Детская комната"
];

export default function TownhouseLayoutSection() {
  const [activeFloor, setActiveFloor] = useState(2);

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
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: '50px', md: '6%' },
          alignItems: 'center'
        }}
      >
        <Box sx={{ flex: '0 1 47%', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              color: '#000000',
              fontSize: { xs: '24px', md: '36px' },
              letterSpacing: '1px',
              mb: 4
            }}
          >
            Планировки <span style={{ color: '#E89F56' }}>таунхаусов</span>
          </Typography>

          <Typography variant="body1" sx={{ color: '#000000', lineHeight: 1.6, mb: 3, fontSize: '15px' }}>
            Таунхаусы в коттеджном поселке Изумрудный Village представлены в двух вариантах планировки.
          </Typography>

          <Typography variant="body1" sx={{ color: '#000000', lineHeight: 1.6, mb: 4, fontSize: '15px' }}>
            В настоящий момент для продажи доступны площадью в 150 м2
          </Typography>

          <Typography 
            variant="subtitle2" 
            sx={{ 
              fontWeight: '900', 
              textTransform: 'uppercase', 
              color: '#000000', 
              letterSpacing: '0.5px',
              mb: 3,
              fontSize: '13px'
            }}
          >
            Каждый таунхаус включает в себя:
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', mb: 5 }}>
            {featuresList.map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <IoCheckmark size={18} color="#E89F56" style={{ flexShrink: 0 }} />
                <Typography sx={{ color: '#000000', fontSize: '15px', fontWeight: '500' }}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: '20px', width: '100%' }}>
            <Button
              variant="contained"
              onClick={() => setActiveFloor(1)}
              sx={{
                flex: 1,
                backgroundColor: activeFloor === 1 ? '#E89F56' : '#FFFFFF',
                color: activeFloor === 1 ? '#FFFFFF' : '#000000',
                border: '1px solid #EFA35A',
                borderRadius: '0px',
                textTransform: 'none',
                padding: '12px 0',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                lineHeight: 1.3,
                '&:hover': { 
                  backgroundColor: activeFloor === 1 ? '#d48f45' : '#FFF8F2',
                  borderColor: '#EFA35A',
                  boxShadow: 'none'
                }
              }}
            >
              <span style={{ fontWeight: 'bold', fontSize: '13px' }}>Первый этаж</span>
              <span style={{ fontSize: '12px', opacity: 0.9 }}>75 м2</span>
            </Button>

            <Button
              variant="contained"
              onClick={() => setActiveFloor(2)}
              sx={{
                flex: 1,
                backgroundColor: activeFloor === 2 ? '#E89F56' : '#FFFFFF',
                color: activeFloor === 2 ? '#FFFFFF' : '#000000',
                border: '1px solid #EFA35A',
                borderRadius: '0px',
                textTransform: 'none',
                padding: '12px 0',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                lineHeight: 1.3,
                '&:hover': { 
                  backgroundColor: activeFloor === 2 ? '#d48f45' : '#FFF8F2',
                  borderColor: '#EFA35A',
                  boxShadow: 'none'
                }
              }}
            >
              <span style={{ fontWeight: 'bold', fontSize: '13px' }}>Второй этаж</span>
              <span style={{ fontSize: '12px', opacity: 0.9 }}>75 м2</span>
            </Button>
          </Box>
        </Box>

        <Box 
          sx={{ 
            flex: '0 1 47%', 
            width: '100%', 
            display: 'flex', 
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box sx={{ width: '100%', height: { xs: '320px', sm: '420px', md: '480px' } }}>
            <img 
              src={img}
              alt="" 
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} 
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}