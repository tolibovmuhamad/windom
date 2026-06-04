import { useParams, Link } from 'react-router'; // если используешь react-router-dom, замени импорт
import { Box, Typography, Button } from '@mui/material';
import { IoTimeOutline, IoChevronBack } from 'react-icons/io5';
import img from '../../assets/image copy 12.png'

const smiArticles = [
  {
    id: 1,
    title: "Где лежат ключи от «рая»?",
    date: "18.05.2021",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_LC_online_logo.svg", // Сюда вставишь реальный логотип БИЗНЕСONLINE
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    subtitle: "«Изумрудный village»: чужие здесь не ходят",
    text: `Тенденции в загородной недвижимости Казани устремляются в цивилизованное русло: времена «Шанхая» с хаотичной застройкой прошли, отмечают эксперты. И сегодня покупатель готов переплатить и 30% выше рынка, лишь бы поселиться в коттеджном поселке со своей философией, строго выдержанной концепцией и развитой инфраструктурой.

Так где же находятся эти «райские» места, где комфорт и безопасность соседствуют с респектабельностью, — читайте в нашем обзоре коттеджных поселков Казани.

В Казани практически нет мест с красивым видом на наш тысячелетний город, поэтому каждый, кто приезжает в поселок премиум-класса...`
  },
  {
    id: 2,
    title: "На рынке новый тренд – свой дом в черте города",
    date: "01.06.2023",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_LC_online_logo.svg",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    subtitle: "Новые реалии загородного рынка",
    text: "Тенденции в загородной недвижимости Казани устремляются в цивилизованное русло..."
  },
  {
    id: 3,
    title: "На пути к расцвету субурбии: что ждет рынок ИЖС в 2021 году?",
    date: "24.09.2021",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_LC_online_logo.svg",
    image: "https://images.unsplash.com/photo-1542744094-2ab25be78b90?auto=format&fit=crop&w=800&q=80",
    subtitle: "Круглый стол по развитию ИЖС",
    text: "Продажи земельных участков и домов в пригороде без господдержки, доступной ипотеки..."
  }
];

export default function SectionSmiStatya1() {
  const { id } = useParams();
  const currentArticle = smiArticles.find((item) => item.id === Number(id));

  const otherArticles = smiArticles.filter((item) => item.id !== Number(id));

  if (!currentArticle) {
    return (
      <Box sx={{ maxWidth: '80%', margin: '140px auto', textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Статья не найдена</Typography>
        <Button component={Link} to="/smi" sx={{ mt: 2, color: '#E89F56' }}>Назад к статьям СМИ</Button>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        maxWidth: '80%', 
        margin: '0 auto', 
        padding: { xs: '140px 0 60px 0', md: '160px 0 80px 0' },
        backgroundColor: '#FFFFFF',

      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Button 
          component={Link} 
          to="/smi" 
          startIcon={<IoChevronBack />}
          sx={{ 
            color: '#A0AEC0', 
            textTransform: 'none', 
            fontSize: '14px',
            '&:hover': { color: '#E89F56' }
          }}
        >
          Назад к СМИ
        </Button>
        
        <Typography 
          variant="h6" 
          sx={{ 
            display: { xs: 'none', md: 'block' },
            fontWeight: 'bold', 
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          Другие <span style={{ color: '#E89F56' }}>новости</span>
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '50px' }}>
        
        <Box sx={{ flex: '1 1 auto', maxWidth: { md: '68%' }, width: '100%' }}>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#A0AEC0' }}>
              <IoTimeOutline style={{ fontSize: '16px', color: '#E89F56' }} />
              <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
                {currentArticle.date}
              </Typography>
            </Box>
            
            <Box sx={{ width: '150px', height: 'auto' }}>
              <img src={img} alt="Издание" style={{ width: '100%', objectFit: 'contain' }} />
            </Box>
          </Box>

          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              fontSize: { xs: '24px', md: '34px' }, 
              lineHeight: 1.3, 
              mb: 3,
              color: '#000000'
            }}
          >
            {currentArticle.title}
          </Typography>

          <Typography sx={{ color: '#2D3748', fontSize: '15px', lineHeight: 1.7, mb: 4, whiteSpace: 'pre-line' }}>
            {currentArticle.text.split('\n\n')[0]} 
          </Typography>

          <Box sx={{ width: '100%', maxHeight: '480px', overflow: 'hidden', mb: 4 }}>
            <img 
              src={currentArticle.image} 
              alt={currentArticle.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#000000' }}>
            {currentArticle.subtitle}
          </Typography>

          <Typography sx={{ color: '#2D3748', fontSize: '15px', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
            {currentArticle.text.split('\n\n').slice(1).join('\n\n')}
          </Typography>
        </Box>
        <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 28%' }, display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              display: { xs: 'block', md: 'none' },
              fontWeight: 'bold', 
              textTransform: 'uppercase',
              mb: 1
            }}
          >
            Другие <span style={{ color: '#E89F56' }}>новости</span>
          </Typography>

          {otherArticles.map((item) => (
            <Box 
              key={item.id}
              component={Link}
              to={`/smi/${item.id}`} 
              sx={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'block',
                border: '1px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                transition: 'border-color 0.2s',
                '&:hover': {
                  borderColor: '#E89F56'
                }
              }}
            >
              <Box sx={{ width: '100%', height: '180px' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box sx={{ padding: '20px' }}>
                <Typography 
                  sx={{ 
                    fontWeight: 'bold', 
                    fontSize: '15px', 
                    lineHeight: 1.4, 
                    mb: 2,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {item.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#A0AEC0' }}>
                  <IoTimeOutline style={{ fontSize: '14px', color: '#E89F56' }} />
                  <Typography sx={{ fontSize: '13px' }}>
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}