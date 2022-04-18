import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AnchorLink from '@mui/material/Link';
import { SiDiscord } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),

}));

function Team() {
    return (
        <Box id='TEAM' component={'div'} sx={{ width: '100%',backgroundColor:'black', mt: -1 }} >
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: {
                    md: 'start',
                    xs: 'center'
                }, flexDirection: 'column'
            }} >
                <Zoom>
                    <Typography className='joinTheFight line clanLine' variant="h1" sx={{
                        position: 'relative',
                        color: '#FFFFFF', fontWeight: 700, lineHeight: "67.77px", textAlign: 'start', textTransform: 'uppercase', fontFamily: 'Njord-Alternative', pb: 4, mb: 10, fontSize: {
                            md: '6rem',
                            xs: '4rem'
                        }
                    }} gutterBottom component="div">
                        Team
                    </Typography>
                </Zoom>
                <Box sx={{ flexGrow: 1, width: '100%' }}>
                    <Grid container rowSpacing={12} columnSpacing={{ xs: 1, sm: 3, md: 8 }} columns={{ md: 12, sm: 2, xs: 1 }} >
                        <Grid sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }} item md={12} sm={2} xs={1} >
                            <Fade bottom>
                                <Box sx={{ borderRadius: "50%", overflow: 'hidden' }} >
                                    <Image
                                        src={'/images/1.jpg'}
                                        width={500}
                                        height={500}
                                        objectFit={'cover'}
                                    />
                                </Box>
                                <Typography className='member1' variant="h5" sx={{
                                    textAlign: 'center', fontFamily: 'Njord-Alternative', textTransform: 'capitalize', mt: 2
                                }} gutterBottom component="div">
                                    Web Developer
                                </Typography>
                                <Typography className='member1' variant="h3" sx={{
                                    textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Njord-Alternative'
                                }} gutterBottom component="div">
                                    SahalImran
                                </Typography>
                            </Fade>
                        </Grid>
                        <Grid sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }} item md={4} sm={2} xs={1} >
                            <Fade left>
                                <Box sx={{ borderRadius: "50%", overflow: 'hidden' }} >
                                    <Image
                                        src={'/images/2.jpg'}
                                        width={500}
                                        height={500}
                                        objectFit={'cover'}
                                    />
                                </Box>
                                <Typography className='einarr' variant="h5" sx={{
                                    textAlign: 'center', fontFamily: 'Njord-Alternative', textTransform: 'capitalize', mt: 2
                                }} gutterBottom component="div">
                                    Block Chain Developer
                                </Typography>
                                <Typography className='einarr' variant="h3" sx={{
                                    textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Njord-Alternative'
                                }} gutterBottom component="div">
                                    John
                                </Typography>
                            </Fade>
                        </Grid>
                        <Grid sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }} item md={4} sm={2} xs={1} >
                            <Zoom>
                                <Box sx={{ borderRadius: "50%", overflow: 'hidden' }} >
                                    <Image
                                        src={'/images/3.jpg'}
                                        width={500}
                                        height={500}
                                        objectFit={'cover'}
                                    />
                                </Box>
                                <Typography className='Valkyr' variant="h5" sx={{
                                    textAlign: 'center', fontFamily: 'Njord-Alternative', textTransform: 'capitalize', mt: 2
                                }} gutterBottom component="div">
                                    NFT ART DESIGNER
                                </Typography>
                                <Typography className='Valkyr' variant="h3" sx={{
                                    textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Njord-Alternative'
                                }} gutterBottom component="div">
                                    MarkSmith
                                </Typography>
                            </Zoom>
                        </Grid>
                        <Grid sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }} item md={4} sm={2} xs={1} >
                            <Fade right>
                                <Box sx={{ borderRadius: "50%", overflow: 'hidden' }} >
                                    <Image
                                        src={'/images/4.jpg'}
                                        width={500}
                                        height={500}
                                        objectFit={'cover'}
                                    />
                                </Box>
                                <Typography className='Tölva' variant="h5" sx={{
                                    textAlign: 'center', fontFamily: 'Njord-Alternative', textTransform: 'capitalize', mt: 2
                                }} gutterBottom component="div">
                                    Designer
                                </Typography>
                                <Typography className='Tölva' variant="h3" sx={{
                                    textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Njord-Alternative'
                                }} gutterBottom component="div">
                                    MR X
                                </Typography>
                            </Fade>
                        </Grid>
                    </Grid>
                </Box>
                {/* <Box component={'div'} sx={{display:'flex',justifyContent:'end',alignItems:'end',minHeight:'60vh',width:'100%'}} >
                <Box sx={{
                    display: "flex",
                    justifyContent: {
                        md: 'space-between',
                        xs: 'center'
                    },
                    alignItems: "center",
                    width: '100%',
                    mb: 2,
                    flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }
                }} >
                    <AnchorLink sx={{ fontFamily: 'Njord-Alternative', color: 'white', textDecoration: 'none', fontSize: '16px', }} href="#">Business@mail.com</AnchorLink>
                    <AnchorLink sx={{
                        fontFamily: 'Njord-Alternative', color: 'white', textDecoration: 'none', fontSize: '16px', my: {
                            md: 0,
                            xs: 4
                        }
                    }} href="#">Terms & Condition</AnchorLink>
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <AnchorLink sx={{ color: 'white', textDecoration: 'none', fontSize: '34px', mr: 2 }} href="#"><SiDiscord /></AnchorLink>
                        <AnchorLink sx={{ color: 'white', textDecoration: 'none', fontSize: '34px', transition: "all 0.3s ease" }} href="#"><BsTwitter /></AnchorLink>
                    </Box>
                </Box>
                </Box> */}
            </Container>
        </Box>
    )
}

export default Team;