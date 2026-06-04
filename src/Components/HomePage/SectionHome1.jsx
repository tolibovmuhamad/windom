import { Box, Button, Typography } from "@mui/material";
import heroimg from "../../assets/image copy.png";
import img from "../../assets/image copy 2.png";
import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';

export default function SectionHome1() {
  const { t } = useTranslation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play(); 
    }
  };

  return (
    <>
      <Box 
        sx={{
          position: 'relative',
          backgroundImage: `url(${heroimg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <Box
          component="video"
          ref={videoRef}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8oObwm8RNZI3e1rXgQ056tTwcH0HBZ4Mesx7oyoV_HitW3y9rDf0xw&s"
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            opacity: isVideoPlaying ? 1 : 0, 
            transition: 'opacity 0.8s ease-in-out' 
          }}
        />
        <Box 
          sx={{
            position: 'relative',
            zIndex: 2, 
            width: "80%", 
            margin: "auto", 
            display: "flex", 
            height:"100%", 
            flexDirection: {xs: "column-reverse", lg: "row"}
          }}
        >
          <Box sx={{width: {xs: "100%", lg: "50%"}, display: "flex", flexDirection: "column", justifyContent: "end", paddingBottom: "100px"}}>
             <Typography sx={{fontSize:{xs: "20px", lg: "30px"}, fontWeight: "500", color:'#FFFFFF'}}>{t('home.hero.company')}</Typography>
             <Typography sx={{fontSize: {xs: "40px", lg: "150px"}, fontWeight: "800", color:'#EFA359'}}>WIN</Typography>
             <Typography sx={{fontSize:{xs: "15px", lg: "22px"}, fontWeight: "400", color:'#FFFFFF', width: {xs: "100%", lg: "68%"}}}>{t('home.hero.description')}</Typography>
             
             <Box sx={{display:"flex", alignItems: "center", gap: "15px", marginTop: "30px"}}>
               <Button sx={{backgroundColor: '#EFA359', color: '#FFFFFF', paddingX: {xs: "10px", lg: "30px"}, paddingY: {xs: "5px", lg: "15px"}}}>
                 {t('home.hero.moreProjects')}
               </Button>
               <Button sx={{backgroundColor: 'white', color: 'black', paddingX: {xs: "10px", lg: "30px"}, paddingY: {xs: "5px", lg: "15px"}}}>
                 {t('home.hero.leaveRequest')}
               </Button>
             </Box>
          </Box>
          <Box sx={{width: "50%", display: "flex", justifyContent: {xs:"center", lg: "end"}, alignItems: "end", paddingBottom: "50px"}}>
            <Box 
              component="img" 
              src={img} 
              alt="Смотреть видео" 
              onClick={handlePlayVideo} 
              sx={{
                width: {xs: "187px", lg: "329px"}, 
                height: {xs: "80px", lg: "180px"},
                cursor: 'pointer',
                transition: 'all 0.8s ease-in-out',
                '&:hover': { transform: isVideoPlaying ? 'none' : 'scale(1.05)' },
                opacity: isVideoPlaying ? 0 : 1,
                transform: isVideoPlaying ? 'translateX(120px) rotate(90deg) scale(0.3)' : 'translateX(0) rotate(0) scale(1)',
                pointerEvents: isVideoPlaying ? 'none' : 'auto' 
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}