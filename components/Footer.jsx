import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import AnchorLink from '@mui/material/Link';
import { SiDiscord } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';


function Footer() {
    return (
        <Box id='footer' sx={{
            width: '100%', backgroundColor: "black", marginTop:{
                md:'-700px',
                xs:-1
            }
        }} >
            <Container
                sx={{
                    minHeight: {
                        md:'200vh',
                        xs:'60vh'
                    },
                    display: "flex",
                    justifyContent: 'flex-end',
                    alignItems: "flex-end",
                }}
                maxWidth="lg"
            >
                <Box sx={{
                    display: "flex",
                    justifyContent: {
                        md:'space-between',
                        xs:'center'
                    },
                    alignItems: "center",
                    width:'100%',
                    mb:2,
                    flexDirection:{
                        md:'row',
                        xs:'column'
                    }
                }} >
                    <AnchorLink sx={{ fontFamily: 'Njord-Alternative',color: 'white', textDecoration: 'none', fontSize: '16px', }} href="#">Business@mail.com</AnchorLink>
                    <AnchorLink sx={{ fontFamily: 'Njord-Alternative',color: 'white', textDecoration: 'none', fontSize: '16px',my:{
                        md:0,
                        xs:4
                    } }} href="#">Terms & Condition</AnchorLink>
                    <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <AnchorLink sx={{ color: 'white', textDecoration: 'none', fontSize: '34px',mr:2 }} href="#"><SiDiscord /></AnchorLink>
                        <AnchorLink sx={{ color: 'white', textDecoration: 'none', fontSize: '34px', transition: "all 0.3s ease" }} href="#"><BsTwitter /></AnchorLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
