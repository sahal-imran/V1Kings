import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from "react-scroll";
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Button from '@mui/material/Button';
import AnchorLink from '@mui/material/Link';
import { SiDiscord } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return <>
    <Box component={'div'} sx={{ position: 'fixed', zIndex: 9999, width: '100%', backgroundColor: 'rgba(0,0,0,0.4)',boxShadow: 2 }} >
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: {
        md:'80px',
        sm:'70px',
        xs:'60px'
      } }} >
        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
          <AnchorLink target={'_blank'} className='socialIcon' sx={{ color: 'white', textDecoration: 'none', fontSize: '34px', mr: 4, transition: "all 0.3s ease" }} href="#"><SiDiscord /></AnchorLink>
          <AnchorLink target={'_blank'} className='socialIcon' sx={{ color: 'white', textDecoration: 'none', fontSize: '34px', transition: "all 0.3s ease" }} href="#"><BsTwitter /></AnchorLink>
        </Box>
        <Box component={'div'} sx={{
          display: {
            md: "flex",
            xs: "none"
          }, justifyContent: 'space-between', alignItems: 'center', height: '100%', width: '75%'
        }} >
          <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} >
            <Link
              duration={500}
              className={"navLink"}
              to={'CLAN'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              clans
            </Link>
            <Link
              duration={500}
              className={"navLink"}
              to={'ROADMAP'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              ROADMAP
            </Link>
            <Link
              duration={500}
              className={"navLink"}
              to={'TEAM'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              Team
            </Link>
            <Link
              duration={500}
              className={"navLink"}
              to={'MAP'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              MAP
            </Link>
          </Box>
          <Button sx={{
            backgroundColor: 'white', color: 'black', textTransform: 'uppercase', ml: 8, fontFamily: 'Njord-Alternative', "&:hover": {
              backgroundColor: "#ffd700",
            }, fontSize: "15px"
          }} variant="contained">
            connect Wallet
          </Button>
        </Box>
        {isOpen ? < CloseIcon onClick={toggleDrawer} sx={{
          color: '#FFFFFF', fontSize: '50px', cursor: 'pointer', display: {
            md: 'none'
          }
        }} /> : < MenuIcon onClick={toggleDrawer} sx={{
          display: {
            md: 'none'
          }, color: '#FFFFFF', fontSize: '50px', cursor: 'pointer'
        }} />}
      </Container>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='drawer'
      >
        <Box component={'div'} sx={{
          width: '100%', height: '100vh',
          display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column', backgroundColor: 'black'
        }} >
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 8 }} >
            <AnchorLink className='socialIcon' sx={{ color: 'white', textDecoration: 'none', fontSize: '34px', mr: 4, transition: "all 0.3s ease" }} href="#"><SiDiscord /></AnchorLink>
            <AnchorLink className='socialIcon' sx={{ color: 'white', textDecoration: 'none', fontSize: '34px', transition: "all 0.3s ease" }} href="#"><BsTwitter /></AnchorLink>
          </Box>
          <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'CLAN'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              clans
            </Link>
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'ROADMAP'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              ROADMAP
            </Link>
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'TEAM'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              Team
            </Link>
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'MAP'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              MAP
            </Link>
            <Button sx={{
              backgroundColor: 'white', color: 'black', textTransform: 'uppercase', ml: 2, fontFamily: 'Njord-Alternative', "&:hover": {
                backgroundColor: "#a3200f",
                color: 'white'
              }, mt: 2
            }} variant="contained">
              connect Wallet
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  </>
}

export default Navbar;
