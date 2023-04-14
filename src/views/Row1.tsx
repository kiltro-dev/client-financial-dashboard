import DashboardCard from '@/components/DashboardCard';
import { useGetKpisQuery } from '@/state/api';

const Row1 = () => {
  const { data } = useGetKpisQuery();
  console.log({ data });
  return (
    <>
      <DashboardCard gridArea={'a'}></DashboardCard>
      <DashboardCard gridArea={'b'}></DashboardCard>
      <DashboardCard gridArea={'c'}></DashboardCard>
    </>
  );
};

export default Row1;
