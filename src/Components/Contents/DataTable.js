import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";


const columns = [
  { 
    field: 'id', 
    headerName: 'Block', 
    width: 100 , 
    cellClassName: 'super-app-theme--cell-block'
  },
  
  { 
    field: 'time', 
    headerName: 'Time',
    width: 400 
  },

  { 
    field: 'value', 
    headerName: 'Amount',
    width: 240,
    valueGetter: (params) =>{
      if(params.row.from_wallet){
        return "- " + params.row.value
      }
      return "+ " + params.row.value
    },
    cellClassName: (params) => {
      if(params.value == null){
        return '';
      }
      return clsx('super-app-amount',{
        negative: params.row.from_wallet == true,
        positive: params.row.from_wallet == false,
      }
      )
    } 
  },
  
  {
    field: 'gas',
    headerName: 'Gas',
    width: 150,
  },
  {
    field: 'gas_price',
    headerName: 'Gas Price',
    width: 150,
  },
];

const rows = [
  { id: 796156, time: '2023-06-27 23:58:46', amount: '+1,315.29883216 BTC',balance: 3827.73917861, price: 30742.37, profit: '$14,553,634'},
  { id: 795293, time: '2023-06-21 18:05:55', amount: '-2,400.00015048 BTC',balance: 2512.440346, price: 28851.39, profit: '$9,802,643'},
  { id: 794639, time: '2023-06-17 02:28:20', amount: '+3,912.26051586 BTC',balance: 4912.44049648, price: 26021.2, profit: '$-4,100,474'},
  { id: 794199, time: '2023-06-14 01:12:39', amount: '+0.000012 BTC',balance: 1000.17998062, price: 25825, profit: '$-4,296,711'},
  { id: 786002, time: '2023-04-19 03:51:16', amount: '+1,000 BTC',balance: 1000.17996862 , price: 30121.65, profit: '$711'},
  { id: 781621, time: '2023-03-20 17:32:17', amount: '-0.02003138 BTC',balance: 0.17996862, price: 27833.08, profit: '$299'},
  { id: 781226, time: '2023-03-18 04:51:15', amount: '+0.2 BTC BTC',balance: 0.2, price: 26411.48, profit: '$15'},
  { id: 775837, time: '2023-02-10 15:29:36', amount: '-0.00096903 BTC',balance: 0.0, price: 21793.57, profit: '$15'},
  { id: 775836, time: '2023-02-10 15:13:46', amount: '-0.00200597 BTC',balance: 0.00096903, price: 21793.57, profit: '$15'},
  { id: 768465, time: '2022-12-22 18:19:28', amount: '+0.002916 BTC',balance: 0.002975, price: 16829.64, profit: '$0'},
  { id: 768464, time: '2022-12-22 18:07:37', amount: '+0.000059 BTC',balance: 0.000059, price: 16814.21, profit: '$0'},
];

export default function TableauTable(){

    // Get Search Terms
    const [searchParams,] = useSearchParams();

    // Get transactions data from the backend
    const [data, setData] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`http://localhost:8000/getTransactionsData?q=${searchParams.get('q')}`);
        setData(data);
    };
    useEffect(() => {
        getData();
    }, []);

    /* Tableau Table Data Rows */
    const rows = [];

    data.forEach((input) => {
    // Create a row object with the relevant data
    const row = {
      from_wallet: input[0]._nodes[0].address == searchParams.get('q'),
      id: input[0]._relationships[0].block_number,
      time: new Date(input[0]._relationships[0].timestamp * 1000),
      value: input[0]._relationships[0].value + " USD",
      gas: input[0]._relationships[0].gas,
      gas_price: input[0]._relationships[0].gas_price,
    };
    // Add the row object to the rows array
    rows.push(row);
    });
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