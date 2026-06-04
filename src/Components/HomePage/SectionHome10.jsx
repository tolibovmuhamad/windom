import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { SlLocationPin } from 'react-icons/sl';
import { BsStopwatch } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';
import { useTranslation, Trans } from 'react-i18next';

export default function OfficeSection() {
  const { t } = useTranslation();

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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          <Trans i18nKey="home.office.title">
            <span style={{ color: '#E29E65' }}>Офис</span> продаж
          </Trans>
        </Typography>
        <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: '#E29E65', mt: 1 }} />
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 'auto', md: '500px' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '350px', md: '100%' },
            order: { xs: 2, md: 1 },
            zIndex: 1,
          }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=49.215286%2C55.719468&mode=search&oid=165840259838&ol=biz&z=16"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
            style={{ position: 'relative', border: 'none' }}
          />
        </Box>

        <Box
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            top: { md: '5%' },
            left: { md: '4%' },
            width: { xs: '100%', md: '380px' },
            backgroundColor: '#FFFFFF',
            boxShadow: { xs: 'none', md: '0px 4px 20px rgba(0, 0, 0, 0.08)' },
            p: { xs: 3, md: 4 },
            zIndex: 2,
            order: { xs: 1, md: 2 },
            mb: { xs: 2, md: 0 },
            boxSizing: 'border-box',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#000000' }}>
            {t('home.office.centralOffice')}
          </Typography>
          <Typography variant="body2" sx={{ color: '#333333', mb: 4, lineHeight: 1.4 }}>
            {t('home.office.contactManagers')}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ color: '#E29E65', fontSize: '20px' }}><SlLocationPin size={24} color='#EFA35A' /></Typography>
              <Typography variant="body1" sx={{ color: '#000000', fontWeight: '500' }}>
                {t('home.office.address')}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ color: '#E29E65', fontSize: '20px' }}><BsStopwatch size={24} color='#EFA35A' /></Typography>
              <Typography variant="body1" sx={{ color: '#000000', fontWeight: '500' }}>
                {t('home.office.workHours')}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ color: '#E29E65', fontSize: '20px' }}><FaPhone size={24} color='#EFA35A'/></Typography>
              <Typography variant="body1" sx={{ color: '#000000', fontWeight: '500' }}>
                +7 (962) 555-25-25
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            component="a"
            href="https://yandex.ru/maps/?rtext=~55.719468,49.215286"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#E29E65',
              color: '#FFFFFF',
              textTransform: 'none',
              borderRadius: '0px',
              boxShadow: 'none',
              width: '100%',
              py: 1.5,
              fontSize: '14px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#d48d53',
                boxShadow: 'none',
              },
            }}
          >
            {t('home.office.getRoute')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}