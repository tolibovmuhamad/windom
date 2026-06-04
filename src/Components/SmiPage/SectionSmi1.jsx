import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FaRegUser, FaSearch } from 'react-icons/fa';

const SectionSmi1 = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', p: 3 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        <Box component="span" sx={{ color: '#f2994a', mr: 1 }}>
          СМИ
        </Box>
        О НАС
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          overflow: 'hidden',
          backgroundColor: '#fff',
        }}
      >
        <Box
          sx={{
            flex: { xs: '1', md: '1.4' },
            position: 'relative',
            minHeight: '450px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: { xs: 3, sm: 5 },
            color: '#fff',
            background: `linear-gradient(90deg, rgba(40,40,40,1) 0%, rgba(40,40,40,0.9) 45%, rgba(40,40,40,0.2) 100%), url('ПУТЬ_К_ТВОЕМУ_ФОТО') center/cover no-repeat`,
          }}
        >
          <Box sx={{ maxWidth: '500px' }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: '500', mb: 3, lineHeight: 1.3 }}
            >
              Деловая электронная газета «Бизнес Online»
            </Typography>
            <Typography
              variant="body1"
              sx={{ opacity: 0.9, lineHeight: 1.6, fontSize: '1.05rem' }}
            >
              “По-прежнему актуально предложение застройщиков “дом по цене казанской квартиры” в 20-30 км от границ Казани. Стоимость дома в границах нашего города, конечно будет дороже, но все же имеется возможность значительно улучшить жилищные условия, обменяв квартиру на дом”
            </Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#f2994a',
                color: '#fff',
                textTransform: 'none',
                padding: '10px 24px',
                fontSize: '1rem',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: '#e08836',
                },
              }}
            >
              Читать статью
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f9f8f4', 
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid #e0e0e0',
              backgroundColor: '#fff',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: '900', letterSpacing: '0.5px' }}
            >
              БИЗНЕС
              <Box component="span" sx={{ color: '#f2994a' }}>
                ONLINE
              </Box>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, color: '#555', fontSize: '1.2rem' }}>
              <FaRegUser style={{ cursor: 'pointer' }} />
              <FaSearch style={{ cursor: 'pointer' }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                borderBottom: '1px solid #e0e0e0',
                flex: 1,
              }}
            >
              <Box sx={{ flex: 1, p: 2, borderRight: '1px solid #e0e0e0' }}>
                <Typography variant="caption" color="textSecondary" display="block" sx={{ mb: 1 }}>
                  [Фото тут]
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  В Татарстане прогнозируют зной до 35 градусов
                </Typography>
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Typography variant="caption" color="textSecondary" display="block" sx={{ mb: 1 }}>
                  [Фото тут]
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  В Казани перекроют центр из-за ралли «Шелковый путь»
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                p: 2,
                borderBottom: '1px solid #e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1.5,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', lineHeight: 1.3 }}>
                  Карт-бланш на «Ту»: пасынок авиапрома становится его опорой?
                </Typography>
                <Box sx={{ width: '100px', height: '70px', bgcolor: '#eee', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#888' }}>
                  [Фото]
                </Box>
              </Box>
              <Typography variant="caption" color="textSecondary">
                Что осталось за кадром визита Мишустина на Казанский авиазавод
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                gap: 2,
                flex: 1.2,
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Главное к 18:00: Пригожин обещает «следующие победы на фронте», ФРГ – десятки новых Leopard для Украины
                </Typography>
              </Box>
              <Box sx={{ width: '90px', height: '60px', bgcolor: '#eee', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#888' }}>
                [Фото]
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionSmi1;