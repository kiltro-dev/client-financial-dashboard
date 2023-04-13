import DashboardCard from '@/components/DashboardCard';

type Props = {};

const Row3 = (props: Props) => {
  return (
    <>
      <DashboardCard gridArea={'g'}></DashboardCard>
      <DashboardCard gridArea={'h'}></DashboardCard>
      <DashboardCard gridArea={'i'}></DashboardCard>
      <DashboardCard gridArea={'j'}></DashboardCard>
    </>
  );
};

export default Row3;
