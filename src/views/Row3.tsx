import BoxHeader from '@/components/BoxHeader';
import DashboardCard from '@/components/DashboardCard';
import ResponsiveContainerWrapper from '@/components/ResponsiveContainerWrapper';
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from '@/state/api';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';

const Row3 = () => {
  const { palette } = useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  console.log(transactionData);

  const dataGridStyle = {
    '& .MuiDataGrid-root': {
      color: palette.grey[300],
      border: 'none',
    },
    '& .MuiDataGrid-cell': {
      borderBottom: `1px solid ${palette.grey[800]} !important`,
    },
    '& .MuiDataGrid-columnHeaders': {
      borderBottom: `1px solid ${palette.grey[800]} !important`,
    },
    '& .MuiDataGrid-columnSeparator': {
      visibility: 'hidden',
    },
  };

  const productColumns = [
    {
      field: '_id',
      headerName: 'id',
      flex: 1,
    },
    {
      field: 'expense',
      headerName: 'Expense',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  const transactionColumns = [
    {
      field: '_id',
      headerName: 'id',
      flex: 1,
    },
    {
      field: 'buyer',
      headerName: 'Buyer',
      flex: 0.67,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: 'productIds',
      headerName: 'Count',
      flex: 0.1,
      renderCell: (params: GridCellParams) => params.value.length,
    },
  ];

  console.log(transactionData);
  return (
    <>
      <DashboardCard gridArea={'g'}>
        <BoxHeader
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
        <Box mt="0.5rem" p="0 0.5rem" height="75%" sx={dataGridStyle}>
          <ResponsiveContainerWrapper
            mt="0.5rem"
            p="0 0.5rem"
            height="75%"
            sx={dataGridStyle}
          >
            <DataGrid
              columnHeaderHeight={25}
              rowHeight={35}
              hideFooter={true}
              rows={productData || []}
              columns={productColumns}
            />
          </ResponsiveContainerWrapper>
        </Box>
      </DashboardCard>
      <DashboardCard gridArea={'h'}>
        <BoxHeader
          title="Recent Orders"
          sideText={`${transactionData?.length} latest transactions`}
        />
        <Box mt={'1rem'} p="0 0.5rem" height={'80%'} sx={dataGridStyle}>
          <ResponsiveContainerWrapper>
            <DataGrid
              columnHeaderHeight={25}
              rowHeight={35}
              hideFooter={true}
              rows={transactionData || []}
              columns={transactionColumns}
            />
          </ResponsiveContainerWrapper>
        </Box>
      </DashboardCard>
      <DashboardCard gridArea={'i'}></DashboardCard>
      <DashboardCard gridArea={'j'}></DashboardCard>
    </>
  );
};

export default Row3;
