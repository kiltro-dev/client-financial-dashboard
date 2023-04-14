import { Box } from '@mui/material';
import React from 'react';
import { ResponsiveContainer } from 'recharts';

type Props = {
  children: JSX.Element;
};

const ResponsiveContainerWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box width={'100%'} height={'100%'} position={'relative'}>
      <Box
        width={'100%'}
        height={'100%'}
        position={'absolute'}
        top={0}
        left={0}
      >
        <ResponsiveContainer width="99%" height="100%">
          {children}
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ResponsiveContainerWrapper;
