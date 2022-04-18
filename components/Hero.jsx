import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';

function Hero() {
  return (
    <Box component={'div'} sx={{width: '100%' }} >
        <Image
        src={'/images/header-bg.jpg'}
        // layout={'fill'}
        width={2680}
        height={1800}
        objectFit={'centain'}
        alt={'img'}
        />
    </Box>
  )
}

export default Hero