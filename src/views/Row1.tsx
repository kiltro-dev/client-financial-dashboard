import DashboardCard from '@/components/DashboardCard';
import { useGetKpisQuery } from '@/state/api';

type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  return (
    <>
      <DashboardCard gridArea={'a'}></DashboardCard>
      <DashboardCard gridArea={'b'}></DashboardCard>
      <DashboardCard gridArea={'c'}></DashboardCard>
    </>
  );
};

export default Row1;
