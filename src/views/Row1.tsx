import DashboardCard from '@/components/DashboardCard';
import { useGetKpisQuery } from '@/state/api';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
  Legend,
  LineChart,
  BarChart,
  Bar,
} from 'recharts';
import BoxHeader from '@/components/BoxHeader';
import ResponsiveContainerWrapper from '@/components/ResponsiveContainerWrapper';

const Row1 = () => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();

  const revenueExpenses = useMemo(() => {
    if (!data) return;
    const mappedData = data[0].monthlyData.map(
      ({ month, revenue, expenses }) => ({
        name: month.substring(0, 3),
        revenue,
        expenses,
      }),
    );

    return mappedData;
  }, [data]);

  const revenueProfit = useMemo(() => {
    if (!data) return;
    const mappedData = data[0].monthlyData.map(
      ({ month, revenue, expenses }) => ({
        name: month.substring(0, 3),
        revenue,
        profit: (revenue - expenses).toFixed(2),
      }),
    );
    return mappedData;
  }, [data]);

  const revenue = useMemo(() => {
    if (!data) return;
    const mappedData = data[0].monthlyData.map(({ month, revenue }) => ({
      name: month.substring(0, 3),
      revenue,
    }));

    return mappedData;
  }, [data]);

  return (
    <>
      <DashboardCard gridArea={'a'}>
        <BoxHeader
          title="Revenue and Expenses"
          subtitle="top line represents revenue, bottom line represets expenses"
          sideText="+4%"
        />
        <ResponsiveContainerWrapper>
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -5,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                ></stop>
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                ></stop>
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                ></stop>
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                ></stop>
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: '0' }}
              style={{ fontSize: '10px' }}
              domain={[8000, 23000]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              dot={true}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
              dot={true}
            />
          </AreaChart>
        </ResponsiveContainerWrapper>
      </DashboardCard>

      <DashboardCard gridArea={'b'}>
        <BoxHeader
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represets expenses"
          sideText="+4%"
        />
        <ResponsiveContainerWrapper>
          <LineChart
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: '10px' }}
            />
            <Tooltip />
            <Legend
              height={20}
              wrapperStyle={{ margin: '0 0 10px 0' }}
            ></Legend>
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainerWrapper>
      </DashboardCard>

      <DashboardCard gridArea={'c'}>
        <BoxHeader
          title="Revenue Month by Month"
          subtitle="graph representing the revenue month by month"
          sideText="+4%"
        />
        <ResponsiveContainerWrapper>
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                ></stop>
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                ></stop>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainerWrapper>
      </DashboardCard>
    </>
  );
};

export default Row1;
