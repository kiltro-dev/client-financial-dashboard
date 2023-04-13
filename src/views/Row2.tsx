import DashboardCard from '@/components/DashboardCard';

type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardCard gridArea={'d'}></DashboardCard>
      <DashboardCard gridArea={'e'}></DashboardCard>
      <DashboardCard gridArea={'f'}></DashboardCard>
    </>
  );
};

export default Row2;
