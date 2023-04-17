import BoxHeader from '@/components/BoxHeader';
import DashboardCard from '@/components/DashboardCard';
import FlexBetween from '@/components/FlexBetween';
import ResponsiveContainerWrapper from '@/components/ResponsiveContainerWrapper';
import { useGetProductsQuery, useGetKpisQuery } from '@/state/api';
import { Box, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from 'recharts';

const pieData = [
  { name: 'Group A', value: 600 },
  { name: 'Group B', value: 400 },
];

const Row2 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();

  const operationalExpenses = useMemo(() => {
    if (!operationalData) return;
    return operationalData[0].monthlyData.map(
      ({ month, operacionalExpenses, nonOperationalExpenses }) => ({
        name: month.substring(0, 3),
        'Operational Expenses': operacionalExpenses,
        'Non Operational Expenses': nonOperationalExpenses,
      }),
    );
  }, [operationalData]);

  const productExpenseData = useMemo(() => {
    if (!productData) return;
    return productData.map(({ _id, price, expense }) => ({
      id: _id,
      price,
      expense,
    }));
  }, [productData]);

  return (
    <>
      <DashboardCard gridArea={'d'}>
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          subtitle="top line represents revenue, bottom line represets expenses"
          sideText="+4%"
        />
        <ResponsiveContainerWrapper>
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 70,
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
              orientation="left"
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
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainerWrapper>
      </DashboardCard>
      <DashboardCard gridArea={'e'}>
        <BoxHeader title="Campaigns and Targerts" sideText="+4%" />
        <FlexBetween mt={'0.25rem'} gap={'1.5rem'} pr={'1rem'}>
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml={'-0.7rem'} flexBasis={'40%'} textAlign={'center'}>
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis={'40%'}>
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6">Losses are down 25%</Typography>
            <Typography mt={'0.4rem'} variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last month.
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardCard>
      <DashboardCard gridArea={'f'}>
        <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
        <ResponsiveContainerWrapper>
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
              tickFormatter={(v) => `$${v}`}
            />
            <Tooltip formatter={(v) => `$${v}`} />
            <ZAxis type="number" range={[20]} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainerWrapper>
      </DashboardCard>
    </>
  );
};

export default Row2;
