import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const itemsData = [
  {
    id: 1,
    title: "ЧАСТНЫЙ ДОМ НА УЧАСТКЕ",
    price: "15 500 000 ₽",
    btnText: "Продажи прекращены",
    disabled: true
  },
  {
    id: 2,
    title: "ТАУНХАУС ВТОРОЙ ОЧЕРЕДИ",
    price: "12 500 000 ₽",
    btnText: "Узнать подробнее",
    disabled: false
  }
];

export default function AvailablePropertySection(props) {
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
        variant="h4" 
        sx={{ 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          color: '#000000',
          fontSize: { xs: '22px', md: '34px' },
          letterSpacing: '1px',
          mb: 5
        }}
      >
        В настоящее время <span style={{ color: '#E89F56' }}>для покупки</span> доступны:
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: '40px',
          justifyContent: 'space-between'
        }}
      >
        {itemsData.map((item) => (
          <Box 
            key={item.id}
            sx={{ 
              flex: '0 1 48%',
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
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

            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                justifyContent: 'space-between', 
                alignItems: { xs: 'flex-start', sm: 'flex-end' },
                gap: '20px'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#000000',
                    fontSize: '16px'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#718096',
                    fontSize: '15px'
                  }}
                >
                  Цена от <span style={{ color: '#000000', fontWeight: 'bold' }}>{item.price}</span>
                </Typography>
              </Box>

              <Button
                variant="contained"
                disabled={item.disabled}
                sx={{
                  backgroundColor: item.disabled ? '#7A624C' : '#E89F56',
                  color: '#FFFFFF',
                  borderRadius: '0px',
                  textTransform: 'none',
                  padding: '12px 30px',
                  fontWeight: '500',
                  fontSize: '14px',
                  boxShadow: 'none',
                  whiteSpace: 'nowrap',
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': { 
                    backgroundColor: item.disabled ? '#7A624C' : '#d48f45', 
                    boxShadow: 'none' 
                  },
                  '&.Mui-disabled': {
                    backgroundColor: '#7A624C',
                    color: '#FFFFFF',
                    opacity: 0.85
                  }
                }}
              >
                {item.btnText}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}