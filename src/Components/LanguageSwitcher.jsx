import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ru', label: 'РУ' },
  { code: 'en', label: 'EN' },
  { code: 'tg', label: 'ТҶ' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Box sx={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {languages.map((lang, index) => (
        <Box key={lang.code} sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            onClick={() => i18n.changeLanguage(lang.code)}
            sx={{
              minWidth: 'auto',
              padding: '4px 8px',
              fontSize: '13px',
              fontWeight: i18n.language === lang.code ? '700' : '400',
              color: i18n.language === lang.code ? '#EFA35A' : '#000000',
              textTransform: 'none',
              lineHeight: 1,
              '&:hover': {
                color: '#EFA35A',
                backgroundColor: 'transparent'
              }
            }}
          >
            {lang.label}
          </Button>
          {index < languages.length - 1 && (
            <Box sx={{ color: '#ccc', fontSize: '13px', userSelect: 'none' }}>|</Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
