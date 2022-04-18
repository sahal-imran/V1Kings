import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';
import Link from '@mui/material/Link';


const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false
};

function ProjectLore() {

    //   const slider = useRef();

    //   const next = () => {
    //     slider.current.slickNext();
    //   };
    //   const previous = () => {
    //     slider.current.slickPrev();
    //   };

    return <>
        <Box component={'div'} sx={{ width: '100%', backgroundColor: 'black', py: 14,mt:-2 }} >
            <Fade right>
                <Container maxWidth="lg" sx={{
                    mt: {
                        sm:8
                    },
                    display: 'flex', justifyContent: {
                        md: 'space-between',
                        xs: 'center'
                    }, alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }, position: "relative"
                }} >
                    <Box component={'div'} sx={{
                        width: {
                            md: '60%',
                            xs: '90%'
                        }, display: 'flex', justifyContent: 'center', alignItems: {
                            md: 'start',
                            xs: 'center'
                        }, flexDirection: 'column',
                    }} >
                        <Link className='joinTheFight' variant="h2" sx={{
                            color: '#FFFFFF', fontWeight: 700, lineHeight: "67.77px", textAlign: {
                                md: 'start',
                                xs: 'center'
                            }, textTransform: 'uppercase', fontFamily: 'Njord-Alternative',textDecoration:'none',mb:4,mt:2
                        }} href="#" target={'_blank'} >Join the Fight!</Link>
                        <Typography variant="subtitle" sx={{
                            fontSize: '16px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: {
                                md: 'start',
                                xs: 'center'
                            }, fontFamily: 'Njord-Regular'
                        }} component="div">
                            The Einarr vikings are losing the war against the Jötnar, a legion of frost giants whose sole purpose is to fill the world with frost and darkness. In a desperate attempt to protect their digital city of Midgard, they have made a pact with the Seiðr, a coalition of divine beings with the power to shape the future. Through runic magic, the Seðir have produced an army of half-human cyborgs called the Tölva, capable of high intelligence and superhuman strength. But will this new army be enough to confront Nídhöggr the serpent, the Jötnar’s secret weapon?
                        </Typography>
                        <Typography className='etherium' variant="h4" sx={{
                            color: '#FFFFFF', lineHeight: "38.05px", fontStyle: 'normal', textAlign: {
                                md: 'start',
                                xs: 'center'
                            }, fontFamily: 'Njord-Alternative', mt: 8
                        }} component="div">
                            V1kings is a collection of 9,999 unique NFT's on the ETH BlockChain
                        </Typography>
                    </Box>
                    <Box component={'div'} sx={{
                        width: {
                            md: '40%',
                            xs: '100%'
                        },
                        mt: {
                            md: 0,
                            xs: 8
                        },
                        ml: {
                            md: 4
                        },
                        position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                    }} >
                        {/* <Box onClick={next} sx={{ position: 'absolute', top: 0, right: 0, zIndex: 99999, cursor: 'pointer' }} >
                            <Image
                                src="/assests/right.png"
                                alt="Logo"
                                width={100}
                                height={100}
                            />
                        </Box> */}
                        <Slider style={{ width: '100%' }} {...settings}>
                            <Box>
                                <img style={{ width: '100%' }} src="/images/1.jpg" alt="1" />
                            </Box>
                            <Box>
                                <img style={{ width: '100%' }} src="/images/2.jpg" alt="1" />
                            </Box>
                            <Box>
                                <img style={{ width: '100%' }} src="/images/3.jpg" alt="1" />
                            </Box>
                            <Box>
                                <img style={{ width: '100%' }} src="/images/4.jpg" alt="1" />
                            </Box>
                            <Box>
                                <img style={{ width: '100%' }} src="/images/5.jpg" alt="1" />
                            </Box>
                        </Slider>
                        {/* <Box onClick={previous} sx={{ position: 'absolute', bottom: "35px", left: 0, cursor: 'pointer' }} >
                            <Image
                                src="/assests/left.png"
                                alt="Logo"
                                width={100}
                                height={100}
                            />
                        </Box> */}
                    </Box>
                </Container>
            </Fade>
        </Box>
    </>
}

export default ProjectLore;