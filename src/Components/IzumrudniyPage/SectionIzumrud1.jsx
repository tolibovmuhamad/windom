import { Box, Typography } from '@mui/material';

export default function SectionIzumrud1(props) {
    const {img , name , name1} = props
  return (
    <Box 
      sx={{ 
        width: '100%',
        height: { xs: 'auto', md: '550px' },
        minHeight: { xs: '350px', md: '550px' },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#1A202C', 
        display: 'flex',
        alignItems: 'flex-end', 
        paddingTop: '140px' 
      }}
    >
      <img 
        src={img} 
        alt="" 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }} 
      />

      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)',
          zIndex: 2
        }}
      />

      <Box 
        sx={{ 
          maxWidth: '80%', 
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 3,
          paddingBottom: { xs: '30px', md: '50px' }, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: '#FFFFFF', 
            fontWeight: 'normal',
            fontSize: { xs: '14px', sm: '18px', md: '22px' },
            mb: 1,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}
        >
          {name}
        </Typography>
        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: '900', 
            textTransform: 'uppercase',
            fontSize: { xs: '36px', sm: '54px', md: '76px' },
            lineHeight: 1.1,
            letterSpacing: '1px',
            color: '#FFFFFF'
          }}
        >
          {name1}
        </Typography>
      </Box>

    </Box>
  );
}