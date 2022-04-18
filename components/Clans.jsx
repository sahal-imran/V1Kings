import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


function Clans() {
    return (
        <>
            <Box id='CLAN' component={'div'} sx={{ width: '100%', py: 12,mt:-1 }} >
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
                        CLANS
                    </Typography>
                    </Zoom>
                    <Fade bottom >
                        <Box id='EINARR' className='SecWithRightImage' sx={{
                            display: 'flex', justifyContent: {
                                md: 'space-between',
                                xs: 'center'
                            }, alignItems: 'center', width: '100%', flexDirection: {
                                md: 'row',
                                xs: 'column'
                            }, mb: 14, py: 4
                        }} >
                            <Box component={'div'} sx={{
                                width: {
                                    md: '50%',
                                    xs: '100%'
                                }, display: 'flex', justifyContent: 'center', alignItems:  'center', flexDirection: 'column'
                            }} >
                                <Typography className='einarr' variant="h2" sx={{
                                    color: '#FFFFFF', lineHeight: "67.77px", textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, textTransform: 'uppercase', fontFamily: 'Njord-Alternative', fontSize: '80px'
                                }} gutterBottom component="div">
                                    EINARR
                                </Typography>
                                <Typography variant="subtitle" sx={{
                                    fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, fontFamily: 'Njord-Alternative',textAlign:'justify'
                                }} component="div">
                                    Birthed into the world by the tree of life, Yggdrasil, the Einarr are a race of enterprising viking warriors. Fierce, loyal, and courageous, the Einarr spent thousands of years on conquests throughout the five realms. After the cataclysmic battle of Skärr, the Einarr stopped their migrations and began building the cosmopolitan city of Midgard with their recently plundered technology. The AI quantum computing powers they acquired enabled them to produce virtual reality programs to hone and strengthen their warrior skills and instincts. Since the collapse of the city and the destruction of their main source of energy, the Hávamál stone, the Einarr have been hellbent on vengeance.
                                </Typography>
                            </Box>
                            <Box component={'div'} sx={{
                                width: {
                                    md: '40%',
                                    xs: "90%"
                                }, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                                    md: 0,
                                    xs: 4
                                }
                            }} >
                                <Box>
                                    <Image
                                        src={'/images/2.jpg'}
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                        alt={'img'}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                    <Fade bottom >
                        <Box id='VALKYR' className='SecWithLeftImage' sx={{
                            display: 'flex', justifyContent: {
                                md: 'space-between',
                                xs: 'center'
                            }, alignItems: 'center', width: '100%', flexDirection: {
                                md: 'row-reverse',
                                xs: 'column'
                            }, mb: 14, py: 4
                        }} >
                            <Box component={'div'} sx={{
                                width: {
                                    md: '50%',
                                    xs: '100%'
                                }, display: 'flex', justifyContent: 'center', alignItems:  'center', flexDirection: 'column'
                            }} >
                                <Typography className='Valkyr' variant="h2" sx={{
                                    color: '#FFFFFF', lineHeight: "67.77px", textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, textTransform: 'uppercase', fontFamily: 'Njord-Alternative', fontSize: '80px'
                                }} gutterBottom component="div">
                                    Valkyr
                                </Typography>
                                <Typography variant="subtitle" sx={{
                                    fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, fontFamily: 'Njord-Alternative',textAlign:'justify'
                                }} component="div">
                                    Watchful protectors of the Einarr, the Valkyr select the warriors who are valiant enough to join the ranks of the Gods. It was the Valkyr who gifted the Einarr with the first quantum computing technology, in an effort to save them from annihilation. The Valkyr possess the magic of the Seiðr, which allows them to both see and influence future events. While they seldom fight alongside the Einarr, they will if provoked. The Valkyr communicate closely with the gods Hiemdall and Tyr, and often do their bidding.
                                </Typography>
                            </Box>
                            <Box component={'div'} sx={{
                                width: {
                                    md: '40%',
                                    xs: "90%"
                                }, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                                    md: 0,
                                    xs: 4
                                }
                            }} >
                                <Box>
                                    <Image
                                        src={'/images/3.jpg'}
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                        alt={'img'}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                    <Fade bottom >
                        <Box id='Illïr' className='SecWithRightImage' sx={{
                            display: 'flex', justifyContent: {
                                md: 'space-between',
                                xs: 'center'
                            }, alignItems: 'center', width: '100%', flexDirection: {
                                md: 'row',
                                xs: 'column'
                            }, mb: 14, py: 4
                        }} >
                            <Box component={'div'} sx={{
                                width: {
                                    md: '50%',
                                    xs: '100%'
                                }, display: 'flex', justifyContent: 'center', alignItems:  'center', flexDirection: 'column'
                            }} >
                                <Typography className='Illïr' variant="h2" sx={{
                                    color: '#FFFFFF', lineHeight: "67.77px", textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, textTransform: 'uppercase', fontFamily: 'Njord-Alternative', fontSize: '80px'
                                }} gutterBottom component="div">
                                    Illïr
                                </Typography>
                                <Typography variant="subtitle" sx={{
                                    fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, fontFamily: 'Njord-Alternative',textAlign:'justify'
                                }} component="div">
                                    Abiding in the misty shadow realm of Niflhel, the Illïr live the lives of ghosts. Once warriors, they turned from the path of valor and committed heinous acts of treachery and violence. They are ruled over by Hel, the goddess of the underworld. Unbeknownst to the other races, it was the Illïr who first seeded the well of Hvergelmir with encoded artificial intelligence, which spread throughout the five realms. For millennia, the colossal gates of Niflhel have remained firmly closed, containing the evil within. However, the serpent Nídhöggr has destroyed the gates and unleashed a terrible power on the world of men. The Illïr will not stop until every trace of good in the world has been eradicated.
                                </Typography>
                            </Box>
                            <Box component={'div'} sx={{
                                width: {
                                    md: '40%',
                                    xs: "90%"
                                }, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                                    md: 0,
                                    xs: 4
                                }
                            }} >
                                <Box>
                                    <Image
                                        src={'/images/Viking-Devil-Background-12.jpg'}
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                        alt={'img'}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                    <Fade bottom >
                        <Box id='Tölva' className='SecWithLeftImage' sx={{
                            display: 'flex', justifyContent: {
                                md: 'space-between',
                                xs: 'center'
                            }, alignItems: 'center', width: '100%', flexDirection: {
                                md: 'row-reverse',
                                xs: 'column'
                            }, mb: 14, py: 4
                        }} >
                            <Box component={'div'} sx={{
                                width: {
                                    md: '50%',
                                    xs: '100%'
                                }, display: 'flex', justifyContent: 'center', alignItems:  'center', flexDirection: 'column'
                            }} >
                                <Typography className='Tölva' variant="h2" sx={{
                                    color: '#FFFFFF', lineHeight: "67.77px", textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, textTransform: 'uppercase', fontFamily: 'Njord-Alternative', fontSize: '80px'
                                }} gutterBottom component="div">
                                    Tölva
                                </Typography>
                                <Typography variant="subtitle" sx={{
                                    fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, fontFamily: 'Njord-Alternative',textAlign:'justify'
                                }} component="div">
                                    The Tölva are cybernetic organisms created through a combination of Valkyr magic and AI technology from the underworld. They are endowed with vast computational powers and superhuman strength. The Tölva are also immortal, and can regenerate human tissue. While the Valkyr intended them to fight alongside the viking Einarr, they rebelled against these wishes and forged the fifth realm of Tölvaheim. Protected by their vast citadel of Ün, the Tölva observe the events of history and transcribe them telepathically into a mainframe computer. Some of the Tölva believe it is their duty to defend the Einarr, their closest genetic kin, while those in power believe that their fate has already been sealed.
                                </Typography>
                            </Box>
                            <Box component={'div'} sx={{
                                width: {
                                    md: '40%',
                                    xs: "90%"
                                }, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                                    md: 0,
                                    xs: 4
                                }
                            }} >
                                <Box>
                                    <Image
                                        src={'/images/4.jpg'}
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                        alt={'img'}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                    <Fade bottom >
                        <Box id='Jötnar' className='SecWithRightImage' sx={{
                            display: 'flex', justifyContent: {
                                md: 'space-between',
                                xs: 'center'
                            }, alignItems: 'center', width: '100%', flexDirection: {
                                md: 'row',
                                xs: 'column'
                            }, mb: 14, py: 4
                        }} >
                            <Box component={'div'} sx={{
                                width: {
                                    md: '50%',
                                    xs: '100%'
                                }, display: 'flex', justifyContent: 'center', alignItems:  'center', flexDirection: 'column'
                            }} >
                                <Typography className='Jötnar' variant="h2" sx={{
                                    color: '#FFFFFF', lineHeight: "67.77px", textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, textTransform: 'uppercase', fontFamily: 'Njord-Alternative', fontSize: '80px'
                                }} gutterBottom component="div">
                                    Jötnar
                                </Typography>
                                <Typography variant="subtitle" sx={{
                                    fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, fontFamily: 'Njord-Alternative',textAlign:'justify'
                                }} component="div">
                                    The Jötnar have a common saying: “mylja hina veiku”, which translates to “crush the weak”. This horde of frost giants abide in the lair of Jötunheim and seek to fill the world with ice and darkness. Since time immemorial, they have attacked the Einarr and waged war against the Valkyr. Massive, hulking, hideous beings, the Jötnar wiped out all other races of giants and claimed the realm of mountains for themselves. It was the Jötnar who destroyed the cage of fire deep in the cavern of Nor, which formerly imprisoned the serpent Nídhöggr. Having formed an uneasy alliance with the Illïr devils, the Jötnar are on the brink of total control over the five realms.
                                </Typography>
                            </Box>
                            <Box component={'div'} sx={{
                                width: {
                                    md: '40%',
                                    xs: "90%"
                                }, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                                    md: 0,
                                    xs: 4
                                }
                            }} >
                                <Box>
                                    <Image
                                        src={'/images/Vikings-Cyborg-Background-3.jpg'}
                                        width={500}
                                        height={500}
                                        objectFit={'contain'}
                                        alt={'img'}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                </Container>
            </Box>
        </>
    )
}

export default Clans;