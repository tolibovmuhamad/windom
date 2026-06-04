import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import img from '../../assets/image copy 24.png'

const mapPins = [
  { id: 1, label: '1', name: 'КПП №1', top: '68%', left: '51.3%' },
  { id: 2, label: '2', name: 'КПП №2', top: '60%', left: '74.2%' },
  { id: 3, label: '3', name: 'Детская площадка', top: '33%', left: '55.3%' },
  { id: 4, label: '4', name: 'Спортивная зона', top: '26%', left: '52%' },
  { id: 5, label: '5', name: 'Парковая зона', top: '77%', left: '33%' },
];

export default function VillagePlanSection() {
  const [activePin, setActivePin] = useState(1);

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
          alignItems: 'center', 
          justifyContent: 'space-between', 
          mb: 5,
          borderBottom: '1px solid #E2E8F0',
          pb: 2
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
          План <span style={{ color: '#E89F56' }}>посёлка</span>
        </Typography>
      </Box>
      <Box 
        sx={{ 
          width: '100%', 
          position: 'relative',
          lineHeight: 0,
          boxShadow: '0px 10px 40px rgba(0,0,0,0.04)'
        }}
      >
        <img 
          src={img}
          alt="" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
        {mapPins.map((pin) => {
          const isSelected = activePin === pin.id;

          return (
            <Box
              key={pin.id}
              onMouseEnter={() => setActivePin(pin.id)}
              sx={{
                position: 'absolute',
                top: pin.top,
                left: pin.left,
                transform: 'translate(-50%, -50%)',
                zIndex: isSelected ? 10 : 5,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <Box
                sx={{
                  width: { xs: '24px', md: '32px' },
                  height: { xs: '24px', md: '32px' },
                  backgroundColor: '#E89F56',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: { xs: '11px', md: '14px' },
                  boxShadow: isSelected ? '0px 0px 12px #E89F56' : '0px 4px 10px rgba(0,0,0,0.2)',
                  transition: 'all 0.2s ease-in-out',
                  transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                }}
              >
                {pin.label}
              </Box>
              {isSelected && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '30px', md: '40px' },
                    backgroundColor: '#FFFFFF',
                    padding: { xs: '8px 16px', md: '15px 30px' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    boxShadow: '0px 10px 30px rgba(0,0,0,0.15)',
                    whiteSpace: 'nowrap',
                    animation: 'fadeIn 0.2s ease-in-out',
                    '@keyframes fadeIn': {
                      from: { opacity: 0, transform: 'translateX(-5px)' },
                      to: { opacity: 1, transform: 'translateX(0)' }
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#718096',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}
                  >
                    {pin.label}
                  </Box>
                  <Typography 
                    sx={{ 
                      color: '#000000', 
                      fontWeight: 'bold',
                      fontSize: { xs: '13px', md: '16px' }
                    }}
                  >
                    {pin.name}
                  </Typography>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

    </Box>
  );
}