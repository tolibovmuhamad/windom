import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { FaPhoneAlt, FaRegEnvelope, FaYoutube, FaVk, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { useTranslation, Trans } from 'react-i18next';

export default function ContactsSection() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box 
      sx={{ 
        maxWidth: '80%', 
        margin: '0 auto', 
        padding: { xs: '40px 0', md: '108px 0' },
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          gap: '40px' 
        }}
      >
        <Box sx={{ flex: { xs: '1 1 100%', md: '0 1 55%' }, width: '100%' }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#000000', 
              textTransform: 'uppercase',
              lineHeight: 1.2,
              mb: 3,
              fontSize: { xs: '28px', md: '42px' }
            }}
          >
            <Trans i18nKey="contacts.title">
              Центральный офис продаж <span style={{ color: '#E89F56' }}>Win Dom</span>
            </Trans>
          </Typography>

          <Typography variant="h6" sx={{ color: '#333333', mb: 3, fontWeight: 'normal', fontSize: '18px' }}>
            {t('contacts.address')}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '30px', mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FaPhoneAlt style={{ color: '#E89F56' }} />
              <Typography sx={{ fontWeight: '500' }}>+7 (962) 555-25-25</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FaPhoneAlt style={{ color: '#E89F56' }} />
              <Typography sx={{ fontWeight: '500' }}>+7 (962) 591-79-60</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '10px', mb: 4 }}>
            {[
              { icon: <FaYoutube />, },
              { icon: <FaVk />, },
              { icon: <FaLinkedinIn />, },
              { icon: <FaWhatsapp />, }
            ].map((item, index) => (
              <IconButton 
                key={index}
                component="a"
                href={item.link}
                target="_blank"
                sx={{ 
                  border: '1px solid #A0A0A0', 
                  borderRadius: '4px',
                  color: '#4A5568',
                  padding: '8px',
                  '&:hover': { backgroundColor: '#E89F56', color: '#FFF', borderColor: '#E89F56' }
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
          <Box 
            sx={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 1.5, 
              border: '1px solid #E89F56', 
              padding: '10px 20px',
              backgroundColor: '#F4F4F4',
              borderRadius: '2px'
            }}
          >
            <FaRegEnvelope style={{ color: '#E89F56', fontSize: '18px' }} />
            <Typography sx={{ fontWeight: '500', color: '#000' }}>
              windom.kazan@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{ 
            flex: { xs: '1 1 100%', md: '0 1 40%' },
            width: '100%',
            backgroundColor: '#FFFFFF', 
            padding: { xs: '30px 20px', md: '40px' }, 
            borderRadius: '4px',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000', mb: 1 }}>
            {t('contacts.consultation')}
          </Typography>
          <Typography variant="body2" sx={{ color: '#666666', mb: 4 }}>
            {t('contacts.managerContact')}
          </Typography>

          <TextField 
            fullWidth 
            placeholder={t('contacts.yourName')} 
            variant="outlined" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ 
              mb: 2,
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#F5F5F5',
                '& fieldset': { borderColor: 'transparent' },
                '&:hover fieldset': { borderColor: '#E89F56' },
              }
            }}
          />
          <TextField 
            fullWidth 
            placeholder={t('contacts.phonePlaceholder')} 
            variant="outlined" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ 
              mb: 3,
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#F5F5F5',
                '& fieldset': { borderColor: 'transparent' },
                '&:hover fieldset': { borderColor: '#E89F56' },
              }
            }}
          />
          <Button 
            type="submit"
            fullWidth 
            variant="contained" 
            sx={{ 
              backgroundColor: '#E89F56', 
              color: '#FFFFFF',
              padding: '12px 0',
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              boxShadow: 'none',
              mb: 3,
              '&:hover': { backgroundColor: '#d48f45', boxShadow: 'none' }
            }}
          >
            {t('contacts.getConsultation')}
          </Button>
          <Typography variant="caption" display="block" sx={{ color: '#888888', lineHeight: 1.4, fontSize: '11px' }}>
            {t('contacts.privacyNote')}{' '}
            <a href="#" style={{ color: '#E89F56', textDecoration: 'none' }}>
              {t('contacts.privacyLink')}
            </a>
          </Typography>
        </Box>

      </Box>
    </Box>
  );
}