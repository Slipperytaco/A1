import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import clsx from 'clsx';
const columns = [
  { field: 'id', headerName: 'Block', width: 100 , cellClassName: 'super-app-theme--cell-block'},
  { field: 'time', headerName: 'Time',width: 200 },
  { 
    field: 'amount', 
    headerName: 'Amount',
    width: 240,
    cellClassName: (params) => {
      if(params.value == null){
        return '';
      }
      return clsx('super-app-amount',{
        negative: params.value[0] == '-',
        positive: params.value[0] == '+',
      }
      )
    } 
  },
  {
    field: 'balance',
    headerName: 'Balance',
    width: 240,
  },
  {
    field: 'balance_USD',
    headerName: 'Balance, USD @Price',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 290,
    valueGetter: (params) =>
      `$${(params.row.balance * params.row.price) || ''} @ $${params.row.price || ''}`,
  },
  {
    field: 'profit',
    headerName: 'Profit',
    width: 150,
  },
];

const rows = [
  { id: 761702, time: '2022-05-01 01:58:46', amount: '+10000 BTC',balance: 10000.00, price:  2112.5, profit: '$1'},
  { id: 761699, time: '2022-11-05 01:25:04', amount: '+0.001 BTC', balance: 0.00294, price: 21126.82, profit: '$1' },
  { id: 761378, time: '2022-11-02 18:24:29', amount: '-0.00305 BTC', balance: 0.00194, price: 20433.07, profit: '$0'},
];



export default function TableauTable(){
    return (
      <Box
      sx={{
        height: 300,
        width: '100%',
        '& .super-app-theme--cell-block': {
          color: 'blue',
          fontWeight: '600',
        },
        '& .super-app-amount.negative': {
          color: 'red',
          fontWeight: '600',
        },
        '& .super-app-amount.positive': {
          color: 'green',
          fontWeight: '600',
        },
      }}
    >
      <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        />
    </Box>
    )
}