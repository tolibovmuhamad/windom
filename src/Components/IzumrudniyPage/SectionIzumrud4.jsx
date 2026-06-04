import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FaCar } from 'react-icons/fa'; // Иконка машинки для карточек ТЦ
import img from '../../assets/image copy 25.png'

const timeMetrics = [
  { id: 1, value: "3 мин", label: "до автобусной остановки" },
  { id: 2, value: "5 мин", label: "до детского сада и школы" },
  { id: 3, value: "8 мин", label: "до лесопарка Дубрава" }
];

const mallCards = [
  { id: 1, label: "1", name: "ТЦ Южный", time: "26 минут", top: "77%", left: "57%" },
  { id: 2, label: "2", name: "ТЦ Мега", time: "28 минут", top: "72%", left: "56.7%" },
  { id: 3, label: "3", name: "ТЦ Кольцо", time: "32 минут", top: "70%", left: "35.5%" },
  { id: 4, label: "4", name: "ТЦ Парк Хаус", time: "45 минут", top: "51.5%", left: "33.8%" }
];

export default function TransportAccessibility() {
  const [hoveredMallId, setHoveredMallId] = useState(null);

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
      <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          color: '#000000',
          fontSize: { xs: '24px', md: '36px' },
          letterSpacing: '1px'
        }}
      >
        Транспортная <span style={{ color: '#E89F56' }}>доступность</span>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '30px', justifyContent: 'space-between' }}>
        <Typography variant="body1" sx={{ color: '#000000', lineHeight: 1.6, flex: '0 1 48%', fontSize: '15px' }}>
          <span style={{ color: '#E89F56', fontWeight: 'bold' }}>ИЗУМРУДНЫЙ VILLAGE</span> расположен в Приволжском районе Казани, по соседству с жилым комплексом Изумрудный. Рядом с поселком есть все для комфортной жизни.
        </Typography>
        <Typography variant="body1" sx={{ color: '#000000', lineHeight: 1.6, flex: '0 1 48%', fontSize: '15px' }}>
          Хорошая транспортная и пешеходная доступность, социальная и инженерная инфраструктура: детские сады, школы, административные учреждения.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '40px', justifyContent: 'space-between', mt: 2 }}>
        {timeMetrics.map((metric) => (
          <Box key={metric.id} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                color: '#E89F56', 
                fontWeight: 'normal', 
                fontSize: { xs: '54px', md: '72px' }, 
                lineHeight: 1,
                borderBottom: '1px solid #E2E8F0',
                width: '100%',
                pb: 1,
                mb: 1.5,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              {metric.value}
            </Typography>
            <Typography variant="body1" sx={{ color: '#000000', fontWeight: '500', fontSize: '15px', textAlign: { xs: 'center', sm: 'left' } }}>
              {metric.label}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', mt: 2 }}>
        {mallCards.map((mall) => {
          const isHovered = hoveredMallId === mall.id;
          return (
            <Box 
              key={mall.id}
              onMouseEnter={() => setHoveredMallId(mall.id)}
              onMouseLeave={() => setHoveredMallId(null)}
              sx={{ 
                flex: { xs: '1 1 100%', sm: '0 1 48%', md: '0 1 23.5%' },
                border: '1px solid #EFA35A',
                padding: '15px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                backgroundColor: isHovered ? '#FFF8F2' : '#FFFFFF',
                transition: 'background-color 0.2s ease-in-out',
                boxSizing: 'border-box'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Box sx={{ width: '20px', height: '20px', backgroundColor: '#E89F56', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContext: 'center', color: '#FFFFFF', fontSize: '11px', fontWeight: 'bold', pl: '6px', pt: '1px', boxSizing: 'border-box' }}>
                  {mall.label}
                </Box>
                <Typography sx={{ fontWeight: 'bold', color: '#000000', fontSize: '14px' }}>
                  {mall.name}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#718096', pl: '30px' }}>
                <FaCar size={14} color="#E89F56" />
                <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: '#000000' }}>
                  {mall.time}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden', boxShadow: '0px 10px 40px rgba(0,0,0,0.04)', mt: 2 }}>
        <img 
          src={img} 
          alt="" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
        <Box sx={{ position: 'absolute', top: '81.5%', left: '72%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Box sx={{ width: '14px', height: '14px', border: '2px solid #E89F56', borderRadius: '50%', backgroundColor: '#FFFFFF', boxSizing: 'border-box' }} />
          <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: '#000000', whiteSpace: 'nowrap', backgroundColor: 'rgba(255,255,255,0.8)', padding: '2px 6px' }}>
            Коттеджный посёлок <br /> Изумрудный Village
          </Typography>
        </Box>
        {mallCards.map((mall) => {
          const isHighlighted = hoveredMallId === mall.id;
          return (
            <Box
              key={mall.id}
              onMouseEnter={() => setHoveredMallId(mall.id)}
              onMouseLeave={() => setHoveredMallId(null)}
              sx={{
                position: 'absolute',
                top: mall.top,
                left: mall.left,
                transform: 'translate(-50%, -50%)',
                width: '24px',
                height: '24px',
                backgroundColor: '#E89F56',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '12px',
                cursor: 'pointer',
                boxShadow: isHighlighted ? '0px 0px 10px #E89F56' : '0px 2px 6px rgba(0,0,0,0.2)',
                transform: isHighlighted ? 'translate(-50%, -50%) scale(1.2)' : 'translate(-50%, -50%) scale(1)',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                zIndex: isHighlighted ? 10 : 5
              }}
            >
              {mall.label}
            </Box>
          );
        })}
        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#FFFFFF',
            border: '1px solid #EFA35A',
            borderRadius: '0px',
            color: '#000000',
            textTransform: 'none',
            padding: '10px 35px',
            fontWeight: 'bold',
            fontSize: '14px',
            boxShadow: '0px 4px 15px rgba(0,0,0,0.08)',
            zIndex: 6,
            '&:hover': {
              backgroundColor: '#FFF8F2',
              borderColor: '#EFA35A',
              boxShadow: '0px 4px 15px rgba(0,0,0,0.08)'
            }
          }}
        >
          Построить маршрут
        </Button>
      </Box>

    </Box>
  );
}