import { useState } from 'react';
import { Link } from 'react-router-dom';
import PixIcon from '@mui/icons-material/Pix';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from './FlexBetween';

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState('dashboard');
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* left side */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: '28px' }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>

      {/* right side */}
      <FlexBetween gap="2rem">
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link to={'/'} onClick={() => setSelected('dashboard')}></Link>
        </Box>
        <Box></Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
