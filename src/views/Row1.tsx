import DashboardCard from '@/components/DashboardCard';

type Props = {};

const Row1 = (props: Props) => {
  return (
    <>
      <DashboardCard gridArea={'a'}></DashboardCard>
      <DashboardCard gridArea={'b'}></DashboardCard>
      <DashboardCard gridArea={'c'}></DashboardCard>
    </>
  );
};

export default Row1;
