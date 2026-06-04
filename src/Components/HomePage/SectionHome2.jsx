import { Box, Typography, Link } from '@mui/material';
import img from '../../assets/image copy 4.png'
import { useTranslation, Trans } from 'react-i18next';

export default function SectionHome2() {
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
        color: '#333333',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 4,
          mb: 8,
        }}
      >
        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <Typography variant="h2" sx={{ color: '#E29E65', fontWeight: 'normal', mb: 1 }}>
            10
          </Typography>
          <Box sx={{ width: '100%', height: '1px', backgroundColor: '#E29E65', mb: 1.5 }} />
          <Typography variant="body2" sx={{ color: '#2A2A2A', lineHeight: 1.4 }}>
            {t('home.stats.years')}
          </Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <Typography variant="h2" sx={{ color: '#E29E65', fontWeight: 'normal', mb: 1 }}>
            1051
          </Typography>
          <Box sx={{ width: '100%', height: '1px', backgroundColor: '#E29E65', mb: 1.5 }} />
          <Typography variant="body2" sx={{ color: '#2A2A2A', lineHeight: 1.4 }}>
            {t('home.stats.area')}
          </Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'left' }}>
          <Typography variant="h2" sx={{ color: '#E29E65', fontWeight: 'normal', mb: 1 }}>
            5063
          </Typography>
          <Box sx={{ width: '100%', height: '1px', backgroundColor: '#E29E65', mb: 1.5 }} />
          <Typography variant="body2" sx={{ color: '#2A2A2A', lineHeight: 1.4 }}>
            {t('home.stats.owners')}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gap: 6,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', 
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: '#E29E65',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                mb: 3,
              }}
            >
              {t('home.about.title')}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, fontWeight: "600" }}>
              <Trans i18nKey="home.about.founded">
                Компания <span style={{ color: '#E29E65', fontWeight: '600' }}>Win Dom</span> основана в 2012 году.
              </Trans>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, fontWeight: "600" }}>
              {t('home.about.direction')}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6, fontWeight: "600" }}>
              {t('home.about.experience')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, mt: { xs: 2, md: 0 } }}>
            {['yt', 'vk', 'in', 't'].map((icon) => (
              <Link key={icon} href="#" color="inherit" underline="none">
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    border: '1px solid #999',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#666',
                    textTransform: 'uppercase',
                    transition: '0.2s',
                    '&:hover': { borderColor: '#E29E65', color: '#E29E65' },
                  }}
                >
                  {icon}
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 1.5, 
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 40,
              left: 20,
              border: '1px solid #E29E65',
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              backgroundColor: '#F5F5F5', 
              boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
              overflow: 'hidden',
            }}
          >
            <img
              src={img}
              alt={t('home.about.title')}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                minHeight: '250px', 
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}