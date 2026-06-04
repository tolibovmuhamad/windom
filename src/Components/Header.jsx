import { Box, Typography, Dialog, DialogContent, TextField, IconButton, FormControlLabel, Checkbox, Drawer, Collapse } from "@mui/material";
import logo from '../assets/image.png';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaCaretDown, FaPhone, FaYoutube, FaVk, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const id = React.useId();
  const { t } = useTranslation();
  
  const [projectsAnchor, setProjectsAnchor] = React.useState(null);
  const isProjectsOpen = Boolean(projectsAnchor);
  const [housesAnchor1, setHousesAnchor1] = React.useState(null);
  const isHousesOpen1 = Boolean(housesAnchor1);
  const [housesAnchor2, setHousesAnchor2] = React.useState(null);
  const isHousesOpen2 = Boolean(housesAnchor2);

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [agree, setAgree] = React.useState(true);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [mobileProjectsOpen, setMobileProjectsOpen] = React.useState(false);
  const [mobileHousesOpen, setMobileHousesOpen] = React.useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setIsMenuOpen(false);
  };
  const handleCloseDialog = () => setIsDialogOpen(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setMobileProjectsOpen(false);
    setMobileHousesOpen(false);
    setMobileCompanyOpen(false);
  };

  return (
    <>
      <Box sx={{ height: "105px", width: "100%", position: "absolute", backgroundColor: 'rgba(255, 255, 255, 0.45)', zIndex: 1000 }}>
        <Box sx={{ maxWidth: "80%", margin: "auto", display: "flex", height: "105px", justifyContent: "space-between", alignItems: "center" }}>
          
          <Link to="/"><Box><img src={logo} alt="Logo" /></Box></Link>
          
          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: "15px", alignItems: "center" }}>
            <Box>
              <Button 
                id={`${id}-projects-btn`} 
                aria-controls={isProjectsOpen ? `${id}-projects-menu` : undefined} 
                aria-haspopup="true" 
                aria-expanded={isProjectsOpen} 
                onClick={(e) => setProjectsAnchor(e.currentTarget)} 
                sx={{ color: '#000000', textTransform: 'none' }}
              >
                {t('header.ourProjects')} <FaCaretDown style={{ marginLeft: '4px' }} />
              </Button>
              <Menu 
                id={`${id}-projects-menu`} 
                anchorEl={projectsAnchor} 
                open={isProjectsOpen} 
                onClose={() => setProjectsAnchor(null)} 
                slotProps={{ list: { 'aria-labelledby': `${id}-projects-btn` } }}
              >
                <Link to="/izumrudniy" style={{ textDecoration: "none", color: "#000000" }}><MenuItem onClick={() => setProjectsAnchor(null)}>{t('header.izumrudniy')}</MenuItem></Link>
                <Link to="/iqclub" style={{ textDecoration: "none", color: "#000000" }}><MenuItem onClick={() => setProjectsAnchor(null)}>{t('header.iqclub')}</MenuItem></Link>
                <Link to="/usadi" style={{ textDecoration: "none", color: "#000000" }}><MenuItem onClick={() => setProjectsAnchor(null)}>{t('header.usady')}</MenuItem></Link>
                <Link to="/zimniy" style={{ textDecoration: "none", color: "#000000" }}><MenuItem onClick={() => setProjectsAnchor(null)}>{t('header.zimniyGorka')}</MenuItem></Link>
                <Link to="/konstantinovka" style={{ textDecoration: "none", color: "#000000" }}><MenuItem onClick={() => setProjectsAnchor(null)}>{t('header.konstantinovka')}</MenuItem></Link>
              </Menu>
            </Box>

            <Box>
              <Button 
                id={`${id}-houses1-btn`} 
                aria-controls={isHousesOpen1 ? `${id}-houses1-menu` : undefined} 
                aria-haspopup="true" 
                aria-expanded={isHousesOpen1} 
                onClick={(e) => setHousesAnchor1(e.currentTarget)} 
                sx={{ color: '#000000', textTransform: 'none' }}
              >
                {t('header.houses')} <FaCaretDown style={{ marginLeft: '4px' }} />
              </Button>
              <Menu 
                id={`${id}-houses1-menu`} 
                anchorEl={housesAnchor1} 
                open={isHousesOpen1} 
                onClose={() => setHousesAnchor1(null)} 
                slotProps={{ list: { 'aria-labelledby': `${id}-houses1-btn` } }}
              >
                <Link to="/odno" style={{ textDecoration: "none", color: "#000000" }}><MenuItem onClick={() => setHousesAnchor1(null)}>{t('header.oneFloor')}</MenuItem></Link>
                <Link to="/dva" style={{ textDecoration: "none", color: "#000000" }}><MenuItem onClick={() => setHousesAnchor1(null)}>{t('header.twoFloor')}</MenuItem></Link>
                <Link to="/tanxaus" style={{ textDecoration: "none", color: "#000000" }}><MenuItem onClick={() => setHousesAnchor1(null)}>{t('header.townhouses')}</MenuItem></Link>
                <Link to="/vsedoma" style={{ textDecoration: "none", color: "#000000" }}><MenuItem onClick={() => setHousesAnchor1(null)}>{t('header.allHouses')}</MenuItem></Link>
              </Menu>
            </Box>

            <Link to="/ipoteka"><Button sx={{ color: '#000000', textTransform: 'none' }}>{t('header.mortgage')}</Button></Link>

            <Box>
              <Button 
                id={`${id}-houses2-btn`} 
                aria-controls={isHousesOpen2 ? `${id}-houses2-menu` : undefined} 
                aria-haspopup="true" 
                aria-expanded={isHousesOpen2} 
                onClick={(e) => setHousesAnchor2(e.currentTarget)} 
                sx={{ color: '#000000', textTransform: 'none' }}
              >
                {t('header.aboutCompany')} <FaCaretDown style={{ marginLeft: '4px' }} />
              </Button>
              <Menu 
                id={`${id}-houses2-menu`} 
                anchorEl={housesAnchor2} 
                open={isHousesOpen2} 
                onClose={() => setHousesAnchor2(null)} 
                slotProps={{ list: { 'aria-labelledby': `${id}-houses2-btn` } }}
              >
                <Link to="/komanda" style={{ textDecoration: 'none' , color: "black" }}><MenuItem onClick={() => setHousesAnchor2(null)}>{t('header.team')}</MenuItem></Link>
                <Link to="/smi" style={{ textDecoration: 'none' , color: "black" }}><MenuItem onClick={() => setHousesAnchor2(null)}>{t('header.smiAbout')}</MenuItem></Link>
                <Link to="/novosti" style={{ textDecoration: 'none' , color: "black" }}><MenuItem onClick={() => setHousesAnchor2(null)}>{t('header.news')}</MenuItem></Link>
              </Menu>
            </Box>

            <Link to="/contacts" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#000000', textTransform: 'none' }}>{t('header.contacts')}</Button>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: '5px', alignItems: 'center' }}>
            <FaPhone color="#EFA35A" />
            <Typography sx={{ color: '#000000' }}>{t('header.phone')}</Typography>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: 'center' }}>
            <LanguageSwitcher />
          </Box>
          
          <Button 
            onClick={handleOpenDialog}
            sx={{ 
              color: '#000000', 
              padding: "10px 20px", 
              border: "1px solid #EFA35A", 
              borderRadius: "0px",
              display: { xs: "none", lg: "flex" }, 
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(239, 163, 90, 0.1)',
                borderColor: '#EFA35A'
              }
            }}
          >
            {t('header.orderCall')}
          </Button>

          <Box sx={{ display: { xs: "flex", lg: "none" }, alignItems: 'center', gap: '15px' }}>
            <FaPhone size={24} onClick={handleOpenDialog} style={{ cursor: 'pointer' }} /> 
            <IoIosMenu size={32} onClick={handleOpenMenu} style={{ cursor: 'pointer' }} />
          </Box>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '360px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box'
          }
        }}
      >
        <Box sx={{ overflowY: 'auto', pr: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <img src={logo} alt="Logo" style={{ maxHeight: '40px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LanguageSwitcher />
              <IconButton onClick={handleCloseMenu} sx={{ color: '#000000', p: 0 }}>
                <IoMdClose size={32} />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            <Box>
              <Box 
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', py: 0.5 }}
              >
                <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}>{t('header.ourProjects')}</Typography>
                <FaCaretDown style={{ marginLeft: '6px', transition: 'transform 0.2s', transform: mobileProjectsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </Box>
              <Collapse in={mobileProjectsOpen} timeout="auto" unmountOnExit>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', pl: 2, mt: 1, borderLeft: '2px solid #EFA35A' }}>
                  <Link to="/izumrudniy" style={{ textDecoration: "none", color: "#000000" }}><Typography onClick={handleCloseMenu} sx={{ fontSize: '16px', color: '#4a5568', cursor: 'pointer' }}>{t('header.izumrudniy')}</Typography></Link>
                  <Link to="/iqclub" style={{ textDecoration: "none", color: "#000000" }}><Typography onClick={handleCloseMenu} sx={{ fontSize: '16px', color: '#4a5568', cursor: 'pointer' }}>{t('header.iqclub')}</Typography></Link>
                  <Link to="/usadi" style={{ textDecoration: "none", color: "#000000" }}><Typography onClick={handleCloseMenu} sx={{ fontSize: '16px', color: '#4a5568', cursor: 'pointer' }}>{t('header.usady')}</Typography></Link>
                  <Link to="/zimniy" style={{ textDecoration: "none", color: "#000000" }}><Typography onClick={handleCloseMenu} sx={{ fontSize: '16px', color: '#4a5568', cursor: 'pointer' }}>{t('header.zimniyGorka')}</Typography></Link>
                  <Link to="/konstantinovka" style={{ textDecoration: "none", color: "#000000" }}><Typography onClick={handleCloseMenu} sx={{ fontSize: '16px', color: '#4a5568', cursor: 'pointer' }}>{t('header.konstantinovka')}</Typography></Link>
                </Box>
              </Collapse>
            </Box>

            <Box>
              <Box 
                onClick={() => setMobileHousesOpen(!mobileHousesOpen)}
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', py: 0.5 }}
              >
                <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}>{t('header.houses')}</Typography>
                <FaCaretDown style={{ marginLeft: '6px', transition: 'transform 0.2s', transform: mobileHousesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </Box>
              <Collapse in={mobileHousesOpen} timeout="auto" unmountOnExit>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', pl: 2, mt: 1, borderLeft: '2px solid #EFA35A' }}>
                  <Link to="/odno" style={{ textDecoration: "none", color: "#000000" }}><Typography onClick={handleCloseMenu} sx={{ fontSize: '16px', color: '#4a5568', cursor: 'pointer' }}>{t('header.oneFloor')}</Typography></Link>
                  <Link to="/dva" style={{ textDecoration: "none", color: "#000000" }}><Typography onClick={handleCloseMenu} sx={{ fontSize: '16px', color: '#4a5568', cursor: 'pointer' }}>{t('header.twoFloor')}</Typography></Link>
                  <Link to="/tanxaus" style={{ textDecoration: "none", color: "#000000" }}><Typography onClick={handleCloseMenu} sx={{ fontSize: '16px', color: '#4a5568', cursor: 'pointer' }}>{t('header.townhouses')}</Typography></Link>
                  <Link to="/vsedoma" style={{ textDecoration: "none", color: "#000000" }}><Typography onClick={handleCloseMenu} sx={{ fontSize: '16px', color: '#4a5568', cursor: 'pointer' }}>{t('header.allHouses')}</Typography></Link>
                </Box>
              </Collapse>
            </Box>

            <Link to="/ipoteka" onClick={handleCloseMenu} style={{ textDecoration: 'none', color: '#000000', padding: '4px 0' }}>
              <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{t('header.mortgage')}</Typography>
            </Link>

            <Box>
              <Box 
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', py: 0.5 }}
              >
                <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}>{t('header.aboutCompany')}</Typography>
                <FaCaretDown style={{ marginLeft: '6px', transition: 'transform 0.2s', transform: mobileCompanyOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </Box>
              <Collapse in={mobileCompanyOpen} timeout="auto" unmountOnExit>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', pl: 2, mt: 1, borderLeft: '2px solid #EFA35A' }}>
                  <Link to="/komanda" style={{ textDecoration: 'none', color: '#4a5568' }}><Typography onClick={handleCloseMenu} sx={{ fontSize: '16px', color: '#4a5568', cursor: 'pointer' }}>{t('header.team')}</Typography></Link>
                  <Link to="/smi" onClick={handleCloseMenu} style={{ textDecoration: 'none', color: '#4a5568' }}><Typography sx={{ fontSize: '16px' }}>{t('header.smiAbout')}</Typography></Link>
                  <Link to="/novosti" onClick={handleCloseMenu} style={{ textDecoration: 'none', color: '#4a5568' }}><Typography sx={{ fontSize: '16px' }}>{t('header.news')}</Typography></Link>
                </Box>
              </Collapse>
            </Box>

            <Link to="/contacts" onClick={handleCloseMenu} style={{ textDecoration: 'none', color: '#000000', padding: '4px 0' }}>
              <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{t('header.contacts')}</Typography>
            </Link>

          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaPhone color="#EFA35A" size={18} />
            <Typography sx={{ fontSize: '16px', fontWeight: '500', color: '#000000' }}>{t('header.phone')}</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box component="a" href="#" target="_blank" sx={{ width: '40px', height: '40px', border: '1px solid #999999', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a5568' }}>
              <FaYoutube size={20} />
            </Box>
            <Box component="a" href="#" target="_blank" sx={{ width: '40px', height: '40px', border: '1px solid #999999', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a5568' }}>
              <FaVk size={20} />
            </Box>
            <Box component="a" href="#" target="_blank" sx={{ width: '40px', height: '40px', border: '1px solid #999999', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EFA35A' }}>
              <FaLinkedin size={20} />
            </Box>
            <Box component="a" href="#" target="_blank" sx={{ width: '40px', height: '40px', border: '1px solid #999999', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a5568' }}>
              <FaWhatsapp size={20} />
            </Box>
          </Box>

          <Button 
            onClick={handleOpenDialog}
            variant="outlined"
            sx={{ 
              borderColor: '#EFA35A', 
              color: '#000000', 
              borderRadius: '0px',
              py: '10px',
              maxWidth: '180px',
              fontSize: '15px',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#d48f4d',
                backgroundColor: 'rgba(239, 163, 90, 0.05)'
              }
            }}
          >
            {t('header.orderCall')}
          </Button>
        </Box>
      </Drawer>

      <Dialog 
        open={isDialogOpen} 
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '0px',
            padding: '24px',
            position: 'relative'
          }
        }}
      >
        <IconButton 
          onClick={handleCloseDialog}
          sx={{ position: 'absolute', right: 12, top: 12, color: '#000000' }}
        >
          <IoMdClose size={28} />
        </IconButton>

        <DialogContent sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center' }}>
          
          <Typography variant="h5" sx={{ fontWeight: '500', lineHeight: 1.3, color: '#000000', mt: 2, px: 1 }}>
            {t('dialog.title')}
          </Typography>

          <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left', mt: 2 }}>
            
            <Box>
              <Typography sx={{ mb: '6px', fontWeight: '500' }}>{t('dialog.name')}</Typography>
              <TextField 
                fullWidth 
                variant="outlined" 
                placeholder={t('dialog.namePlaceholder')}
                InputProps={{ sx: { borderRadius: '0px' } }}
              />
            </Box>

            <Box>
              <Typography sx={{ mb: '6px', fontWeight: '500' }}>{t('dialog.phone')}</Typography>
              <TextField 
                fullWidth 
                variant="outlined" 
                placeholder={t('dialog.phonePlaceholder')}
                InputProps={{ sx: { borderRadius: '0px' } }}
              />
            </Box>

            <Button 
              type="submit"
              fullWidth
              variant="outlined"
              disabled={!agree}
              sx={{ 
                borderColor: '#EFA35A', 
                color: '#000000', 
                borderRadius: '0px',
                py: '12px',
                fontSize: '16px',
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#d48f4d',
                  backgroundColor: 'rgba(239, 163, 90, 0.05)'
                }
              }}
            >
              {t('dialog.submit')}
            </Button>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={agree} 
                  onChange={(e) => setAgree(e.target.checked)} 
                  sx={{ color: '#000000', '&.Mui-checked': { color: '#EFA35A' } }}
                />
              }
              label={
                <Typography variant="body2" sx={{ color: '#000000', fontSize: '13px', lineHeight: 1.3 }}>
                  {t('dialog.agree')}
                </Typography>
              }
              sx={{ alignItems: 'flex-start', mt: -1 }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}