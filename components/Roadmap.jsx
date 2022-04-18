import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Countdown from '../components/Countdown';
import Zoom from 'react-reveal/Zoom';

function Roadmap() {
    return (
        <Box id='ROADMAP' component={'div'} sx={{ width: '100%', backgroundColor: 'black', py: 12,mt:-1 }} >
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: {
                    md:'start',
                    xs:'center'
                }, flexDirection: 'column'
            }} >
                <Zoom>
                <Typography className='joinTheFight line clanLine' variant="h1" sx={{
                    position: 'relative',
                    color: '#FFFFFF', fontWeight: 700, lineHeight: "67.77px", textAlign: 'start', textTransform: 'uppercase', fontFamily: 'Njord-Alternative', pb: 4, mb: 10,fontSize:{
                        md:'6rem',
                        xs:'4rem'
                    }
                }} gutterBottom component="div">
                    Roadmap
                </Typography>
                </Zoom>
                <Countdown timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
            </Container>
        </Box>
    )
}

export default Roadmap