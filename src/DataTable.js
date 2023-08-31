import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Text } from '@chakra-ui/react';
const columns = [
  { field: 'id', headerName: 'ID', width:80 },
  { field: 'block', headerName: 'Block', width: 100 },
  { field: 'time', headerName: 'Time',width:200 },
  { field: 'amount', headerName: 'Amount', width: 240 },
  {
    field: 'balance',
    headerName: <Text>Balance</Text>,
    width: 160,
  },
  {
    field: 'balance_USD',
    headerName: 'Balance, USD @Price',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
    valueGetter: (params) =>
      `$${(params.row.balance * params.row.price) || ''} @ $${params.row.price || ''}`,
  },
  {
    field: 'profit',
    headerName: 'Profit',
    width: 100,
  },
];

const rows = [
  { id:1, block: 761702, time: '2022-05-01', amount: <Text>'+10,000 BTC'</Text>, balance: 10000.00, price:  2112.5, profit: '$1'},
];



export default function TableauTable(){
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 6 },
                },
            }}
        pageSizeOptions={[6, 10]}
        checkboxSelection
        />
    )
}