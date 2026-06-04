import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { BsSliders2Vertical } from 'react-icons/bs';
import img from '../../assets/image copy 4.png'
import img2 from '../../assets/image copy 5.png'
import { useTranslation, Trans } from 'react-i18next';


export default function SectionHome3() {
  const [sliderPos, setSliderPos] = useState(50);
  const { t } = useTranslation();

  const handleSliderChange = (e) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '80%', 
        margin: '0 auto',
        fontFamily: 'sans-serif',
        py: 6,
        backgroundColor: '#FFFFFF',
        color: '#333333',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 30,
          right: 0,
          width: '30%',
          height: '250px',
          borderTop: '1px solid #E29E65',
          borderRight: '1px solid #E29E65',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: 0,
          width: '30%',
          height: '250px',
          borderBottom: '1px solid #E29E65',
          borderLeft: '1px solid #E29E65',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          mb: 4,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Trans i18nKey="home.architecture.title">
          Уникальная <span style={{ color: '#E29E65', fontWeight: 'normal' }}>архитектура</span>
        </Trans>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          mb: 4,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '800px', 
            height: '450px', 
            overflow: 'hidden',
            userSelect: 'none',
            boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#1a237e',
            }}
          >
            
            <img
              src={img}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${sliderPos}%`, 
              height: '100%',
              overflow: 'hidden',
              backgroundColor: '#e3f2fd', 
            }}
          >
            <img
              src={img2}
              alt=""
              style={{
                width: '800px',
                height: '450px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPos}%`,
              width: '2px',
              backgroundColor: '#FFFFFF',
              zIndex: 3,
              pointerEvents: 'none', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "60px",
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: '#333',
                fontWeight: 'bold',
              }}
            >
             <BsSliders2Vertical />
            </Box>
          </Box>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={handleSliderChange}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'ew-resize',
              zIndex: 4,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: '600px', 
            lineHeight: 1.6,
            fontSize: '15px',
            color: '#2A2A2A',
            fontWeight: "600"
          }}
        >
          <Trans i18nKey="home.architecture.description">
            Мы не строим однотипных коробочных решений: дома из желтого или красного кирпича.
            Мы создаём <span style={{ color: '#E29E65' }}>уникальные</span>, ни на что не похожие,{' '}
            <span style={{ color: '#E29E65' }}>запоминающиеся проекты.</span>
          </Trans>
        </Typography>
      </Box>
    </Box>
  );
}