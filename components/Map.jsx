import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { Link } from "react-scroll";
import Button from '@mui/material/Button';
import Zoom from 'react-reveal/Zoom';

function Map() {
    return (
        <Box id='MAP' component={'div'} sx={{ width: '100%', backgroundColor: 'black', py: 8, mt: -1 }} >
            <Zoom>
                <Container maxWidth="lg" sx={{
                    position: 'relative'
                }} >
                    <Box >
                        <Image
                            src={'/images/Map.jpg'}
                            height={850}
                            width={1200}
                            objectFit={'cover'}
                            alt={'img'}
                        />
                    </Box>
                    <Link
                        duration={500}
                        to={'Jötnar'}
                        spy={true}
                        activeClass={"active"}
                        smooth={true}
                    >
                        <Box sx={{ opacity:0,cursor: 'pointer', position: 'absolute', top: '17.6%', left: '41%', transform: "translate(-50%, -50%)", }} >
                            <Image
                                src={'/buttons/Jotnar.png'}
                                height={18}
                                width={80}
                                objectFit={'contain'}
                                alt={'img'}
                            />
                        </Box>
                    </Link>
                    <Link
                        duration={500}
                        to={'Illïr'}
                        spy={true}
                        activeClass={"active"}
                        smooth={true}
                    >
                        <Box sx={{ opacity:0,cursor: 'pointer', position: 'absolute', bottom: '7.8%', right: '6.9%', transform: "translate(-50%, -50%)", }} >
                            <Image
                                src={'/buttons/Illir.png'}
                                height={22}
                                width={80}
                                objectFit={'contain'}
                                alt={'img'}
                            />
                        </Box>
                    </Link>
                    <Link
                        duration={500}
                        to={'EINARR'}
                        spy={true}
                        activeClass={"active"}
                        smooth={true}
                    >
                        <Box sx={{ opacity:0,cursor: 'pointer', position: 'absolute', bottom: '27.8%', left: '26%', transform: "translate(-50%, -50%)", }} >
                            <Image
                                src={'/buttons/Einarr.png'}
                                height={24}
                                width={90}
                                objectFit={'contain'}
                                alt={'img'}
                            />
                        </Box>
                    </Link>
                    <Link
                        duration={500}
                        to={'Tölva'}
                        spy={true}
                        activeClass={"active"}
                        smooth={true}
                    >
                        <Box sx={{ opacity:0,cursor: 'pointer', position: 'absolute', top: '31.8%', right: '26%', transform: "translate(-50%, -50%)", }} >
                            <Image
                                src={'/buttons/Tolva.png'}
                                height={22}
                                width={70}
                                objectFit={'contain'}
                                alt={'img'}
                            />
                        </Box>
                    </Link>
                    <Link
                        duration={500}
                        to={'VALKYR'}
                        spy={true}
                        activeClass={"active"}
                        smooth={true}
                    >
                        <Box sx={{ opacity:0,cursor: 'pointer', position: 'absolute', bottom: '22%', left: '46.7%', transform: "translate(-50%, -50%)", }} >
                            <Image
                                src={'/buttons/Valkyr.png'}
                                height={22}
                                width={90}
                                objectFit={'contain'}
                                alt={'img'}
                            />
                        </Box>
                    </Link>
                </Container>
            </Zoom>
        </Box>
    )
}

export default Map;