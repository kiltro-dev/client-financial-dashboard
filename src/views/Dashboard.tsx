import DashboardCard from '@/components/DashboardCard';
import { Box, useMediaQuery } from '@mui/material';

type Props = {};

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"

`;

const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1014px)');
  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'grid'}
      gap={'1.5rem'}
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: 'repeat(3, minmax(305px, 1fr))',
              gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <DashboardCard></DashboardCard>
      <DashboardCard gridArea={'a'}></DashboardCard>
      <DashboardCard gridArea={'b'}></DashboardCard>
      <DashboardCard gridArea={'c'}></DashboardCard>
      <DashboardCard gridArea={'d'}></DashboardCard>
      <DashboardCard gridArea={'e'}></DashboardCard>
      <DashboardCard gridArea={'f'}></DashboardCard>
      <DashboardCard gridArea={'g'}></DashboardCard>
      <DashboardCard gridArea={'h'}></DashboardCard>
      <DashboardCard gridArea={'i'}></DashboardCard>
      <DashboardCard gridArea={'j'}></DashboardCard>
    </Box>
  );
};

export default Dashboard;
