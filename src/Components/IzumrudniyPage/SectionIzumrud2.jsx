import { Box, Typography } from '@mui/material';
import { MdOutlineSchool, MdOutlineDirectionsBus, MdOutlineStorefront, MdOutlineMap } from 'react-icons/md';

const features = [
  {
    id: 1,
    icon: <MdOutlineSchool size={32} color="#4A5568" />,
    text: "Рядом есть детские сады и школы"
  },
  {
    id: 2,
    icon: <MdOutlineDirectionsBus size={32} color="#4A5568" />,
    text: "Доступность общественного транспорта"
  },
  {
    id: 3,
    icon: <MdOutlineStorefront size={32} color="#4A5568" />,
    text: "Большое количество магазинов и ТЦ"
  },
  {
    id: 4,
    icon: <MdOutlineMap size={32} color="#4A5568" />,
    text: "Развитая внутренняя инфраструктура - есть всё на территории клуба"
  }
];

export default function AboutProjectSection(props) {
    const {img, name} = props
  return (
    <Box 
      sx={{ 
        maxWidth: '80%', 
        margin: '0 auto', 
        padding: { xs: '40px 0', md: '80px 0' },
        backgroundColor: '#FFFFFF'
      }}
    >
      <Typography 
        variant="body2" 
        sx={{ 
          color: '#E89F56', 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          letterSpacing: '1px',
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span style={{ fontSize: '18px' }}>○</span> О проекте
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: '60px', md: '5%' },
          alignItems: 'center'
        }}
      >
        <Box 
          sx={{ 
            flex: { xs: '1 1 auto', md: '0 0 50%' }, 
            position: 'relative', 
            width: '100%',
            height: { xs: '380px', sm: '460px', md: '480px' },
            boxSizing: 'border-box'
          }}
        >
          <Box 
            sx={{
              position: 'absolute',
              top: '0',
              right: '10%',
              width: '75%',
              height: '85%',
              border: '1px solid #E89F56',
              zIndex: 1
            }}
          />
          <Box 
            sx={{ 
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '46%',
              height: '85%',
              zIndex: 3,
              boxShadow: '0px 10px 30px rgba(0,0,0,0.08)'
            }}
          >
            <img 
              src={img}
              alt="" 
              style={{ width: '90%', height: '90%', objectFit: 'cover', display: 'block' }} 
            />
          </Box>
          <Box 
            sx={{ 
              position: 'absolute',
              top: '15px',
              right: '15%',
              width: '46%',
              height: '85%',
              zIndex: 2,
              boxShadow: '0px 10px 30px rgba(0,0,0,0.08)'
            }}
          >
            <img 
              src={img} 
              alt="" 
              style={{ width: '90%', height: '90%', objectFit: 'cover', display: 'block' }} 
            />
          </Box>
        </Box>
        <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 45%' }, width: '100%' }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#000000', 
              fontSize: '16px', 
              lineHeight: 1.6, 
              mb: 5 
            }}
          >
            <span style={{ color: '#E89F56', fontWeight: 'bold' }}>ИЗУМРУДНЫЙ VILLAGE</span> - это коттеджный посёлок категории Бизнес. Обособленная охраняемая территория на 40 частных домовладений и 25 таунхаусов в 25 минутах от центра Казани.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {features.map((item) => (
              <Box 
                key={item.id} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '25px' 
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, width: '40px' }}>
                  {item.icon}
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#000000', 
                    fontWeight: '500',
                    fontSize: '15px',
                    lineHeight: 1.4
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>

        </Box>

      </Box>
    </Box>
  );
}