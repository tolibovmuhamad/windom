import React from 'react';
import { Box, Typography } from '@mui/material';
import img from '../../assets/image copy 13.png'
import img2 from '../../assets/image copy 14.png'
import { useTranslation, Trans } from 'react-i18next';

const KomandaSection1 = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', p: 3, paddingTop: "104px" }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, textTransform: 'uppercase' }}>
        <Trans i18nKey="teamPage.title">
          НАША <span style={{ color: '#e29e57' }}>КОМАНДА</span>
        </Trans>
      </Typography>
      <Box sx={{ backgroundColor: '#e29e57', color: '#fff', p: 2, mb: 4, fontWeight: 'bold' }}>
        {t('teamPage.subtitle')}
      </Box>
      <Box sx={{ border: '1px solid #f0dcb3', p: 4, display: 'flex', gap: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
        <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
            {t('teamPage.description')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flex: 1 }}>
              <Box component={"img"} src={img} sx={{ width: '120px', height: '160px', bgcolor: '#eaeaea', flexShrink: 0 }}></Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>ИГОРЬ ЗАХАРОВ</Typography>
                <Box sx={{ bgcolor: '#e29e57', color: '#fff', px: 1, py: 0.5, mt: 1, fontSize: '0.85rem' }}>
                  {t('teamPage.projectManager')}
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flex: 1 }}>
              <Box component={"img"} src={img} sx={{ width: '120px', height: '160px', bgcolor: '#eaeaea', flexShrink: 0 }}></Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>ЛУИЗА НАЗИПОВА</Typography>
                <Box sx={{ bgcolor: '#e29e57', color: '#fff', px: 1, py: 0.5, mt: 1, fontSize: '0.85rem' }}>
                  {t('teamPage.chiefArchitect')}
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
        <Box component={"img"} src={img2} sx={{ flex: 1, minWidth: '250px', height: '300px', bgcolor: '#eaeaea' }}>
        </Box>

      </Box>
    </Box>
  );
};

export default KomandaSection1;