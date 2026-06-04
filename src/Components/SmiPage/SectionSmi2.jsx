import { Box, Typography, Button } from '@mui/material';
import img from '../../assets/image copy 11.png'
import { Link } from 'react-router';

const smiData = [
  {
    id: 1,
    title: "Где лежат ключи от «рая»?",
    text: "Тенденции в загородной недвижимости Казани устремляются в цивилизованное русло: времена «Шанхая» с хаотичной застройкой прошли, отмечают эксперты. И сегодня покупатель готов переплатить и 30% выше рынка, лишь бы поселиться в коттеджном поселке со своей философией, строго выдержанной концепцией и развитой инфраструктурой.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    link: "/smi/1"
  },
  {
    id: 2,
    title: "На рынке новый тренд – свой дом в черте города",
    text: "Тенденции в загородной недвижимости Казани устремляются в цивилизованное русло: времена «Шанхая» с хаотичной застройкой прошли, отмечают эксперты. И сегодня покупатель готов переплатить и 30% выше рынка, лишь бы поселиться в коттеджном поселке со своей философией, строго выдержанной концепцией и развитой инфраструктурой.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    link: "/smi/2"
  },
  {
    id: 3,
    title: "На рынке новый тренд – свой дом в черте города",
    text: "Тенденции в загородной недвижимости Казани устремляются в цивилизованное русло: времена «Шанхая» с хаотичной застройкой прошли, отмечают эксперты. И сегодня покупатель готов переплатить и 30% выше рынка, лишь бы поселиться в коттеджном поселке со своей философией, строго выдержанной концепцией и развитой инфраструктурой.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    link: "/smi/2"
  },
  {
    id: 4,
    title: "На пути к расцвету субурбии: что ждет рынок ИЖС в 2021 году?",
    text: "Продажи земельных участков и домов в пригороде без господдержки, доступной ипотеки и программ комплексного развития — курс в никуда. Правительство РТ сдерживает перевод сельхозземель под ИЖС, но наращивает его долю в общем объеме ввода жилья.",
    image: "https://images.unsplash.com/photo-1542744094-2ab25be78b90?auto=format&fit=crop&w=600&q=80",
    link: "/smi/3"
  }
];

export default function SectionSmi2() {
  return (
    <Box 
      sx={{ 
        maxWidth: '80%', 
        margin: '0 auto', 
        padding: { xs: '40px 0', md: '80px 0' },
        backgroundColor: '#FFFFFF'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {smiData.map((item) => (
          <Box 
            key={item.id}
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              border: '1px solid #F3A756',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF'
            }}
          >
            <Box 
              sx={{ 
                flex: { xs: '1 1 auto', md: '0 0 380px' },
                height: { xs: '240px', md: 'auto' }
              }}
            >
              <img 
                src={img} 
                alt={item.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </Box>

            <Box 
              sx={{ 
                flex: '1 1 auto', 
                padding: { xs: '20px', md: '40px' }, 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  lineHeight: 1.3,
                  mb: 2,
                  fontSize: { xs: '20px', md: '24px' }
                }}
              >
                {item.title}
              </Typography>

              <Typography 
                sx={{ 
                  color: '#4A5568', 
                  fontSize: '15px', 
                  lineHeight: 1.6, 
                  mb: 3 
                }}
              >
                {item.text}
              </Typography>

              <Button
                component={Link}
                to={item.link}
                variant="outlined"
                sx={{
                  color: '#4A5568',
                  borderColor: '#E2E8F0',
                  borderRadius: '0px',
                  textTransform: 'none',
                  fontSize: '12px',
                  padding: '6px 16px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'none',
                  '&:hover': {
                    borderColor: '#F3A756',
                    backgroundColor: '#FFF8F2',
                  }
                }}
              >
                Читать статью
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}