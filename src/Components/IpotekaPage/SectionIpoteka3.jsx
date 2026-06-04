import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import img from '../../assets/image copy 20.png'
import img2 from '../../assets/image copy 21.png'

export default function SectionIpoteka3() {
  return (
    <Box 
      sx={{ 
        maxWidth: '80%', 
        margin: '0 auto', 
        padding: { xs: '40px 0', md: '80px 0' },
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column-reverse', md: 'row' },
          backgroundColor: '#F8FAFC',
          minHeight: '280px'
        }}
      >
        <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 55%' }, padding: { xs: '30px 20px', md: '40px 50px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 2, color: '#000', fontSize: { xs: '24px', md: '32px' } }}>
            Ипотечные кредиты
          </Typography>
          <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.6, mb: 4, maxWidth: '550px' }}>
            Выгодные ипотечные программы и специальные условия. Просто заполните анкету и получите одобрение. Всего один шаг, и дом — ваш. Ставка действует весь срок до 30 лет при сумме кредита до 100 млн рублей и первом взносе от 13,7%.
          </Typography>
          <Button variant="outlined" sx={{ borderColor: '#E89F56', color: '#000', borderRadius: '0px', textTransform: 'none', padding: '8px 24px', '&:hover': { borderColor: '#d48f45', backgroundColor: '#FFF8F2' } }}>
            Рассчитать платёж
          </Button>
        </Box>
        <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 45%' }, minHeight: '220px' }}>
          <img 
            src={img}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '40px' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, backgroundColor: '#F8FAFC', minHeight: '280px' }}>
          <Box sx={{ flex: '1 1 55%', padding: '30px 25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 2, color: '#000', fontSize: '22px' }}>
              Семейная<br />ипотека
            </Typography>
            <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.6, mb: 4 }}>
              Воспользоваться программой «Семейная ипотека» возможно до 1 июля 2024 года при рождении первого ребенка или последующих детей.
            </Typography>
            <Button variant="outlined" sx={{ borderColor: '#E89F56', color: '#000', borderRadius: '0px', textTransform: 'none', padding: '6px 20px', '&:hover': { borderColor: '#d48f45', backgroundColor: '#FFF8F2' } }}>
              Рассчитать платёж
            </Button>
          </Box>
          <Box sx={{ flex: '1 1 45%', minHeight: '200px' }}>
            <img 
              src={img2}
              alt="" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, backgroundColor: '#F8FAFC', minHeight: '280px' }}>
          <Box sx={{ flex: '1 1 55%', padding: '30px 25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 2, color: '#000', fontSize: '22px' }}>
              Господдержка<br />2023
            </Typography>
            <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.6, mb: 4 }}>
              Ипотеку с господдержкой могут получить граждане России, у которых есть постоянная регистрация, официальная работа и стабильный доход.
            </Typography>
            <Button variant="outlined" sx={{ borderColor: '#E89F56', color: '#000', borderRadius: '0px', textTransform: 'none', padding: '6px 20px', '&:hover': { borderColor: '#d48f45', backgroundColor: '#FFF8F2' } }}>
              Рассчитать платёж
            </Button>
          </Box>
          <Box sx={{ flex: '1 1 45%', minHeight: '200px' }}>
            <img 
              src={img2}
              alt="" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </Box>
        </Box>

      </Box>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column-reverse', md: 'row' },
          backgroundColor: '#F8FAFC',
          minHeight: '280px'
        }}
      >
        <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 55%' }, padding: { xs: '30px 20px', md: '40px 50px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 2, color: '#000', fontSize: { xs: '24px', md: '32px' } }}>
            IT Специалистам
          </Typography>
          <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.6, mb: 4, maxWidth: '550px' }}>
            Оформить ипотеку по сниженной ставке может гражданин России, трудоустроенный в компании, которая работает в сфере информационных технологий. Возраст — от 18 до 50 лет включительно. Стаж — не менее 3 месяцев на текущем месте работы.
          </Typography>
          <Button variant="outlined" sx={{ borderColor: '#E89F56', color: '#000', borderRadius: '0px', textTransform: 'none', padding: '8px 24px', '&:hover': { borderColor: '#d48f45', backgroundColor: '#FFF8F2' } }}>
            Рассчитать платёж
          </Button>
        </Box>
        <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 45%' }, minHeight: '220px' }}>
          <img 
            src={img}
            alt="" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          />
        </Box>
      </Box>
    </Box>
  );
}