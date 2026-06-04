import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Checkbox, FormControlLabel, Dialog, IconButton } from '@mui/material';
import { IoClose } from 'react-icons/io5'; // Крестик для закрытия
import img from '../../assets/image copy 15.png';
import { useTranslation } from 'react-i18next';

export default function SectionKomanda2() {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isAgreed, setIsAgreed] = useState(true);

  const teamData = [
    {
      id: 1,
      name: "Анфиса Давыдова",
      role: t('teamPage.marketingHead'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Евгений Кабаков",
      role: t('teamPage.salesHead'),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Эльвира Сергеева",
      role: t('teamPage.mortgageHead'),
      image: "https://images.unsplash.com/photo-15?auto=format&fit=crop&w=400&q=80" 
    },
    {
      id: 4,
      name: "Игорь Смирнов",
      role: t('teamPage.supportManager'),
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Иван Иванов",
      role: t('teamPage.supportManager'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      name: "Лариса Федотова",
      role: t('teamPage.leadLawyer'),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 7,
      name: "Алексей Кузин",
      role: t('teamPage.siteManager'),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      name: "Николай Елистратов",
      role: t('teamPage.foreman'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 9,
      name: "Фамиль Саляхиев",
      role: t('teamPage.foreman'),
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setIsFormOpen(false); 
  };

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
          flexWrap: 'wrap', 
          gap: '40px 3%',
          justifyContent: 'flex-start'
        }}
      >
        {teamData.map((employee) => (
          <Box 
            key={employee.id}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              flex: { 
                xs: '1 1 100%',    
                sm: '1 1 48%',     
                md: '0 1 31.33%'    
              },
              boxSizing: 'border-box',
              backgroundColor: '#FFFFFF'
            }}
          >
            <Box 
              sx={{ 
                width: '100%', 
                height: '380px', 
                overflow: 'hidden',
                backgroundColor: '#F3F4F6',
                position: 'relative'
              }}
            >
              <img 
                src={img} 
                alt={employee.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
              <Box 
                sx={{ 
                  position: 'absolute',
                  bottom: '0',
                  left: '5%',
                  right: '5%',
                  backgroundColor: '#FFFFFF',
                  padding: '15px 10px',
                  textAlign: 'center',
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
                  zIndex: 2
                }}
              >
                <Typography 
                  variant="subtitle1" 
                  sx={{ fontWeight: 'bold', color: '#000000', fontSize: '16px', mb: '4px' }}
                >
                  {employee.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ color: '#718096', fontSize: '13px', lineHeight: 1.2 }}
                >
                  {employee.role}
                </Typography>
              </Box>
            </Box>
            <Box 
              sx={{ 
                display: 'flex', 
                gap: '10px', 
                mt: '20px', 
                width: '100%' 
              }}
            >
              <Button
                variant="contained"
                onClick={() => setIsFormOpen(true)}
                sx={{
                  flex: 1,
                  backgroundColor: '#E89F56',
                  color: '#FFFFFF',
                  borderRadius: '0px', 
                  textTransform: 'none',
                  fontWeight: '500',
                  fontSize: '13px',
                  boxShadow: 'none',
                  padding: '8px 0',
                  '&:hover': { backgroundColor: '#d48f45', boxShadow: 'none' }
                }}
              >
                {t('teamPage.write')}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  flex: 1.3,
                  borderColor: '#E89F56',
                  color: '#000000',
                  borderRadius: '0px',
                  textTransform: 'none',
                  fontWeight: '500',
                  fontSize: '13px',
                  padding: '8px 0',
                  '&:hover': { borderColor: '#d48f45', backgroundColor: '#FFF8F2' }
                }}
              >
                {t('teamPage.leaveReview')}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Dialog
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        scroll="body"
        PaperProps={{
          sx: {
            position: 'relative',
            width: '100%',
            maxWidth: '460px',
            padding: { xs: '40px 20px', md: '50px 40px' },
            borderRadius: '0px', 
            boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        <IconButton
          onClick={() => setIsFormOpen(false)}
          sx={{ position: 'absolute', top: '15px', right: '15px', color: '#000000' }}
        >
          <IoClose size={26} />
        </IconButton>
        <Typography 
          variant="h5" 
          sx={{ fontWeight: 'bold', color: '#000000', textAlign: 'center', mb: 1, fontSize: '24px' }}
        >
          {t('teamPage.askSpecialist')}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ color: '#333333', textAlign: 'center', mb: 4, lineHeight: 1.4 }}
        >
          {t('teamPage.managerContact')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
          
          <Typography variant="body2" sx={{ mb: 1, fontWeight: '500', color: '#000000' }}>{t('teamPage.nameLabel')}</Typography>
          <TextField
            fullWidth
            required
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2.5, '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
          />
          <Typography variant="body2" sx={{ mb: 1, fontWeight: '500', color: '#000000' }}>{t('teamPage.emailLabel')}</Typography>
          <TextField
            fullWidth
            required
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2.5, '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
          />
          <Typography variant="body2" sx={{ mb: 1, fontWeight: '500', color: '#000000' }}>{t('teamPage.messageLabel')}</Typography>
          <TextField
            fullWidth
            required
            multiline
            rows={3}
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 4, '& .MuiOutlinedInput-root': { borderRadius: '0px' } }}
          />
          <Button
            type="submit"
            fullWidth
            disabled={!isAgreed}
            variant="contained"
            sx={{
              backgroundColor: '#E89F56',
              color: '#FFFFFF',
              padding: '12px 0',
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              borderRadius: '0px',
              boxShadow: 'none',
              mb: 3,
              '&:hover': { backgroundColor: '#d48f45', boxShadow: 'none' },
              '&.Mui-disabled': { backgroundColor: '#E2E8F0', color: '#A0AEC0' }
            }}
          >
            {t('teamPage.askQuestion')}
          </Button>
          <FormControlLabel
            control={
              <Checkbox
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                sx={{ color: '#CCCCCC', '&.Mui-checked': { color: '#000000' } }}
              />
            }
            label={
              <Typography sx={{ fontSize: '13px', color: '#000000', lineHeight: 1.3 }}>
                {t('teamPage.agreePolicy')}
              </Typography>
            }
          />
        </Box>
      </Dialog>
    </Box>
  );
}