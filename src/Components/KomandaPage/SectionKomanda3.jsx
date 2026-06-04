import React from 'react';
import { Box, Typography } from '@mui/material';
import img from '../../assets/image copy 16.png'
import img2 from '../../assets/image copy 17.png'
import { useTranslation } from 'react-i18next';

export default function ManagementSection() {
  const { t } = useTranslation();

  const managers = [
    {
      id: 1,
      name: "РАСУЛ МУХАРЯМОВ",
      role: t('teamPage.deputyManager')
    },
    {
      id: 2,
      name: "ДМИТРИЙ ВАГАНОВ",
      role: t('teamPage.deputyManager')
    }
  ];

  return (
    <Box 
      sx={{ 
        maxWidth: '80%', 
        margin: '0 auto', 
        padding: { xs: '40px 0', md: '60px 0' },
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0', 
        position: 'relative'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: '40px',
          padding: { xs: '20px', md: '40px' }
        }}
      >
        <Box 
          sx={{ 
            flex: { xs: '1 1 auto', md: '0 0 280px' },
            height: '450px',
            backgroundColor: '#F3F4F6', 
            position: 'relative'
          }}
        >
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#9CA3AF', fontSize: '12px', textAlign: 'center' }}>
            <img src={img} style={{width: "300px", height: "500px"}} alt="" />
          </Box>
        </Box>
        <Box sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#000000', 
              fontSize: '16px', 
              lineHeight: 1.5, 
              mb: 4,
              maxWidth: '650px'
            }}
          >
            {t('teamPage.companyTrust')}
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' }, 
              gap: '30px' 
            }}
          >
            {managers.map((manager) => (
              <Box 
                key={manager.id}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px',
                  flex: 1 
                }}
              >
                <Box 
                  sx={{ 
                    width: '140px', 
                    height: '180px', 
                    backgroundColor: '#E5E7EB', 
                    flexShrink: 0,
                    position: 'relative'
                  }}
                >
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#9CA3AF', fontSize: '11px', textAlign: 'center' }}>
                    <img src={img2} style={{width: "140px", height: "180px"}} alt="" />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 'bold', 
                      color: '#000000', 
                      fontSize: '18px', 
                      lineHeight: 1.2,
                      mb: 1.5,
                      textTransform: 'uppercase'
                    }}
                  >
                    {manager.name.split(' ')[0]} <br />
                    {manager.name.split(' ')[1]}
                  </Typography>
                  <Box 
                    sx={{ 
                      backgroundColor: '#E89F56', 
                      padding: '8px 12px',
                      color: '#FFFFFF'
                    }}
                  >
                    <Typography sx={{ fontSize: '12px', lineHeight: 1.3, fontWeight: '500' }}>
                      {manager.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

        </Box>
      </Box>
    </Box>
  );
}