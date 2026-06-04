import { Box, Container, Typography, Link, Stack } from '@mui/material';
import img from '../assets/image copy 3.png'
import { CiMail } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2A2A2A', 
        color: '#FFFFFF',
        pt: 6,
        pb: 4,
        fontFamily: 'sans-serif',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 4,
          }}
        >
          <Box sx={{ flex: '1 1 auto', minWidth: '180px' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                borderBottom: '2px solid #8C6E53', 
                pb: 1,
                mb: 2,
                display: 'inline-block',
              }}
            >
              {t('footer.aboutCompany')}
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.main')}</Link>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.ourTeam')}</Link>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.smiAbout')}</Link>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.reviews')}</Link>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.news')}</Link>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.contacts')}</Link>
            </Stack>
          </Box>
          <Box sx={{ flex: '1 1 auto', minWidth: '180px' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                borderBottom: '2px solid #8C6E53',
                pb: 1,
                mb: 2,
                display: 'inline-block',
              }}
            >
              {t('footer.projects')}
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.izumrudniy')}</Link>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.iqclub')}</Link>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.allProjects')}</Link>
            </Stack>
          </Box>
          <Box sx={{ flex: '1 1 auto', minWidth: '180px' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                borderBottom: '2px solid #8C6E53',
                pb: 1,
                mb: 2,
                display: 'inline-block',
              }}
            >
              {t('footer.mortgage')}
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.mortgageLoans')}</Link>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.forFamilies')}</Link>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.militaryMortgage')}</Link>
              <Link href="#" color="inherit" underline="none" sx={{ '&:hover': { color: '#8C6E53' } }}>{t('footer.govSupport')}</Link>
            </Stack>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              textAlign: { xs: 'left', md: 'right' },
              flex: '1 1 auto',
              minWidth: '220px',
            }}
          >
            <Box sx={{ mb: 2, width: '100%', maxWidth: '200px' }}>
              <img 
                src={img}
                alt="WINDOM" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              {['yt', 'vk', 'in', 't'].map((icon) => (
                <Link key={icon} href="#" color="inherit" underline="none">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      border: '1px solid #777',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      transition: '0.3s',
                      '&:hover': { borderColor: '#FFF', color: '#8C6E53' }
                    }}
                  >
                    {icon}
                  </Box>
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                border: '1px solid #555',
                p: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <CiMail />
              <Typography variant="body2" sx={{ fontSize: '13px', letterSpacing: '0.5px' }}>
                windom.kazan@gmail.com
              </Typography>
            </Box>

          </Box>
        </Box>
        <Box sx={{ mt: 6, borderTop: '1px solid #3A3A3A', pt: 2 }}>
          <Link href="#" color="inherit" underline="none" sx={{ fontSize: '12px', color: '#888', '&:hover': { color: '#FFF' } }}>
            {t('footer.privacy')}
          </Link>
        </Box>
      </Container>
    </Box>
  );
}