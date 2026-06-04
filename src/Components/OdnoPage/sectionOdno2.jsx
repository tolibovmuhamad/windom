import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Breadcrumbs, 
  Link,
  Card, 
  CardMedia, 
  CardContent 
} from '@mui/material';
// Импорт необходимых иконок
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import LandscapeIcon from '@mui/icons-material/LandscapeOutlined';
import AssignmentIcon from '@mui/icons-material/AssignmentOutlined';
import LayersIcon from '@mui/icons-material/LayersOutlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoomOutlined';

// Данные из 6 объектов для карточек
const housesData = [
  {
    id: 1,
    title: "Win-1",
    price: "13 800 000 ₽",
    image: "https://via.placeholder.com/400x250", // Замени на свои пути к фото
    area: "139,8 м2",
    plot: "5,1 сот.",
    type: "ИЖС",
    floors: 2,
    rooms: 5
  },
  {
    id: 2,
    title: "Win-2",
    price: "13 800 000 ₽",
    image: "https://via.placeholder.com/400x250",
    area: "139,8 м2",
    plot: "5,1 сот.",
    type: "ИЖС",
    floors: 2,
    rooms: 5
  },
  {
    id: 3,
    title: "Win-3",
    price: "13 800 000 ₽",
    image: "https://via.placeholder.com/400x250",
    area: "139,8 м2",
    plot: "5,1 сот.",
    type: "ИЖС",
    floors: 2,
    rooms: 5
  },
  {
    id: 4,
    title: "Win-4",
    price: "14 200 000 ₽",
    image: "https://via.placeholder.com/400x250",
    area: "150,0 м2",
    plot: "6,0 сот.",
    type: "ИЖС",
    floors: 2,
    rooms: 6
  },
  {
    id: 5,
    title: "Win-5",
    price: "12 500 000 ₽",
    image: "https://via.placeholder.com/400x250",
    area: "120,5 м2",
    plot: "4,5 сот.",
    type: "ИЖС",
    floors: 1,
    rooms: 4
  },
  {
    id: 6,
    title: "Win-6",
    price: "15 000 000 ₽",
    image: "https://via.placeholder.com/400x250",
    area: "165,2 м2",
    plot: "7,2 сот.",
    type: "ИЖС",
    floors: 2,
    rooms: 5
  },
];

// Общие стили для кнопок фильтра сверху
const filterButtonStyles = {
  borderRadius: '0px',
  textTransform: 'none',
  borderColor: '#e0e0e0',
  color: '#444',
  padding: '10px 24px',
  fontSize: '15px',
  fontWeight: '400',
  '&:hover': {
    borderColor: '#b5b5b5',
    backgroundColor: 'rgba(0,0,0,0.02)'
  }
};

export default function SectionOdno2(props) {
    const {img, name} = props
  return (
    <Box sx={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '20px', backgroundColor: '#fff' }}>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          mb: '30px'
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: '300', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            color: '#111',
            fontSize: { xs: '28px', md: '40px' }
          }}
        >
          {name} <span style={{ color: '#f2a952', fontWeight: '400' }}>дома</span>
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="outlined" sx={filterButtonStyles}>1-х этажные</Button>
          <Button variant="outlined" sx={filterButtonStyles}>2-х этажные</Button>
          <Button variant="outlined" sx={filterButtonStyles}>Таунхаусы</Button>
          
          <Button 
            variant="outlined" 
            endIcon={<MapOutlinedIcon />}
            sx={{ 
              ...filterButtonStyles, 
              borderColor: '#111', 
              color: '#111',
              '&:hover': { borderColor: '#333', backgroundColor: 'rgba(0,0,0,0.04)' }
            }}
          >
            На карте
          </Button>

          <Button 
            variant="contained" 
            sx={{ 
              ...filterButtonStyles, 
              backgroundColor: '#f2a952', 
              color: '#fff',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#d98e3b', boxShadow: 'none' }
            }}
          >
            Все дома
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: '100%', height: '1px', backgroundColor: '#f2a952', opacity: 0.3, mb: '40px' }} />
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '24px', 
          justifyContent: 'center',
          alignItems: 'stretch'
        }}
      >
        {housesData.map((house) => (
          <Card 
            key={house.id} 
            sx={{ 
              width: { xs: '100%', sm: '48%', md: '31%' }, 
              maxWidth: '400px',
              borderRadius: '0px', 
              boxShadow: 'none',
              border: '1px solid #e0e0e0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <CardMedia
              component="img"
              height="220"
              image={img}
              alt={house.title}
            />

            <CardContent sx={{ p: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#111' }}>
                  {house.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#f2a952' }}>
                  {house.price}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', mb: 3 }}>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <HomeIcon sx={{ color: '#f2a952' }} />
                  <Typography variant="body2" color="text.secondary">
                    Площадь дома — <strong>{house.area}</strong>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <LandscapeIcon sx={{ color: '#f2a952' }} />
                  <Typography variant="body2" color="text.secondary">
                    Площадь участка — <strong>{house.plot}</strong>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <AssignmentIcon sx={{ color: '#f2a952' }} />
                  <Typography variant="body2" color="text.secondary">
                    Тип участка — <strong>{house.type}</strong>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <LayersIcon sx={{ color: '#f2a952' }} />
                  <Typography variant="body2" color="text.secondary">
                    Количество этажей — <strong>{house.floors}</strong>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MeetingRoomIcon sx={{ color: '#f2a952' }} />
                  <Typography variant="body2" color="text.secondary">
                    Количество комнат — <strong>{house.rooms}</strong>
                  </Typography>
                </Box>
              </Box>
              <Button 
                variant="outlined" 
                fullWidth
                sx={{ 
                  borderColor: '#f2a952', 
                  color: '#111',
                  borderRadius: '0px',
                  textTransform: 'none',
                  fontWeight: '500',
                  padding: '10px 0',
                  mt: 'auto',
                  '&:hover': {
                    borderColor: '#d98e3b',
                    backgroundColor: 'rgba(242, 169, 82, 0.04)'
                  }
                }}
              >
                Детали проекта
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

    </Box>
  );
}